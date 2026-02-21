/**
 * Theme and app constants – single source of truth for colors and config
 */
export const THEME = {
  pink: "#b8004d",
  pinkBright: "#e60066",
  pinkDark: "#9a0040",
  pinkDarker: "#7a0033",
  pinkLight: "#fce8f0",
  pinkLightSoft: "#fdf2f7",
  yellow: "#f5c542",
  white: "#ffffff",
  black: "#1a1a2e",
  muted: "#4a4a68",
} as const;

export const ORDER_FORM_ID = "order";

export const CTA_LABEL = "অর্ডার করতে চাই";

export const CONTACT_PHONE = "01xxxxxxxxx";

/** Product: Unstitched 3-piece */
export const PRODUCT_TITLE = "সম্পূর্ণ আফসান প্রিন্ট করা আনস্টিজ ৩ পিস";
export const ORDER_PRODUCT_NAME = "সম্পূর্ণ আফসান প্রিন্ট করা আনস্টিজ ৩ পিস";
export const ORDER_UNIT_PRICE_BDT = 1100;
export const SHIPPING_INSIDE_DHAKA_BDT = 60;
export const SHIPPING_OUTSIDE_DHAKA_BDT = 90;

/** Feature list for Unstitched 3-piece */
export const FEATURES_LIST = [
  "৪৮ বডি ৫০+ ড্রেস লেন্থ",
  "২.৫ গজ (৯০ ইঞ্চি) পাজামা ফেব্রিক লেন্থ",
  "৫.৫ হাত ডুপাট্টা লেন্থ",
  "সম্পূর্ণ আফসান প্রিন্ট করা",
  "ফেব্রিক্সক্স কটন সুতি",
];

export const FEATURES_LIST_EXTENDED = [
  ...FEATURES_LIST,
  "ইসলাম অনুযায়ী ম্যানুফ্যাকচারিং",
  "কোন সমস্যা হলে সকাল ১০টা থেকে রাত ১০টা পর্যন্ত কল করুন",
  "এক্সচেঞ্জের জন্য ভিডিও প্রুফ প্রয়োজন",
];

/** Contact: Messenger & WhatsApp (replace with real links) */
export const FACEBOOK_MESSENGER_URL = "https://m.me/yourpage";
export const WHATSAPP_URL = "https://wa.me/8801xxxxxxxxx";

export const MESSENGER_MESSAGE =
  "আমাদের মেসেঞ্জারে ২৪ ঘন্টা প্রতিনিধি একটিভ থাকে। কোন সমস্যা হলে সাথে সাথে মেসেঞ্জারে মেসেজ করবেন।";
