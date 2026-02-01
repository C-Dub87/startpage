// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Cardiff",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.kagi.com",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "me",
      background_url: "src/img/banners/banner_02.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "metacouncil",
              url: "https://www.metacouncil.com",
              icon: "forms",
              icon_color: palette.red,
            },
            {
              name: "famiboards",
              url: "https://famiboards.com",
              icon: "device-nintendo",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "karakeep",
              url: "https://links.extrasolar.cc",
              icon: "bookmark",
              icon_color: palette.lavender,
            },
            {
              name: "koffan",
              url: "https://shopping.extrasolar.cc",
              icon: "list",
              icon_color: palette.pink,
            },
          ],
        },
        {
          name: "reading",
          links: [
            {
              name: "kagi news",
              url: "https://news.kagi.com/uk/latest",
              icon: "news",
              icon_color: palette.mauve,
            },
            {
              name: "pivot to ai",
              url: "https://pivot-to-ai.com",
              icon: "paperclip",
              icon_color: palette.blue,
            },
            {
              name: "disconnect",
              url: "https://disconnect.blog",
              icon: "plug-connected",
              icon_color: palette.yellow,
            },
            {
              name: "bbc news",
              url: "https://www.bbc.co.uk/news",
              icon: "article",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "productivity",
          links: [
            {
              name: "proton docs",
              url: "https://docs.proton.me",
              icon: "file-dots",
              icon_color: palette.sky,
            },
            {
              name: "notes",
              url: "https://notes.extrasolar.cc",
              icon: "note",
              icon_color: palette.blue,
            },
            {
              name: "mural",
              url: "https://app.mural.co",
              icon: "chalkboard",
              icon_color: palette.red,
            },
            {
              name: "ticktick",
              url: "https://ticktick.com/webapp/",
              icon: "list-check",
              icon_color: palette.yellow,
            },
          ],
        },
      ],
    },
    {
      name: "server",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "sonarr",
              url: "https://sonarr.extrasolar.cc",
              icon: "device-tv-old",
              icon_color: palette.blue,
            },
            {
              name: "radarr",
              url: "https://radarr.extrasolar.cc",
              icon: "movie",
              icon_color: palette.yellow,
            },
            {
              name: "youtarr",
              url: "https://youtarr.extrasolar.cc/downloads",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "lidarr",
              url: "https://lidarr.extrasolar.cc",
              icon: "music",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "settings",
          links: [
            {
              name: "Unraid",
              url: "http://homeserver.local",
              icon: "server-2",
              icon_color: palette.peach,
            },
            {
              name: "cloudflare dashboard",
              url: "https://dash.cloudflare.com",
              icon: "brand-cloudflare",
              icon_color: palette.yellow,
            },
            {
              name: "123 reg",
              url: "https://account.123-reg.co.uk/products",
              icon: "world-minus",
              icon_color: palette.green,
            },
            {
              name: "hetzner",
              url: "https://console.hetzner.com/projects",
              icon: "box",
              icon_color: palette.red,
            },
            {
              name: "extrasolar control panel",
              url: "https://www.extrasolar.cc",
              icon: "rocket",
              icon_color: palette.blue,
            },
            {
              name: "VoidAuth",
              url: "https://auth.extrasolar.cc/",
              icon: "lock-square-rounded",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
