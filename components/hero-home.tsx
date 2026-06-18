export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              We connect brands with creators who move the needle
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                India's most data-driven influencer marketing agency. From nano-creators to celebrity partnerships — we design campaigns that deliver real ROI, not just vanity metrics.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="mailto:hello@influenceragent.in"
                  >
                    <span className="relative inline-flex items-center">
                      Launch a Campaign
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#campaigns"
                  >
                    View Case Studies
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row instead of video */}
          <div className="mx-auto max-w-4xl" data-aos="fade-up" data-aos-delay={800}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl bg-gray-800/40 p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold font-nacelle bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">500+</div>
                <div className="mt-1 text-sm text-indigo-200/65">Campaigns Delivered</div>
              </div>
              <div className="rounded-2xl bg-gray-800/40 p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold font-nacelle bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">12K+</div>
                <div className="mt-1 text-sm text-indigo-200/65">Verified Creators</div>
              </div>
              <div className="rounded-2xl bg-gray-800/40 p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold font-nacelle bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">850M+</div>
                <div className="mt-1 text-sm text-indigo-200/65">Total Reach</div>
              </div>
              <div className="rounded-2xl bg-gray-800/40 p-6 text-center border border-gray-700/30">
                <div className="text-3xl font-bold font-nacelle bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">4.8x</div>
                <div className="mt-1 text-sm text-indigo-200/65">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
