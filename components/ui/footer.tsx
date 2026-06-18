import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#services">Creator Discovery</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#services">Campaign Strategy</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#services">Content Production</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#services">Performance Analytics</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#services">Paid Amplification</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#campaigns">Case Studies</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="#testimonials">Testimonials</a></li>
              <li><a className="text-indigo-200/65 transition hover:text-indigo-500" href="mailto:hello@influenceragent.in">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-indigo-200/65">D2C & E-commerce</span></li>
              <li><span className="text-indigo-200/65">Fintech & SaaS</span></li>
              <li><span className="text-indigo-200/65">Health & Beauty</span></li>
              <li><span className="text-indigo-200/65">Food & QSR</span></li>
              <li><span className="text-indigo-200/65">Fashion & Lifestyle</span></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Platforms</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-indigo-200/65">Instagram</span></li>
              <li><span className="text-indigo-200/65">YouTube</span></li>
              <li><span className="text-indigo-200/65">Twitter / X</span></li>
              <li><span className="text-indigo-200/65">Pinterest</span></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © 2025 InfluencerAgent.in
              </p>
              <p className="text-indigo-200/65">
                <a className="transition hover:text-indigo-500" href="mailto:hello@influenceragent.in">
                  hello@influenceragent.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
