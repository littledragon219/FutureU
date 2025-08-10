export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">联系我们</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-xl font-semibold mb-4">获取帮助</h2>
          <p className="text-gray-600 mb-6">
            如果您在使用FutureU平台时遇到任何问题，或有任何建议，欢迎通过以下方式联系我们：
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">邮箱联系</h3>
              <p className="text-gray-600 mb-2">技术支持：support@futureu.com</p>
              <p className="text-gray-600 mb-2">商务合作：business@futureu.com</p>
              <p className="text-gray-600">意见反馈：feedback@futureu.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">响应时间</h3>
              <p className="text-gray-600 mb-2">技术问题：24小时内回复</p>
              <p className="text-gray-600 mb-2">商务咨询：48小时内回复</p>
              <p className="text-gray-600">一般咨询：72小时内回复</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">常见问题</h3>
            <p className="text-purple-700">
              在联系我们之前，建议先查看我们的常见问题解答，可能已经包含了您需要的答案。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}