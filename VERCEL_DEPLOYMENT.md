# FutureU Vercel 部署指南

## 🚨 重要：解决用户无法注册的问题

### 问题诊断
如果用户在Vercel部署后无法注册，主要原因可能是：
1. **环境变量未配置**
2. **Supabase邮箱验证设置**
3. **数据库表缺失**

## ✅ 解决步骤

### 第一步：配置Vercel环境变量

在Vercel项目设置中添加以下环境变量：

```
NEXT_PUBLIC_SUPABASE_URL=你的Supabase项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Supabase匿名密钥
```

### 第二步：Supabase配置（重要！）

#### 2.1 禁用邮箱验证（推荐）
1. 登录Supabase控制台
2. 进入 **Authentication** → **Settings**
3. 找到 **Email Auth** 部分
4. **关闭** "Enable email confirmations" 选项
5. 点击 **Save** 保存设置

#### 2.2 配置站点URL
1. 在 **Authentication** → **URL Configuration** 中设置：
   - **Site URL**: `https://你的域名.vercel.app`
   - **Redirect URLs**: 添加 `https://你的域名.vercel.app/auth/callback`

#### 2.3 执行数据库架构
1. 进入 **SQL Editor**
2. 执行以下SQL创建必要的表：

```sql
-- 创建用户资料表
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  education TEXT,
  career_goal TEXT,
  resume_url TEXT,
  linkedin_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建简历分析结果表
CREATE TABLE IF NOT EXISTS resume_analysis (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  resume_url TEXT NOT NULL,
  strengths JSONB,
  gaps JSONB,
  recommended_projects JSONB,
  skills_radar JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建项目进度表
CREATE TABLE IF NOT EXISTS project_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  project_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_started',
  progress INTEGER DEFAULT 0,
  deliverables JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建职位推荐表
CREATE TABLE IF NOT EXISTS job_recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  company TEXT NOT NULL,
  position TEXT NOT NULL,
  location TEXT,
  salary TEXT,
  match_score INTEGER,
  match_reason TEXT,
  tags JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建RLS策略
CREATE POLICY "Users can view own profile" 
  ON profiles FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own resume analysis" 
  ON resume_analysis FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own project progress" 
  ON project_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own project progress" 
  ON project_progress FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own job recommendations" 
  ON job_recommendations FOR SELECT 
  USING (auth.uid() = user_id);

-- 启用RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE resume_analysis ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_recommendations ENABLE ROW LEVEL SECURITY;

-- 创建触发器函数
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, education, career_goal)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', 'User'),
    COALESCE(NEW.raw_user_meta_data->>'education', ''),
    COALESCE(NEW.raw_user_meta_data->>'career_goal', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 创建触发器
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
```

#### 2.4 创建存储桶
1. 进入 **Storage**
2. 创建名为 `resumes` 的存储桶
3. 设置为 **Public bucket**

### 第三步：验证配置

#### 3.1 检查环境变量
在浏览器开发者工具中运行：
```javascript
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '已配置' : '未配置')
```

#### 3.2 测试注册流程
1. 访问你的Vercel部署网站
2. 尝试注册新用户
3. 检查浏览器控制台是否有错误
4. 验证用户是否能直接登录到dashboard

## 🔧 新的注册流程

现在的注册流程已经简化：
1. **用户填写注册信息**（姓名、邮箱、教育背景、职业目标、密码）
2. **直接创建账户**（无需邮箱验证）
3. **自动登录**并跳转到dashboard
4. **触发器自动创建**用户资料记录

## 🐛 常见问题解决

### 问题1：注册后显示"账户未激活"
**解决方案**：确保在Supabase中禁用了邮箱验证
- Authentication → Settings → 关闭 "Enable email confirmations"

### 问题2：数据库错误"table 'profiles' not found"
**解决方案**：执行完整的数据库架构SQL

### 问题3：注册成功但无法登录
**解决方案**：检查密码要求，确保至少6位字符

### 问题4：环境变量未生效
**解决方案**：
1. 确保环境变量以 `NEXT_PUBLIC_` 开头
2. 在Vercel中重新部署项目
3. 检查变量名拼写是否正确

## 📋 部署检查清单

- [ ] Vercel环境变量已配置
- [ ] Supabase邮箱验证已禁用
- [ ] 数据库表已创建
- [ ] 存储桶已设置
- [ ] 站点URL已配置
- [ ] 注册功能测试通过
- [ ] 登录功能测试通过

## 🎯 验证部署成功

成功部署后，用户应该能够：
1. ✅ 直接注册账户（无需邮箱验证）
2. ✅ 立即登录到dashboard
3. ✅ 查看个人资料
4. ✅ 上传简历文件

如果以上功能都正常，说明部署成功！