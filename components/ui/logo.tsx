import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="InfluencerAgent.in">
      <span className="font-nacelle text-lg font-semibold text-white">
        Influencer<span className="text-indigo-400">Agent</span><span className="text-gray-400">.in</span>
      </span>
    </Link>
  );
}
