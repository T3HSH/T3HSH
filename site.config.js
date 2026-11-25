// NODEX identity configuration based on Pelak.
// Keep all Pelak features available; add real account names and URLs before publishing.
export default {
  name: "NODEX",
  shortName: "NODEX",
  tagline: {
    fa: "زیرساخت قدرتمند، ارتباط هوشمند",
    en: "Powerful Infrastructure. Smart Connectivity."
  },
  description: {
    fa: "مرکز خدمات سرور، پنل و راهکارهای شبکه NODEX",
    en: "NODEX server, panel and network services"
  },
  signature: "NODEX NETWORK",
  cardSubtitle: "SERVERS · TUNNELS · NETWORK",
  showCredit: true,

  languages: ["fa", "en"],
  defaultLang: "fa",

  // Add your real public usernames here. Empty values hide unconfigured social tiles.
  social: {
    telegram: "",
    youtube: "",
    instagram: "",
    github: "",
    featuredRepo: ""
  },

  links: [],

  donate: {
    enabled: true,
    title: { fa: "حمایت از NODEX", en: "Support NODEX" },
    goalName: { fa: "توسعه زیرساخت", en: "Infrastructure development" },
    goal: 0,
    currency: { fa: "تومان", en: "Toman" },
    button: { label: { fa: "حمایت", en: "Support" }, url: "" },
    crypto: { label: { fa: "حمایت کریپتو", en: "Crypto support" }, url: "" }
  },

  // Preserve every original Pelak feature.
  sections: {
    videos: true,
    posts: true,
    project: true,
    tip: true,
    guestbook: true,
    map: true,
    snake: true,
    terminal: true,
    achievements: true,
    visitorCard: true,
    qr: true
  },

  theme: {
    accent: { a1: [0, 255, 140], a2: [0, 190, 255] }
  },
  hubCountry: "DE",
  hubLabel: "NODEX",
  terminalUser: "nodex",
  securityContact: ""
};
