"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, Loader2 } from 'lucide-react'

export default function UploadPage() {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'compiling' | 'completed'>('idle')
  const [progress, setProgress] = useState(0)
  const [dragActive, setDragActive] = useState(false)
  const router = useRouter()

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      simulateUploadAndCompile()
    } else {
      alert('请上传 PDF 或 Word 格式的文件')
    }
  }

  const simulateUploadAndCompile = () => {
    setUploadStatus('uploading')
    setProgress(0)

    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(uploadInterval)
          setUploadStatus('compiling')
          
          // Simulate compilation
          setTimeout(() => {
            setUploadStatus('completed')
          }, 3000)
          
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const getStatusText = () => {
    switch (uploadStatus) {
      case 'uploading':
        return `上传中... ${progress}%`
      case 'compiling':
        return 'AI 正在编译你的经验，请稍候...'
      case 'completed':
        return '编译完成！'
      default:
        return ''
    }
  }

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case 'uploading':
      case 'compiling':
        return <Loader2 className="h-5 w-5 animate-spin text-[#7B68EE]" />
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-[#0A427E] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FU</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[#0A427E]">FutureU</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A427E] mb-4">
            上传你的母版简历，启动编译引擎
          </h1>
          <p className="text-xl text-gray-600">
            支持 PDF 或 Word 格式。让我们开始翻译你的潜力。
          </p>
        </div>

        {/* Upload Area */}
        <div className="mb-8">
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive 
                ? 'border-[#7B68EE] bg-[#7B68EE] bg-opacity-5' 
                : uploadStatus === 'idle' 
                  ? 'border-gray-300 bg-gray-100 hover:border-[#7B68EE] hover:bg-[#7B68EE] hover:bg-opacity-5' 
                  : 'border-gray-300 bg-gray-100'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={uploadStatus !== 'idle'}
            />
            
            <div className="space-y-4">
              {uploadStatus === 'idle' ? (
                <>
                  <Upload className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      点击选择文件或拖拽到此处
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      支持 PDF、Word 格式，最大 10MB
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <FileText className="h-12 w-12 text-[#7B68EE] mx-auto" />
                  <p className="text-lg font-medium text-gray-700">
                    简历已上传
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Progress Section */}
        {uploadStatus !== 'idle' && (
          <div className="mb-8 space-y-4">
            <Progress 
              value={progress} 
              className="w-full h-3"
            />
            <div className="flex items-center justify-center space-x-2">
              {getStatusIcon()}
              <span className="text-lg font-medium text-gray-700">
                {getStatusText()}
              </span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {uploadStatus === 'completed' && (
          <div className="text-center">
            <Button 
              onClick={() => router.push('/results')}
              className="bg-[#7B68EE] hover:bg-[#6A5ACD] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              查看我的新能力图谱与岗位推荐
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
