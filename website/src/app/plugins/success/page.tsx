import Link from "next/link";
import MetaPurchaseTracker from "@/components/MetaPurchaseTracker";

export default function PluginsSuccessPage() {
  return (
    <>
      <MetaPurchaseTracker contentName="Plugin" />
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="bg-slate-800 rounded-xl p-8 max-w-lg text-center border border-blue-500">
        <div className="text-6xl mb-4">🔌</div>
        <h1 className="text-3xl font-bold text-white mb-4">Plugin Installed!</h1>
        <p className="text-slate-300 mb-6">
          Your plugin is on its way. Check your email for the install link and setup instructions.
        </p>

        <div className="bg-slate-900 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-white font-semibold mb-3">What&apos;s Next:</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>✅ Check your email for the plugin file or install command</li>
            <li>✅ Follow the 2-step setup guide included</li>
            <li>✅ Your agent picks it up automatically</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
          <p className="text-blue-400 text-sm">
            <strong>Didn&apos;t get the email?</strong> Check spam or DM us on{" "}
            <a href="https://x.com/Joyjacobs42" target="_blank" className="underline">@Joyjacobs42</a>
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/plugins"
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Browse More Plugins
          </Link>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
