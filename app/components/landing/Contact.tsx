import { PhoneIcon } from "../ui/Icons";
import { THEME, CONTACT_PHONE } from "../../lib/constants";

export default function Contact() {
  return (
    <section className="px-4 py-14 md:px-8 md:py-16" style={{ backgroundColor: THEME.pinkDark }}>
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-white/80">
          সহায়তা চাইলে
        </p>
        <h2 className="font-heading mt-2 text-xl font-bold text-white md:text-2xl">
          প্রয়োজনে কল করুন
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="font-heading inline-flex items-center gap-3 rounded-xl bg-white/20 px-6 py-4 font-semibold text-white shadow-lg ring-1 ring-white/20 transition-all hover:bg-white/30 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <PhoneIcon className="h-5 w-5" />
            {CONTACT_PHONE}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="font-heading inline-flex items-center gap-3 rounded-xl bg-white/20 px-6 py-4 font-semibold text-white shadow-lg ring-1 ring-white/20 transition-all hover:bg-white/30 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <PhoneIcon className="h-5 w-5" />
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
