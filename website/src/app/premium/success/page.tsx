import Link from "next/link";
import MetaPurchaseTracker from "@/components/MetaPurchaseTracker";

export default function SuccessPage() {
  return (
    <>
      <MetaPurchaseTracker contentName="Premium Subscription" value={49} />
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="bg-slate-800 rounded-xl p-8 max-w-lg text-center border border-green-500">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Premium!</h1>
        <p className="text-slate-300 mb-6">
          You now have access to all 14 premium skill packs. Check your email for download links.
        </p>
        
        <div className="bg-slate-900 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-white font-semibold mb-3">What&apos;s Next:</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>✅ Check your email for the download link</li>
            <li>✅ Download the skill packs (ZIP file)</li>
            <li>✅ Extract to your project directory</li>
            <li>✅ Start using 300+ skills immediately</li>
          </ul>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-6">
          <p className="text-yellow-400 text-sm">
            <strong>Didn&apos;t get the email?</strong> Check your spam folder or DM us on <a href="https://x.com/Joyjacobs42" target="_blank" className="underline">@Joyjacobs42</a>
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
        >
          ← Back to Skills
        </Link>
      </div>
    </div>
    </>
  );
}
