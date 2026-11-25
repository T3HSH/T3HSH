// NODEX brand configuration for Pelak.
// Replace the example Telegram destinations before publishing.
// Keep secrets in Cloudflare Worker secrets, never in this public file.
export default {
  name: "NODEX",
  shortName: "NODEX",
  tagline: {
    fa: "زیرساخت قدرتمند، ارتباط پایدار",
    en: "Powerful Infrastructure. Smart Connectivity."
  },
  description: {
    fa: "ارائه خدمات سرور، پنل مدیریت و راهکارهای شبکه",
    en: "Server infrastructure, management panels and network solutions"
  },
  signature: "NODEX NETWORK",
  cardSubtitle: "SERVERS · TUNNELS · PANELS",
  showCredit: false,

  languages: ["fa", "en"],
  defaultLang: "fa",

  social: {
    telegram: "",
    youtube: "",
    instagram: "",
    github: "",
    featuredRepo: ""
  },

  // Pelak renders these as compact interactive links in its main grid.
  // Replace https://t.me/YOUR_USERNAME with your real order/support destination.
  links: [
    {
      id: "iran-server",
      label: { fa: "سرور ایران", en: "Iran Servers" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "globe",
      color: "34,211,238",
      handle: ""
    },
    {
      id: "foreign-server",
      label: { fa: "سرور خارج", en: "Abroad Servers" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "globe",
      color: "0,190,255",
      handle: ""
    },
    {
      id: "spoof-server",
      label: { fa: "سرور ایران اسپوف", en: "Iran Spoof Servers" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "code",
      color: "0,255,140",
      handle: ""
    },
    {
      id: "tunnel-disruption",
      label: { fa: "تانل شرایط اختلال", en: "Tunnel for Disrupted Networks" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "code",
      color: "0,255,140",
      handle: ""
    },
    {
      id: "tunnel-outage",
      label: { fa: "راهکار ارتباطی زمان قطعی", en: "Connectivity Options During Outages" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "globe",
      color: "34,211,238",
      handle: ""
    },
    {
      id: "tunnel-gaming",
      label: { fa: "تانل گیمینگ", en: "Gaming Tunnel" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "star",
      color: "139,92,246",
      handle: ""
    },
    {
      id: "panels",
      label: { fa: "فروش پنل مدیریت کانفیگ", en: "Configuration Management Panels" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "store",
      color: "139,92,246",
      handle: ""
    },
    {
      id: "support",
      label: { fa: "پشتیبانی و ثبت سفارش", en: "Support & Orders" },
      url: "https://t.me/YOUR_USERNAME",
      icon: "chat",
      color: "74,222,128",
      handle: ""
    }
  ],

  donate: {
    enabled: false,
    title: { fa: "", en: "" },
    goalName: { fa: "", en: "" },
    goal: 0,
    currency: { fa: "تومان", en: "Toman" },
    button: { label: { fa: "", en: "" }, url: "" },
    crypto: { label: { fa: "", en: "" }, url: "" }
  },

  sections: {
    videos: false,
    posts: false,
    project: false,
    tip: false,
    guestbook: false,
    map: false,
    snake: false,
    terminal: true,
    achievements: false,
    visitorCard: false,
    qr: true
  },

  theme: {
    accent: {
      a1: [0, 255, 140],
      a2: [0, 190, 255]
    }
  },

  hubCountry: "DE",
  hubLabel: "NODEX",
  terminalUser: "nodex",
  securityContact: ""
};
