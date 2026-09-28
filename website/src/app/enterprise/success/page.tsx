import Link from "next/link";
import MetaPurchaseTracker from "@/components/MetaPurchaseTracker";

export default function EnterpriseSuccessPage() {
  return (
    <>
      <MetaPurchaseTracker contentName="Enterprise Package" value={3525} />
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="bg-slate-800 rounded-xl p-8 max-w-lg text-center border-2 border-amber-500">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Enterprise!</h1>
        <p className="text-slate-300 mb-6">
          Your payment is confirmed. We&apos;ll be in touch within 24 hours to start your agent implementation.
        </p>
        
        <div className="bg-slate-900 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-white font-semibold mb-3">What Happens Next:</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>✅ You&apos;ll receive a receipt via email</li>
            <li>✅ We&apos;ll email you within 24 hours</li>
            <li>✅ We&apos;ll schedule a kickoff call</li>
            <li>✅ Start building your 5 agents</li>
          </ul>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
          <p className="text-amber-400 text-sm">
            <strong>Questions?</strong> DM us on <a href="https://x.com/Joyjacobs42" target="_blank" className="underline">@Joyjacobs42</a>
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-block bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-lg font-bold"
        >
          Back to Home
        </Link>
      </div>
    </div>
    </>
  );
}
