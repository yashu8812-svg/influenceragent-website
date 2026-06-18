import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section className="relative" id="services">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Full-stack influencer marketing
            </h2>
            <p className="text-lg text-indigo-200/65">
              End-to-end campaign solutions — from creator discovery to performance analytics. Everything your brand needs to win in the creator economy.
            </p>
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">🎯</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Creator Discovery & Vetting
              </h3>
              <p className="text-indigo-200/65">
                Access 12,000+ verified creators. Every one audited for audience authenticity, engagement quality, and brand safety before recommendation.
              </p>
            </article>
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">📐</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Campaign Strategy & Execution
              </h3>
              <p className="text-indigo-200/65">
                Bespoke campaign design aligned with your KPIs. Multi-platform execution with A/B tested content strategies across Instagram, YouTube, and more.
              </p>
            </article>
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">🎬</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Content Production
              </h3>
              <p className="text-indigo-200/65">
                From creative briefs to final edits — our team collaborates with creators to produce thumb-stopping content that converts, not just entertains.
              </p>
            </article>
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">📊</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Performance Analytics
              </h3>
              <p className="text-indigo-200/65">
                Real-time dashboards with granular metrics — impressions, engagement, conversions, and cost-per-result. Only data that drives decisions.
              </p>
            </article>
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">⚡</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Paid Amplification
              </h3>
              <p className="text-indigo-200/65">
                Amplify creator content with Spark Ads, whitelisted campaigns, and UGC retargeting. Seamlessly plug into your existing performance funnel.
              </p>
            </article>
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-xl">🌍</div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Regional & Vernacular
              </h3>
              <p className="text-indigo-200/65">
                Campaigns in Hindi, Tamil, Telugu, Bengali, Marathi & more. Reach Tier-2 and Tier-3 India with creators who speak your audience's language.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
