"use client";

import { useState } from "react";

const faqItems: { question: string; answer: string }[] = [
  {
    question: "অগ্রিম কোন টাকা দিতে হবে?",
    answer: "না, অগ্রিম কোন টাকা দিতে হবে না। অর্ডার কনফার্ম হওয়ার পর ডেলিভারির সময় পেমেন্ট নেওয়া হয়।",
  },
  {
    question: "ডেলিভারি চার্জ কত?",
    answer: "ডেলিভারি চার্জ সম্পূর্ণ ফ্রি। আপনার অর্ডারের মূল্যের মধ্যে ডেলিভারি চার্জ অন্তর্ভুক্ত।",
  },
  {
    question: "সাবান ব্যবহার করব কীভাবে?",
    answer: "প্রতিদিন সকাল ও রাতে মুখ ধোয়ার সময় সাবান দিয়ে হালকা হাতে ম্যাসাজ করুন, তারপর পানি দিয়ে ধুয়ে ফেলুন।",
  },
  {
    question: "সাবানটি কী কী উপাদান দিয়ে তৈরি?",
    answer: "কাশ্মীরের সাফরন, গোট মিল্ক এবং বিভিন্ন এসেনশিয়াল অয়েল দিয়ে এই সাবান তৈরি। ব্রণ দূর করতে, ত্বক উজ্জ্বল করতে ও সানবার্ন কমাতে উপকারী।",
  },
  {
    question: "আপনারা কি কোন গ্যারান্টি দেন?",
    answer: "হ্যাঁ, আমরা গুণমানের উপর গ্যারান্টি দিয়ে থাকি। কোনো সমস্যা হলে আমাদের সাথে যোগাযোগ করুন।",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 transition-colors hover:bg-white/15"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="font-heading flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white focus-visible:ring-2 focus-visible:ring-white/50"
          >
            <span>{item.question}</span>
            <span
              className={`shrink-0 text-xs transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              aria-hidden
            >
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="border-t border-white/10 px-5 pb-4 pt-0 text-sm leading-relaxed text-white/90">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
