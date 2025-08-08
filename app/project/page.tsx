"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Rocket, FileCheck2 } from 'lucide-react'

const PROJECTS: Record<
  string,
  { title: string; overview: string[]; goals: string[]; deliverables: string[]; skills: string[] }
> = {
  "resume-ai": {
    title: "设计一个 AI 驱动的简历优化工具",
    overview: [
      "目标用户：希望优化求职材料的毕业生与转岗人群",
      "核心价值：基于语义理解的要点提取与可改进建议",
      "基础流程：上传简历 → 结构化解析 → 生成优化建议 → 导出新简历",
    ],
    goals: [
      "明确用户细分场景与成功指标（如投递通过率、面试邀请率）",
      "设计关键功能流程与信息架构",
      "制作中保真交互原型并完成 3 轮用户可用性测试",
    ],
    deliverables: [
      "需求文档（含目标、范围、关键场景、指标）",
      "信息架构图与流程图",
      "交互原型与关键界面说明",
    ],
    skills: ["用户洞察", "需求分析", "指标意识", "信息架构", "AI 产品思维"],
  },
  "abt-platform": {
    title: "搭建 A/B 实验配置平台",
    overview: [
      "目标用户：数据分析师与产品经理",
      "核心价值：降低实验门槛，提高配置与评估效率",
      "基础流程：选择流量与人群 → 配置指标 → 启动与监控 → 结果解读",
    ],
    goals: [
      "沉淀通用指标与结果解读模版",
      "设计多 AB 流程的冲突检测机制",
      "搭建实验看板与报警能力",
    ],
    deliverables: ["指标体系说明文档", "实验流程图", "高保真原型与演示视频"],
    skills: ["实验设计", "数据素养", "技术理解", "跨协作沟通"],
  },
}

export default function ProjectPage() {
  const params = useSearchParams()
  const id = params.get("id") ?? "resume-ai"
  const data = useMemo(() => PROJECTS[id] ?? PROJECTS["resume-ai"], [id])
  const [joinPortfolio, setJoinPortfolio] = useState(true)

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-pink-600 text-white text-xs font-bold">FU</div>
            <span className="text-lg font-semibold">FutureU 模拟项目</span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">返回控制面板</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="mb-2 text-2xl font-bold">{data.title}</h1>
        <p className="mb-6 text-sm text-gray-600">以下内容采用标签页与折叠结构呈现，便于快速浏览与执行。</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>项目详情</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">项目概览</TabsTrigger>
                <TabsTrigger value="goals">项目目标与交付成果</TabsTrigger>
                <TabsTrigger value="skills">可培养的关键能力</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="o1">
                    <AccordionTrigger>项目背景与价值</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {data.overview.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="goals" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="g1">
                    <AccordionTrigger>目标与里程碑</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {data.goals.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="g2">
                    <AccordionTrigger>交付成果清单</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {data.deliverables.map((t, i) => <li key={i}>{t}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="skills" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="s1">
                    <AccordionTrigger>能力地图</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2">
                        {data.skills.map((s, i) => (
                          <span key={i} className="rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-col items-start justify-between gap-4 rounded-lg border bg-white p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-700">完成后可提交审核并选择加入「我的作品集」。</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch id="portfolio" checked={joinPortfolio} onCheckedChange={setJoinPortfolio} />
              <Label htmlFor="portfolio">加入我的作品集</Label>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <FileCheck2 className="mr-2 h-4 w-4" />
              提交项目
            </Button>
            <Button variant="outline">
              <Rocket className="mr-2 h-4 w-4" />
              开始执行
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
