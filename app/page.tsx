"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircleQuestion, FileX, Radar, ArrowRight, Users, Zap, Target, Upload, Brain, Rocket, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "小李",
      before: "机械工程",
      after: "AI策略产品经理",
      quote: "FutureU 把我的'机械建模'经历编译成了'复杂系统逻辑构建能力'，并推荐了一个我以前从没想过的岗位，这改变了一切！",
      avatar: "/placeholder.svg?height=60&width=60&text=李"
    },
    {
      name: "小王",
      before: "市场营销",
      after: "AI用户增长产品经理",
      quote: "从营销转到AI产品，FutureU帮我发现了数据分析和用户洞察的共通点，现在我在字节跳动做得很开心！",
      avatar: "/placeholder.svg?height=60&width=60&text=王"
    },
    {
      name: "小张",
      before: "财务分析",
      after: "AI金融产品经理",
      quote: "谁说财务背景不能做产品？FutureU让我看到了数字敏感度在AI产品中的巨大价值。",
      avatar: "/placeholder.svg?height=60&width=60&text=张"
    }
  ]

  const faqs = [
    {
      question: "FutureU的服务是免费的吗？",
      answer: "我们提供免费的基础服务，包括简历分析和基本的岗位推荐。高级功能如深度能力编译、模拟项目和一对一面试辅导需要付费订阅。"
    },
    {
      question: "我的个人数据和简历是否安全？",
      answer: "绝对安全。我们采用银行级别的数据加密技术，所有个人信息都经过严格的隐私保护处理，绝不会泄露给第三方。"
    },
    {
      question: "我真的没有任何技术背景，也能成功吗？",
      answer: "当然可以！我们专门为非技术背景的用户设计。许多成功案例都来自文科、商科、艺术等各种背景，关键是发现和转化你的独特价值。"
    },
    {
      question: "模拟项目需要花费多长时间？",
      answer: "根据你的时间安排，模拟项目可以在2-4周内完成。我们会根据你的学习进度和目标岗位要求，定制最适合的项目难度和时长。"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">FU</span>
                </div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">FutureU</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                核心功能
              </Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                工作流程
              </Link>
              <Link href="#success" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                成功故事
              </Link>
              <Link href="/upload">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                  注册/登录
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Aurora Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        {/* 3D Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl rotate-12 animate-float shadow-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full animate-float-delayed shadow-xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl -rotate-12 animate-float-slow shadow-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg rotate-45 animate-float shadow-xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            FutureU: 你的专属PM路，<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              用我为你破冰开路。
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90 animate-fade-in-up delay-200">
            专为非技术背景的你打造。我们深度解析你的过往经验，将你的能力"编译"为AI产品经理的核心技能，并主动为你扫描和推荐最匹配的机会，助你自信迈出职业转型的第一步。
          </p>
          <Link href="/upload">
            <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:bg-white/30 hover:shadow-white/25 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-400">
              开启你的转型之旅
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              你的困惑，我们都懂
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircleQuestion,
                title: "信息鸿沟",
                description: "对AI产品经理的工作内容和技能要求感到迷茫？",
                color: "from-red-400 to-pink-400"
              },
              {
                icon: FileX,
                title: "简历困境", 
                description: "传统简历无法被HR和ATS系统理解，石沉大海？",
                color: "from-orange-400 to-red-400"
              },
              {
                icon: Radar,
                title: "机会迷失",
                description: "不知如何在海量信息中，找到适合自己的\"隐藏\"机会？", // Fixed: Escaped inner quotes
                color: "from-blue-400 to-purple-400"
              }
            ].map((item, index) => (
              <Card key={index} className={`group text-center p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 animate-fade-in-up`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="pt-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-pink-100/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              解锁你的产品潜力：FutureU 三大核心引擎
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ArrowRight,
                title: "经验\"编译器\"", // Fixed: Escaped inner quotes
                slogan: "让你的过去，成为你的武器。",
                description: "AI智能分析你的背景，将你的非技术经验'翻译'成AI产品岗位看重的核心能力，自动生成ATS友好型简历。",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Zap,
                title: "能力\"链接器\"", // Fixed: Escaped inner quotes
                slogan: "搭建你的专业到AI产品的桥梁。",
                description: "我们为你规划个性化学习路径，提供模拟AI项目，让你在实践中'创造'经验，弥补技能短板。",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: Target,
                title: "机会\"雷达\"", // Fixed: Escaped inner quotes
                slogan: "主动为你扫描最匹配的战场。",
                description: "AI雷达持续扫描全网，精准匹配最适合你独特背景的职位，并提供面试辅导，让你不再错失良机。",
                color: "from-pink-500 to-orange-500"
              }
            ].map((item, index) => (
              <Card key={index} className={`group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm border-0 animate-fade-in-up`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="pt-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-purple-600 font-semibold mb-4 italic">
                    "{item.slogan}"
                  </p>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              只需三步，开启你的蜕变
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  icon: Upload,
                  title: "上传简历，启动AI",
                  description: "只需上传你现有的简历，我们的AI引擎将立即开始深度解析你的独特价值。",
                  color: "from-blue-500 to-purple-500",
                  step: "01"
                },
                {
                  icon: Brain,
                  title: "编译能力，创造经验",
                  description: "AI为你'翻译'经验，链接学习路径，并通过模拟项目帮你'创造'出有说服力的作品集。",
                  color: "from-purple-500 to-pink-500",
                  step: "02"
                },
                {
                  icon: Rocket,
                  title: "匹配机会，精准出击",
                  description: "机会雷达为你锁定最佳岗位，并提供ATS优化和面试辅导，助你拿下Offer。",
                  color: "from-pink-500 to-orange-500",
                  step: "03"
                }
              ].map((item, index) => (
                <div key={index} className={`text-center relative animate-fade-in-up`} style={{animationDelay: `${index * 300}ms`}}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-400 flex items-center justify-center text-sm font-bold text-purple-600 md:block hidden">
                    {item.step}
                  </div>
                  
                  <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300`}>
                    <item.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="success" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              听听他们的故事
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up delay-200">
              无数像你一样的同学，在这里找到了新方向
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${currentTestimonial * 100}%)`}}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="p-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-6">
                          <img 
                            src={testimonial.avatar || "/placeholder.svg"} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-4 border-white/30 shadow-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                                {testimonial.before} → {testimonial.after}
                              </span>
                            </div>
                            <blockquote className="text-lg italic leading-relaxed opacity-90">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
                className="rounded-full border-purple-300 hover:bg-purple-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-purple-300'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentTestimonial(currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1)}
                className="rounded-full border-purple-300 hover:bg-purple-100"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-purple-50 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              还有疑问？看这里
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up`} style={{animationDelay: `${index * 100}ms`}}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-purple-50/50 transition-colors rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 text-purple-600 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white text-center relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl rotate-12 animate-float"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl -rotate-12 animate-float-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            准备好迎接你的 <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Future</span> 了吗？
          </h2>
          <Link href="/upload">
            <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:bg-white/30 hover:shadow-white/25 transition-all duration-300 hover:scale-105 animate-fade-in-up delay-200">
              立即免费注册
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FU</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FutureU</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">B</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">小</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">即</span>
              </a>
            </div>
            
            <p className="text-gray-400 mb-4">
              © 2025 FutureU. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">
                服务条款
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
