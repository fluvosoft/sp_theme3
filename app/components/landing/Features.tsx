import { THEME } from "../../lib/constants";

const FEATURES = [
  "কাশ্মীরের সাফরন দিয়ে তৈরি — প্রথম ব্যবহার থেকেই পরিবর্তন দেখা যাবে",
  "গোট মিল্ক — নরম ও মসৃণ ত্বকের জন্য",
  "এসেনশিয়াল অয়েল — ব্রণ দূর করতে, ত্বক উজ্জ্বল করতে ও সানবার্ন কমাতে",
];

export default function Features() {
  return (
    <section
      className="px-4 py-14 md:px-8 md:py-20"
      style={{ backgroundColor: THEME.pinkLight }}
    >
      <div className="mx-auto max-w-4xl">
        <p className="font-heading text-center text-sm font-semibold uppercase tracking-widest md:text-base" style={{ color: THEME.pink }}>
          কেন বেছে নেবেন
        </p>
        <h2 className="font-heading mt-2 text-center text-xl font-bold md:text-2xl lg:text-3xl" style={{ color: THEME.pink }}>
          Saffron Goat Milk সাবান পছন্দের তালিকায় শীর্ষে থাকার কারণ
        </h2>
        <p className="mt-3 text-center text-base text-gray-600 md:text-lg">
          এই সাবানে কী কী আছে, জেনে নিন
        </p>
        <ul className="mt-10 space-y-5 md:mt-12 md:space-y-6">
          {FEATURES.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-gray-200/60 md:p-5"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: THEME.pink }}
                aria-hidden
              >
                ✓
              </span>
              <span className="text-base leading-relaxed text-gray-800 md:text-lg">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
