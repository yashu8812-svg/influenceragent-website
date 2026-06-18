import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2" aria-label="InfluencerAgent.in">
      <span className="font-nacelle text-lg font-semibold bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
        InfluencerAgent<span className="text-gray-200">.in</span>
      </span>
    </Link>
  );
}
