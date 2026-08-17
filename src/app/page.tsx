export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            📄 Invoice Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Create professional invoices in seconds. Perfect for freelancers and small businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">✨ Key Features</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Professional invoice templates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Client management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Invoice tracking & history
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                PDF export
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                Payment reminders
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-lg p-8 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">💼 For Your Business</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Streamline your billing process:
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Create and send invoices instantly</li>
              <li>• Track payment status</li>
              <li>• Manage multiple clients</li>
              <li>• Generate financial reports</li>
              <li>• Customize invoice branding</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-600 to-red-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Start invoicing like a pro</h2>
          <p className="text-lg mb-6">Manage your billing in minutes, not hours</p>
          <a
            href="#"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Create Your First Invoice
          </a>
        </div>

        <div className="text-center mt-16 text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Built with Next.js • Deployed on Vercel • Made with ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
