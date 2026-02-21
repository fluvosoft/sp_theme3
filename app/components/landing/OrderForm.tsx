"use client";

import { useState, type FormEvent, type MouseEvent } from "react";
import { LockIcon } from "../ui/Icons";
import {
  THEME,
  ORDER_FORM_ID,
  CONTACT_PHONE,
  ORDER_PRODUCT_NAME,
  ORDER_UNIT_PRICE_BDT,
  SHIPPING_INSIDE_DHAKA_BDT,
  SHIPPING_OUTSIDE_DHAKA_BDT,
} from "../../lib/constants";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-gray-900 placeholder:text-gray-400 transition-colors focus:border-[var(--pink-bright)] focus:outline-none focus:ring-2 focus:ring-[var(--pink-bright)]/20";
const labelClass = "block text-sm font-semibold text-gray-800";

export default function OrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [shipping, setShipping] = useState<"inside" | "outside">("outside");

  const subtotal = quantity * ORDER_UNIT_PRICE_BDT;
  const deliveryCharge =
    shipping === "inside" ? SHIPPING_INSIDE_DHAKA_BDT : SHIPPING_OUTSIDE_DHAKA_BDT;
  const total = subtotal + deliveryCharge;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to backend or order service
  }

  function handleDecrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((q) => Math.max(1, q - 1));
  }

  function handleIncrement(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((q) => Math.min(10, q + 1));
  }

  return (
    <section
      id={ORDER_FORM_ID}
      className="bg-white px-4 py-10 md:px-8 md:py-14"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="font-heading text-center text-xl font-bold md:text-2xl"
          style={{ color: THEME.pink }}
        >
          অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পুরন করুন।
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ফোনে অর্ডার করুন{" "}
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="font-semibold text-gray-900 underline decoration-[var(--pink-bright)] underline-offset-2 hover:no-underline"
          >
            {CONTACT_PHONE}
          </a>
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-lg)]"
        >
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: THEME.pinkBright }}
            aria-hidden
          />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr,340px]">
            {/* Left: Billing details */}
            <div className="border-b border-gray-200 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <h3 className="font-heading mb-4 text-base font-bold text-gray-800">
                বিলিং বিবরণ
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    আপনার নাম *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="এখানে আপনার নাম লিখুন"
                  />
                </div>
                <div>
                  <label htmlFor="address" className={labelClass}>
                    সম্পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    id="address"
                    required
                    rows={2}
                    className={`${inputClass} resize-none`}
                    placeholder="House number and street name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    আপনার নাম্বার *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className={inputClass}
                    placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
                  />
                </div>
              </div>
            </div>

            {/* Right: Order summary + Payment + Button */}
            <div className="flex flex-col bg-gray-50/80 p-6 lg:p-8">
              <h3 className="font-heading mb-3 text-base font-bold text-gray-800">
                আপনার অর্ডার
              </h3>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-3 py-2.5 text-left font-semibold text-gray-800">
                        Product
                      </th>
                      <th className="px-3 py-2.5 text-right font-semibold text-gray-800">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2.5">
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-gray-200">
                            <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-500">
                              img
                            </div>
                          </div>
                          <span className="font-medium text-gray-900">
                            {ORDER_PRODUCT_NAME} × {quantity}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-right font-medium text-gray-900 tabular-nums">
                        {subtotal}৳
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-700">Subtotal</td>
                      <td className="px-3 py-2 text-right font-medium text-gray-900 tabular-nums">
                        {subtotal}৳
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-3 py-2 font-medium text-gray-700">Delivery</td>
                      <td className="px-3 py-2 text-right font-medium text-gray-900 tabular-nums">
                        {deliveryCharge}৳
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-semibold text-gray-800">Total</td>
                      <td className="px-3 py-2 text-right font-bold text-gray-900 tabular-nums">
                        {total}৳
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Quantity + Shipping */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="flex h-9 w-9 shrink-0 cursor-pointer select-none items-center justify-center rounded-l-lg border-0 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                    aria-label="কম করুন"
                  >
                    −
                  </button>
                  <span className="flex h-9 min-w-[2.5rem] items-center justify-center border-x border-gray-200 bg-white text-sm font-medium tabular-nums text-gray-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="flex h-9 w-9 shrink-0 cursor-pointer select-none items-center justify-center rounded-r-lg border-0 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 active:bg-gray-200"
                    aria-label="বাড়ান"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-3 text-sm">
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "outside"}
                      onChange={() => setShipping("outside")}
                      className="h-4 w-4"
                      style={{ accentColor: THEME.pink }}
                    />
                    <span className="text-gray-700">ঢাকার বাহিরে {SHIPPING_OUTSIDE_DHAKA_BDT}৳</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping === "inside"}
                      onChange={() => setShipping("inside")}
                      className="h-4 w-4"
                      style={{ accentColor: THEME.pink }}
                    />
                    <span className="text-gray-700">ঢাকার ভিতরে {SHIPPING_INSIDE_DHAKA_BDT}৳</span>
                  </label>
                </div>
              </div>

              {/* Payment note */}
              <div className="mt-4 flex gap-2 rounded-lg border border-amber-200 bg-amber-50/80 px-3 py-2.5 text-xs text-amber-800">
                <span className="shrink-0 text-amber-500" aria-hidden>
                  ⓘ
                </span>
                <span>
                  Cash on delivery available. Contact us if you need alternate payment options.
                </span>
              </div>

              {/* Privacy */}
              <p className="mt-4 text-[11px] leading-relaxed text-gray-500">
                Your personal data will be used to process your order and as described in our{" "}
                <a
                  href="#"
                  className="font-medium underline decoration-[var(--pink-bright)] underline-offset-1 focus:outline-none focus:ring-2 focus:ring-[var(--pink-bright)]"
                  style={{ color: "#b45309" }}
                >
                  privacy policy
                </a>
                .
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="font-heading mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold text-white shadow-[var(--shadow)] transition-all hover:opacity-95 hover:shadow-[var(--shadow-lg)] focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ backgroundColor: THEME.pinkBright }}
              >
                <LockIcon className="h-5 w-5" />
                অর্ডার করুন {total}৳
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
