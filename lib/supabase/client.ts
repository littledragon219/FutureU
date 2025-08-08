// lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

// 从环境变量中读取 Supabase URL 和 Anon Key
// 注意：在 Next.js 客户端组件中，环境变量需要以 NEXT_PUBLIC_ 开头
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 创建 Supabase 客户端实例
// 使用单例模式确保在整个应用中只创建一个客户端实例
let supabase: ReturnType<typeof createClient> | undefined

export function getSupabaseClient() {
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  }
  return supabase
}
