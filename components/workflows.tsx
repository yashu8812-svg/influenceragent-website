import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="campaigns">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Selected Work
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Campaigns that moved real numbers
            </h2>
            <p className="text-lg text-indigo-200/65">
              Real campaigns. Real metrics. Real impact for brands across India.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        D2C Beauty
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    GlowUp Skincare Launch
                  </h3>
                  <p className="text-indigo-200/65 text-sm mb-4">
                    Partnered with 45 beauty creators across 6 cities for authentic product reviews and morning routine integrations.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-200">15.2M</div>
                      <div className="text-indigo-200/50 text-xs">Reach</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">6.8%</div>
                      <div className="text-indigo-200/50 text-xs">Engagement</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">₹2.3Cr</div>
                      <div className="text-indigo-200/50 text-xs">Revenue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Fintech
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    PaySmart App Launch
                  </h3>
                  <p className="text-indigo-200/65 text-sm mb-4">
                    30 finance creators explaining UPI features through relatable, jargon-free content driving a 340% install increase.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-200">200K+</div>
                      <div className="text-indigo-200/50 text-xs">Downloads</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">340%</div>
                      <div className="text-indigo-200/50 text-xs">Install ↑</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">₹18</div>
                      <div className="text-indigo-200/50 text-xs">CPI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100">
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        QSR Chain
                      </span>
                    </span>
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-gray-200 mb-2">
                    BiteBox Viral Food Challenge
                  </h3>
                  <p className="text-indigo-200/65 text-sm mb-4">
                    120 food creators, a branded challenge that went viral organically, 28% footfall increase across 80 outlets.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-gray-200">52M+</div>
                      <div className="text-indigo-200/50 text-xs">Views</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">8.4K</div>
                      <div className="text-indigo-200/50 text-xs">UGC</div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-200">28%</div>
                      <div className="text-indigo-200/50 text-xs">Footfall ↑</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
