import Link from "next/link";
import MetaPurchaseTracker from "@/components/MetaPurchaseTracker";

export default function MarketplaceSuccessPage() {
  return (
    <>
      <MetaPurchaseTracker contentName="Marketplace Skill" />
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="bg-slate-800 rounded-xl p-8 max-w-lg text-center border border-green-500">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-white mb-4">Purchase Complete!</h1>
        <p className="text-slate-300 mb-6">
          Your skill is on its way. Check your email for the download link.
        </p>
        
        <div className="bg-slate-900 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-white font-semibold mb-3">What&apos;s Next:</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>✅ Check your email for the skill file</li>
            <li>✅ Add to your CLAUDE.md or agent config</li>
            <li>✅ Start using the prompts immediately</li>
          </ul>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
          <p className="text-green-400 text-sm">
            <strong>Didn&apos;t get the email?</strong> Check spam or DM us on <a href="https://x.com/Joyjacobs42" target="_blank" className="underline">@Joyjacobs42</a>
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Link 
            href="/marketplace" 
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Browse More Skills
          </Link>
          <Link 
            href="/" 
            className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
