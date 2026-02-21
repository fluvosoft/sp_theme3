import { THEME, CTA_LABEL } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

const PACKAGES = [
  { title: "১ পিস সাফরন সাবান", price: "৪৯০ টাকা", desc: "ডেলিভারি চার্জ অন্তর্ভুক্ত" },
  { title: "২ পিস সাফরন সাবান", price: "৮০০ টাকা", desc: "ডেলিভারি চার্জ অন্তর্ভুক্ত", popular: true },
  { title: "৩ পিস সাফরন সাবান", price: "৯৯৯ টাকা", desc: "ডেলিভারি চার্জ অন্তর্ভুক্ত" },
];

export default function Pricing() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-20" style={{ backgroundColor: THEME.pink }}>
      <div className="mx-auto max-w-5xl">
        <p className="font-heading text-center text-sm font-semibold uppercase tracking-widest text-white/80">
          প্যাকেজ সিলেক্ট করুন
        </p>
        <h2 className="font-heading mt-2 text-center text-xl font-bold text-white md:text-2xl lg:text-3xl">
          সাশ্রয়ী দামে অর্ডার করুন
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {PACKAGES.map((pkg, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-6 text-center shadow-xl ring-1 ring-white/10 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl md:p-8 ${
                pkg.popular ? "ring-2 ring-white/30 md:-mt-2 md:mb-2 md:py-8" : ""
              }`}
              style={{ backgroundColor: THEME.pinkDark }}
            >
              {pkg.popular && (
                <span
                  className="font-heading absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: THEME.yellow, color: THEME.pink }}
                >
                  জনপ্রিয়
                </span>
              )}
              <h3 className="font-heading text-lg font-bold text-white md:text-xl">{pkg.title}</h3>
              <p className="mt-4 text-3xl font-bold md:text-4xl" style={{ color: THEME.yellow }}>
                {pkg.price}
              </p>
              <p className="mt-1 text-sm text-white/80">{pkg.desc}</p>
              <div className="mt-8">
                <CtaButton>{CTA_LABEL}</CtaButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
