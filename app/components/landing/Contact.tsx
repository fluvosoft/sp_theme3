import { THEME, MESSENGER_MESSAGE, FACEBOOK_MESSENGER_URL, WHATSAPP_URL } from "../../lib/constants";
import { FacebookIcon, WhatsAppIcon } from "../ui/Icons";

export default function Contact() {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="font-heading text-base font-bold leading-relaxed md:text-lg"
          style={{ color: THEME.pink }}
        >
          {MESSENGER_MESSAGE}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={FACEBOOK_MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-lg)] focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ backgroundColor: "#1877F2" }}
          >
            <FacebookIcon className="h-5 w-5" />
            ফেইসবুক
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-lg)] focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ backgroundColor: "#25D366" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            হোয়াটসঅ্যাপ
          </a>
        </div>
      </div>
    </section>
  );
}
