import Link from "next/link";
import MetaPurchaseTracker from "@/components/MetaPurchaseTracker";

export default function ChatGPTAdsSuccessPage() {
  return (
    <>
      <MetaPurchaseTracker contentName="ChatGPT Ads Implementation" />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
        <div className="bg-slate-800 rounded-xl p-8 max-w-lg text-center border border-violet-500">
          <h1 className="text-3xl font-bold text-white mb-4">You&apos;re booked</h1>
          <p className="text-slate-300 mb-6">
            We&apos;ll email you to book the kickoff. Media spend stays with OpenAI — this purchase is setup only.
          </p>
          <Link
            href="/chatgpt-ads"
            className="inline-block bg-violet-500 hover:bg-violet-400 text-white px-6 py-3 rounded-lg font-bold"
          >
            Back to ChatGPT Ads
          </Link>
        </div>
      </div>
    </>
  );
}
