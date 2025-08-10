export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">隐私政策</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-xl font-semibold mb-4">1. 信息收集</h2>
          <p className="text-gray-600 mb-6">
            我们收集您主动提供的信息，包括姓名、邮箱、教育背景、职业目标和简历文件。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">2. 信息使用</h2>
          <p className="text-gray-600 mb-6">
            收集的信息仅用于提供个性化的职业发展建议和平台功能优化。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">3. 信息保护</h2>
          <p className="text-gray-600 mb-6">
            我们采用行业标准的安全措施保护您的个人信息，包括数据加密和访问控制。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">4. 信息共享</h2>
          <p className="text-gray-600 mb-6">
            我们不会向第三方出售、交易或转让您的个人信息，除非获得您的明确同意。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">5. 联系我们</h2>
          <p className="text-gray-600">
            如有隐私相关问题，请通过邮箱联系我们：privacy@futureu.com
          </p>
        </div>
      </div>
    </div>
  )
}