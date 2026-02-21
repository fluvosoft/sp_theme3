import { THEME, CTA_LABEL, PRODUCT_TITLE, ORDER_UNIT_PRICE_BDT } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";
import { CartIcon } from "../ui/Icons";

const HERO_DESCRIPTION = `
কোয়ালিটি ম্যানুফ্যাকচারিং এবং ইসলাম অনুযায়ী প্রোডাক্ট তৈরি করা হয়। ড্রেস, পাজামা ও ডুপাট্টা — সব কটন সুতি ফেব্রিক। ডুপাট্টা ও পাজামা কটন সুতি।
`.trim();

export default function Hero() {
  return (
    <section className="bg-white px-4 py-10 md:px-8 md:py-14 lg:py-16">
      <div className="mx-auto max-w-4xl">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <span className="font-body text-xl font-semibold text-gray-800 md:text-2xl">
            ▲ logoipsum
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-heading text-center text-xl font-bold leading-snug md:text-2xl lg:text-3xl"
          style={{ color: THEME.pink }}
        >
          {PRODUCT_TITLE}
        </h1>

        {/* Two product images side by side */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:gap-5 md:mt-10">
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-[var(--shadow)]">
            <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
              প্রোডাক্ট ইমেজ ১
            </div>
          </div>
          <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-[var(--shadow)]">
            <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
              প্রোডাক্ট ইমেজ ২
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-center text-[15px] leading-relaxed text-gray-700 md:text-base">
          {HERO_DESCRIPTION}
        </p>

        {/* Price */}
        <p
          className="font-heading mt-4 text-center text-2xl font-bold md:text-3xl"
          style={{ color: THEME.pink }}
        >
          আজকের অফার মূল্য {ORDER_UNIT_PRICE_BDT}/= টাকা
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <CtaButton href={`#order`} className="inline-flex items-center gap-2">
            <CartIcon className="h-5 w-5" />
            {CTA_LABEL}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
