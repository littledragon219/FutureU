# FutureU Vercel 部署指南

## 问题诊断

如果用户无法注册，最可能的原因是：

1. **环境变量未配置** - Supabase 密钥没有在 Vercel 中设置
2. **Supabase 配置问题** - 回调 URL 或域名配置错误
3. **邮件确认问题** - 邮件服务配置或模板问题

## 解决步骤

### 1. 配置 Vercel 环境变量

在 Vercel 项目设置中添加以下环境变量：

```
NEXT_PUBLIC_SUPABASE_URL=https://jxsewcsxhiycofydtxhi.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4c2V3Y3N4aGl5Y29meWR0eGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTQ2NDcsImV4cCI6MjA2OTk3MDY0N30.yZmvdpVY3HkcHo0AANySLpUgyNsl0M6PUnEYnprJrcs
```

**操作步骤：**
1. 登录 Vercel 控制台
2. 选择你的项目
3. 进入 Settings > Environment Variables
4. 添加上述两个环境变量
5. 重新部署项目

### 2. 配置 Supabase 设置

在 Supabase 控制台中：

#### 2.1 配置站点 URL
1. 进入 Authentication > Settings
2. 在 Site URL 中添加你的 Vercel 域名，例如：
   ```
   https://your-app-name.vercel.app
   ```

#### 2.2 配置重定向 URL
1. 在 Redirect URLs 中添加：
   ```
   https://your-app-name.vercel.app/auth/callback
   ```

#### 2.3 配置邮件模板
1. 进入 Authentication > Email Templates
2. 确认 "Confirm signup" 模板中的重定向链接指向正确的域名

### 3. 检查代码问题

#### 3.1 环境变量检查
代码中已经有环境变量检查逻辑：

```typescript
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('缺少 Supabase 环境变量。请确保在 .env.local 文件中设置了 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY。')
}
```

#### 3.2 注册流程
注册时会：
1. 调用 `supabase.auth.signUp()`
2. 发送确认邮件
3. 用户点击邮件链接后通过 `/auth/callback` 处理
4. 重定向到 `/dashboard`

### 4. 调试步骤

#### 4.1 检查浏览器控制台
1. 打开浏览器开发者工具
2. 查看 Console 和 Network 标签
3. 尝试注册，观察是否有错误信息

#### 4.2 检查 Vercel 函数日志
1. 在 Vercel 控制台查看 Functions 日志
2. 查看是否有运行时错误

#### 4.3 测试环境变量
在浏览器控制台运行：
```javascript
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
```

### 5. 常见问题解决

#### 问题 1: "缺少 Supabase 环境变量"
- **原因**: Vercel 环境变量未配置
- **解决**: 按步骤 1 配置环境变量并重新部署

#### 问题 2: 注册后没有收到确认邮件
- **原因**: Supabase 邮件配置问题
- **解决**: 检查 Supabase 邮件设置和模板

#### 问题 3: 点击确认邮件后页面错误
- **原因**: 回调 URL 配置错误
- **解决**: 检查 Supabase 重定向 URL 配置

#### 问题 4: 数据库连接失败
- **原因**: Supabase URL 或密钥错误
- **解决**: 验证环境变量值是否正确

### 6. 验证部署成功

1. 访问部署的网站
2. 尝试注册新用户
3. 检查是否收到确认邮件
4. 点击确认链接，验证是否能正常登录

## 紧急联系

如果问题仍然存在，请提供：
1. Vercel 部署 URL
2. 浏览器控制台错误信息
3. Vercel 函数日志截图
4. 注册时的具体错误提示