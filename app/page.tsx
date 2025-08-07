import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircleQuestion, FileX, Radar, ArrowRight, Users, Zap, Target } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#0A427E] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FU</span>
                </div>
              </div>
              <span className="ml-3 text-xl font-bold text-[#0A427E]">FutureU</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-[#0A427E] font-medium">
                核心功能
              </Link>
              <Link href="#success" className="text-gray-700 hover:text-[#0A427E] font-medium">
                成功故事
              </Link>
              <Link href="/upload" className="bg-[#7B68EE] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#6A5ACD] transition-colors">
                注册/登录
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0A427E] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="200" cy="200" r="3" fill="currentColor" />
            <circle cx="800" cy="300" r="3" fill="currentColor" />
            <circle cx="600" cy="700" r="3" fill="currentColor" />
            <line x1="200" y1="200" x2="800" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.5" />
            <line x1="800" y1="300" x2="600" y2="700" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            FutureU: 你的专属PM路，<br />用我为你破冰开路。
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            专为非技术背景的你打造。我们深度解析你的过往经验，将你的能力"编译"为AI产品经理的核心技能，并主动为你扫描和推荐最匹配的机会，助你自信迈出职业转型的第一步。
          </p>
          <Link href="/upload">
            <Button className="bg-[#7B68EE] hover:bg-[#6A5ACD] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
              开启你的转型之旅
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A427E] mb-4">
              你的困惑，我们都懂
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircleQuestion className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">信息鸿沟</h3>
                <p className="text-gray-600">
                  对AI产品经理的工作内容和技能要求感到迷茫？
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileX className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">简历困境</h3>
                <p className="text-gray-600">
                  传统简历无法被HR和ATS系统理解，石沉大海？
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Radar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">机会迷失</h3>
                <p className="text-gray-600">
                  不知如何在海量信息中，找到适合自己的"隐藏"机会？
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A427E] mb-4">
              解锁你的产品潜力：FutureU 三大核心引擎
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-[#7B68EE]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#7B68EE] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <ArrowRight className="h-8 w-8 text-[#7B68EE]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">经验"编译器"</h3>
                <p className="text-[#7B68EE] font-semibold mb-4 italic">
                  "让你的过去，成为你的武器。"
                </p>
                <p className="text-gray-600">
                  AI智能分析你的背景，将你的非技术经验'翻译'成AI产品岗位看重的核心能力，自动生成ATS友好型简历。
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-[#7B68EE]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#7B68EE] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-[#7B68EE]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">能力"链接器"</h3>
                <p className="text-[#7B68EE] font-semibold mb-4 italic">
                  "搭建你的专业到AI产品的桥梁。"
                </p>
                <p className="text-gray-600">
                  我们为你规划个性化学习路径，提供模拟AI项目，让你在实践中'创造'经验，弥补技能短板。
                </p>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-[#7B68EE]">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-[#7B68EE] bg-opacity-10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-[#7B68EE]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A427E] mb-3">机会"雷达"</h3>
                <p className="text-[#7B68EE] font-semibold mb-4 italic">
                  "主动为你扫描最匹配的战场。"
                </p>
                <p className="text-gray-600">
                  AI雷达持续扫描全网，精准匹配最适合你独特背景的职位，并提供面试辅导，让你不再错失良机。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="success" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A427E] mb-4">
              听听他们的故事
            </h2>
            <p className="text-xl text-gray-600">
              无数像你一样的同学，在这里找到了新方向
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-r from-[#7B68EE] to-[#9370DB] text-white">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">从机械工程到AI产品经理的蜕变</h3>
                    <p className="text-lg mb-4 opacity-90">小李，机械工程专业应届生</p>
                    <blockquote className="text-xl italic mb-4 leading-relaxed">
                      "FutureU 把我的'机械建模'经历编译成了'复杂系统逻辑构建能力'，并推荐了一个我以前从没想过的岗位，这改变了一切！"
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0A427E] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            准备好开启你的AI产品经理之路了吗？
          </h2>
          <Link href="/upload">
            <Button className="bg-[#7B68EE] hover:bg-[#6A5ACD] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
              立即免费注册
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2025 FutureU. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                服务条款
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
