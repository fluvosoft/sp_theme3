import { THEME, CTA_LABEL, FEATURES_LIST, FEATURES_LIST_EXTENDED } from "../../lib/constants";
import CtaButton from "../ui/CtaButton";

const CHECK_ICON = (
  <svg className="h-5 w-5 shrink-0 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

type FeaturesProps = { extended?: boolean };

export default function Features({ extended }: FeaturesProps) {
  const list = extended ? FEATURES_LIST_EXTENDED : FEATURES_LIST;
  const title = "আনস্টিজ ৩ পিস এর বৈশিষ্ট্য";

  return (
    <section
      className="px-4 py-12 md:px-8 md:py-16"
      style={{ backgroundColor: THEME.pinkLight }}
    >
      <div className="mx-auto max-w-4xl lg:max-w-5xl">
        <h2
          className="font-heading text-center text-xl font-bold md:text-2xl"
          style={{ color: THEME.pink }}
        >
          {title}
        </h2>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <ul className="flex-1 space-y-4">
            {list.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: THEME.pink }}
                  aria-hidden
                >
                  {CHECK_ICON}
                </span>
                <span className="text-[15px] leading-relaxed text-gray-800 md:text-base">
                  {text}
                </span>
              </li>
            ))}
          </ul>
          {!extended && (
            <div className="mx-auto w-full max-w-[280px] shrink-0 lg:max-w-[240px]">
              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-[var(--shadow)]">
                <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
                  প্রোডাক্ট ইমেজ
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href={`#order`}>{CTA_LABEL}</CtaButton>
        </div>
      </div>
    </section>
  );
}
