import { THEME, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

export default function Hero() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="font-heading mb-3 text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          Bangladesh&apos;s Favourite
        </p>
        <h1 className="font-heading text-center text-2xl font-bold leading-snug tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
          <span className="font-extrabold" style={{ color: THEME.yellow }}>
            Saffron Goat Milk Soap
          </span>
          <span className="mt-2 block text-white">
            এখন বাংলাদেশের সবচেয়ে ভাইরাল সাবান — সাফরন গোট মিল্ক সোপ
          </span>
        </h1>
        <p className="mt-4 text-center text-base text-white/90 md:text-lg">
          প্রিমিয়াম কাশ্মীরি সাফরন ও গোট মিল্ক দিয়ে তৈরি — মাত্র ৭ দিনে দেখুন পার্থক্য
        </p>
        <div className="my-8 overflow-hidden rounded-2xl bg-white/10 shadow-2xl ring-1 ring-white/20 md:my-10">
          <div className="aspect-[16/10] w-full md:aspect-video">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/5 to-white/15">
              <span className="font-body text-lg text-white/60">প্রোডাক্ট ইমেজ</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <CtaButton>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
