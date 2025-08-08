"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useUserStore } from "@/store/user-store"
import { Loader2, LogIn, Mail, UserRound, GraduationCap, TargetIcon, BadgeCheck } from 'lucide-react'

export default function Page() {
  const router = useRouter()
  const { login, register, loading, setLoading } = useUserStore()
  const [mode, setMode] = useState<"login" | "register">("login")

  // 登录表单
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // 注册表单
  const [name, setName] = useState("")
  const [edu, setEdu] = useState("")
  const [goal, setGoal] = useState("")

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      // 模拟登录成功
      await new Promise((r) => setTimeout(r, 800))
      login({
        name: "未来同学",
        email,
        education: "未填写",
        careerGoal: "成为 AI 产品经理",
      })
      router.push("/dashboard")
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogle() {
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 800))
      login({
        name: "Google 用户",
        email: "google_user@example.com",
        education: "商科",
        careerGoal: "转型为 AI 产品经理",
      })
      router.push("/dashboard")
    } finally {
      setLoading(false)
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !edu) return
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 1000))
      register({ name, email, education: edu, careerGoal: goal })
      router.push("/dashboard")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold">
              FU
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              FutureU
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-purple-700" href="#features">平台特色</a>
            <a className="hover:text-purple-700" href="#security">数据安全</a>
            <a className="hover:text-purple-700" href="#faq">常见问题</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
            FutureU · 面向非技术背景的 AI 产品经理成长平台
          </h1>
          <p className="mb-6 text-gray-600">
            使用邮箱或 Google 登录，开启你的职业转型之旅。我们将为你分析背景、识别优势、补齐技能缺口，并提供高质量的模拟项目。
          </p>
          <ul className="grid gap-3 text-gray-700">
            <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-purple-600" /> 简洁、现代、可信赖的界面</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-purple-600" /> 背景分析与岗位推荐</li>
            <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-purple-600" /> 模拟项目与作品集沉淀</li>
          </ul>
        </div>

        <Card className="border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="mb-6 flex gap-2 rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setMode("login")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${
                  mode === "login" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                登录
              </button>
              <button
                onClick={() => setMode("register")}
                className={`flex-1 rounded-md py-2 text-sm font-medium transition ${
                  mode === "register" ? "bg-white shadow text-gray-900" : "text-gray-500 hover:text-gray-900"
                }`}
              >
                注册
              </button>
            </div>

            {mode === "login" ? (
              <form onSubmit={handleLogin} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">邮箱</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-9"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">密码</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                </div>

                <Button type="submit" disabled={loading} className="mt-2 bg-purple-600 hover:bg-purple-700">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                  立即登录
                </Button>

                <Button type="button" variant="secondary" disabled={loading} onClick={handleGoogle}>
                  <img
                    alt="Google"
                    src="/placeholder.svg?height=16&width=16"
                    className="mr-2 h-4 w-4"
                  />
                  使用 Google 登录
                </Button>

                <p className="text-xs text-gray-500">
                  登录/注册即表示同意
                  <Link className="mx-1 text-purple-600 hover:underline" href="/terms">服务条款</Link>
                  与
                  <Link className="ml-1 text-purple-600 hover:underline" href="/privacy">隐私政策</Link>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">姓名</Label>
                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="请输入姓名"
                      className="pl-9"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-email">邮箱</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="用于接收通知与项目进度"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edu">教育背景</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="edu"
                      placeholder="例如：人文、商科、艺术设计等"
                      className="pl-9"
                      value={edu}
                      onChange={(e) => setEdu(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="goal">职业目标</Label>
                  <div className="relative">
                    <TargetIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <textarea
                      id="goal"
                      placeholder="请简要描述你的职业目标（如：1 年内转型为 AI 产品经理）"
                      className="min-h-[80px] w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-password">设置密码</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="至少 8 位字符"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                  />
                </div>

                <Button type="submit" disabled={loading} className="mt-2 bg-purple-600 hover:bg-purple-700">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  立即注册并进入控制面板
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      <footer className="border-t bg-white/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-sm text-gray-500">
          <p>© 2025 FutureU. 保留所有权利</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-purple-700">隐私政策</Link>
            <Link href="/terms" className="hover:text-purple-700">服务条款</Link>
            <Link href="/contact" className="hover:text-purple-700">联系我们</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
