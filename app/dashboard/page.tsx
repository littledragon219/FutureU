"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/store/user-store"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Upload, Link2, FileText, BrainCircuit, Sparkles, TrendingUp, Loader2, LogOut } from 'lucide-react'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

type AnalysisResult = {
  strengths: { title: string; desc: string; icon: React.ReactNode }[]
  gaps: string[]
  projects: { id: string; title: string; brief: string }[]
}

export default function DashboardPage() {
  const router = useRouter()
  const { user, logout } = useUserStore()
  const [uploading, setUploading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [progress, setProgress] = useState(42)
  const [linkedin, setLinkedin] = useState("")
  const [result, setResult] = useState<AnalysisResult | null>(null)

  useEffect(() => {
    if (!user) {
      router.replace("/")
    }
  }, [user, router])

  // 雷达图虚拟数据
  const radarData = useMemo(
    () => [
      { 维度: "数据素养", 当前: 45, 目标: 85 },
      { 维度: "用户洞察", 当前: 60, 目标: 90 },
      { 维度: "跨职能协作", 当前: 55, 目标: 88 },
      { 维度: "需求分析", 当前: 62, 目标: 92 },
      { 维度: "产品策略", 当前: 40, 目标: 86 },
      { 维度: "A/B 实验", 当前: 35, 目标: 80 },
    ],
    []
  )

  function simulateUpload(file?: File) {
    setUploading(true)
    let p = 0
    const timer = setInterval(() => {
      p += 12
      setProgress((prev) => Math.min(100, prev + 3))
      if (p >= 100) {
        clearInterval(timer)
        setUploading(false)
      }
    }, 200)
  }

  async function analyzeBackground() {
    setAnalyzing(true)
    setResult(null)
    await new Promise((r) => setTimeout(r, 1200))
    const res: AnalysisResult = {
      strengths: [
        { title: "系统性思维", desc: "具备结构化分析复杂问题的能力", icon: <BrainCircuit className="h-5 w-5 text-purple-600" /> },
        { title: "用户洞察", desc: "善于从访谈与数据中提炼可行动结论", icon: <Sparkles className="h-5 w-5 text-purple-600" /> },
        { title: "增长意识", desc: "理解漏斗与增长模型，关注关键指标", icon: <TrendingUp className="h-5 w-5 text-purple-600" /> },
      ],
      gaps: ["SQL 与数据可视化", "算法基础与评估指标", "实验设计（如样本量、显著性）"],
      projects: [
        { id: "resume-ai", title: "设计 AI 驱动的简历优化工具", brief: "围绕求职者简历质量评估与优化建议，设计端到端产品方案与原型。" },
        { id: "abt-platform", title: "搭建 A/B 实验配置平台", brief: "为产品团队提供统一的实验配置、指标追踪与结果解读能力。" },
      ],
    }
    setResult(res)
    setAnalyzing(false)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-pink-600 text-white text-xs font-bold">FU</div>
            <span className="text-lg font-semibold">FutureU 控制面板</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            {user ? <span>你好，{user.name}（{user.education}）</span> : null}
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              退出
            </Button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-3">
        {/* 左侧：欢迎与进度 */}
        <div className="grid gap-6 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>欢迎回来</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              <p>用户：{user?.name}</p>
              <p>教育背景：{user?.education || "未填写"}</p>
              <p className="mt-2">职业目标：{user?.careerGoal || "未填写"}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>职业准备进度</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2 text-sm text-gray-600">当前分数：{progress} / 100</div>
              <Progress value={progress} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>上传资料</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="grid gap-2">
                <Label htmlFor="resume">上传简历（PDF 或 Word）</Label>
                <div className="relative">
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" onChange={(e) => simulateUpload(e.target.files?.[0])} />
                  <FileText className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
                {uploading ? (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Loader2 className="h-4 w-4 animate-spin text-purple-600" />
                    正在上传与处理，请稍候…
                  </div>
                ) : null}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="linkedin">或填写 LinkedIn 链接</Label>
                <div className="relative">
                  <Input
                    id="linkedin"
                    placeholder="https://www.linkedin.com/in/你的用户名"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                  />
                  <Link2 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <Button onClick={analyzeBackground} disabled={analyzing} className="bg-purple-600 hover:bg-purple-700">
                {analyzing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <BrainCircuit className="mr-2 h-4 w-4" />}
                分析我的背景
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 右侧：雷达图 + 分析结果 */}
        <div className="grid gap-6 lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>你的职业成长之路（技能雷达）</CardTitle>
            </CardHeader>
            <CardContent className="h-[320px]">
              <ChartContainer
                config={{
                  当前: { label: "当前", color: "hsl(var(--chart-2))" },
                  目标: { label: "目标", color: "hsl(var(--chart-1))" },
                }}
                className="h-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="维度" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Radar
                      name="当前"
                      dataKey="当前"
                      stroke="var(--color-当前)"
                      fill="var(--color-当前)"
                      fillOpacity={0.4}
                    />
                    <Radar
                      name="目标"
                      dataKey="目标"
                      stroke="var(--color-目标)"
                      fill="var(--color-目标)"
                      fillOpacity={0.2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>检测到的优势</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {(result?.strengths ?? []).length === 0 ? (
                  <p className="text-sm text-gray-500">点击「分析我的背景」后，将展示你的优势亮点。</p>
                ) : (
                  result?.strengths.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-md border p-3">
                      <div>{s.icon}</div>
                      <div>
                        <div className="font-medium">{s.title}</div>
                        <div className="text-sm text-gray-600">{s.desc}</div>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>技能缺口</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {(result?.gaps ?? []).length === 0 ? (
                  <p className="text-sm text-gray-500">点击「分析我的背景」后，将展示建议补齐的能力点。</p>
                ) : (
                  result?.gaps.map((g, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {g}
                    </Badge>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>推荐的模拟项目</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              {(result?.projects ?? []).length === 0 ? (
                <p className="text-sm text-gray-500">点击「分析我的背景」后，将为你推荐匹配的练习项目。</p>
              ) : (
                result?.projects.map((p) => (
                  <div key={p.id} className="flex items-start justify-between gap-4 rounded-md border p-4">
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-gray-600">{p.brief}</div>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={`/project?id=${encodeURIComponent(p.id)}`}>查看完整项目简介</Link>
                    </Button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
