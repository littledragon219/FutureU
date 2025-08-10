export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">服务条款</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-xl font-semibold mb-4">1. 服务说明</h2>
          <p className="text-gray-600 mb-6">
            FutureU是一个面向非技术背景人员的AI产品经理成长平台，提供简历分析、技能评估、项目推荐等服务。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">2. 用户责任</h2>
          <p className="text-gray-600 mb-6">
            用户需要提供真实、准确的个人信息，并对上传的简历内容负责。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">3. 隐私保护</h2>
          <p className="text-gray-600 mb-6">
            我们承诺保护用户隐私，不会未经授权分享用户的个人信息。
          </p>
          
          <h2 className="text-xl font-semibold mb-4">4. 服务变更</h2>
          <p className="text-gray-600">
            我们保留随时修改或终止服务的权利，但会提前通知用户。
          </p>
        </div>
      </div>
    </div>
  )
}