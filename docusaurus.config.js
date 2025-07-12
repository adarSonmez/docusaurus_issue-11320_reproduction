// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// v2+ themes import style
const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

let defaultTitle = "Current Locale is in English";
let defaultDescription = "Current Locale is in English";
let currentLocal = process.env.DOCUSAURUS_CURRENT_LOCALE;
let sidebarLocal = currentLocal;

if (currentLocal == "en") {
  currentLocal = "en";
  defaultTitle = "Current locale is in English";
  defaultDescription = "Current locale is in English";
} else {
  currentLocal = "";
  sidebarLocal = "tr";
  defaultTitle = "Current Locale is in Turkish";
  defaultDescription = "Current Locale is in Turkish";
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: defaultTitle,
  tagline: defaultDescription,
  favicon:
    "https://img.freepik.com/free-psd/golden-celebration-design-elements_23-2150317963.jpg",
  url: "https://doc.automind.com.tr",
  baseUrl: "/",
  organizationName: "Test",
  projectName: "gh-issue-11320-reproduction",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "tr",
    locales: ["tr", "en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: "/",
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        language: ["en", "tr"],
        ignoreFiles: ["docs/third-party-notices", "docs/eula"],
        removeDefaultStopWordFilter: ["tr", "en"],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `© ${new Date().getFullYear()} Test Company. All right reserved.`,
        links: [
          {
            title: "Docs",
            items: [
              {
                label:
                  "Test Wiki URL (en locale should navigate to usa wiki; tr locale should navigate to turkey wiki)",
                to:
                  sidebarLocal == "tr"
                    ? "https://en.wikipedia.org/wiki/Turkey"
                    : "https://en.wikipedia.org/wiki/United_States",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                html:
                  sidebarLocal == "tr"
                    ? '<p style="color:grey">İstanbul will be shown in Turkish</p>'
                    : '<p style="color:grey">NYC will be shown in English</p>',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "diff", "json"],
      },
      trailingSlash: false,
    }),
};

module.exports = config;
