// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const { webpackPlugin } = require("./plugins/webpack-plugin.cjs");
const posthogPlugin = require("./plugins/posthog-plugin.cjs");

const { version } = require("react");

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve("./sidebars.js"),
      breadcrumbs: false,
      showLastUpdateTime:true,
      showLastUpdateAuthor:false,
      editUrl:
        "https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs",
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection("experience-manual"),
  defineSection("ios-sdk"),
  defineSection("android-sdk"),
  defineSection("flutter-sdk"),
  defineSection("unity-sdk"),
  defineSection("open-api-pure-csharp"),
  defineSection("open-api-visual-scripting"),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "XRMOD Engine Manual",
  tagline:
    "XRMOD Engine is a free watermark-free XR build system that supports commercial licenses (free commercial licenses).",
  url: "https://docs.phantomsxr.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "phantomsxr", // Usually your GitHub org/user name.
  projectName: "xrmod-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },
  clientModules: [require.resolve("./src/client/define-ui-kit.js")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/home",
          routeBasePath: "/",
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars-home.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs",

          ...defaultSettings,
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Phantomxm2021/xrmod-engine-docs-source/tree/main/docs',
        // },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/api-reference.css"),
          ],
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("./plugins/changelog/index.js"),
      {
        blogTitle: "XRMOD changelog",
        blogDescription:
          "Keep yourself up-to-date about new features in every release",
        blogSidebarCount: "ALL",
        blogSidebarTitle: "Changelog",
        routeBasePath: "/changelog",
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        authorsMapPath: "authors.json",
        feedOptions: {
          type: "all",
          title: "XRMOD changelog",
          description:
            "Keep yourself up-to-date about new features in every release",
          copyright: `Copyright © ${new Date().getFullYear()} PhantomsXR Co,Ltd.`,
          language: "en",
        },
      },
    ],
    // [
    //   "@docusaurus/plugin-ideal-image",
    //   {
    //     quality: 75,
    //     max: 720, // 最大缩放图片尺寸。
    //     min: 128, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
    //     steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
    //     disableInDev: true,
    //   },
    // ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-02WKKNH4ZE',
        anonymizeIP: true,
      },
    ],
    ...SECTIONS,
    webpackPlugin,
    posthogPlugin,
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath:"/"
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "/img/xrmod-docs-card.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "XRMOD Manual",
        logo: {
          href: "/",
          src: "/logo/light.svg",
          srcDark: "/logo/dark.svg",
          alt: "XRMOD Manual",
        },
        items: [
          {
            label: "Creative",
            to: "experience-manual",
            position: "left",
            activeBaseRegex: "(experience-manual)",
          },
          {
            label: "SDKs",
            to: "ios-sdk",
            position: "left",
            activeBaseRegex: "(.*-sdk)",
          },
          {
            to: "open-api-pure-csharp",
            label: "Creative API",
            position: "left",
            activeBaseRegex: "(open-api-pure-csharp|open-api-visual-scripting)",
          },
          {
            label: "Restful API",
            to: "/api/",
            position: "left",
          },
          // { to: "pricing", label: "Pricing", position: "left" },
          { to: "changelog", label: "Changelog", position: "left" },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          //   dropdownActiveClassDisabled: true,
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/Phantomxm2021",
            className: "pseudo-icon github-icon",
            position: "right",
          },
          {
            href: "https://discord.gg/YnHfHadjMA",
            className: "pseudo-icon discord-icon",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/YnHfHadjMA",
              },
              {
                label: "Wechat Group",
                href: "https://assets.cn.weacw.com/xrmod-engine-doc/images/wechat-qr-code.jpg",
              },
              {
                label: "QQ Group",
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=JcSb0cSU8cLnONg_PFwc1lBwdFeRV_Yn&jump_from=webapi",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Phantom74605762",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/xrmod/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCf98zocVgz1FGF6jgx4N-oA",
              },
              {
                label: "Bilibili",
                href: "https://space.bilibili.com/173991951/video",
              },

              {
                label: "GitHub",
                href: "https://github.com/Phantomxm2021",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PhantomsXR Co.,Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "dart",
          "ruby",
          "groovy",
          "kotlin",
          "java",
          "swift",
          "objectivec",
          "csharp",
        ],
      },
      posthog: {
        apiKey: "phc_KSFZUh36KxomBDSpJ9F7K98ZMtC9MnbGsgU34XkTe9c",
      },
      // algolia: {
      //   appId: "YJJPYDXNO5",
      //   apiKey: "2612ff09a2bd4d36fc6679036a741f0d",
      //   indexName: "docs",
      //   contextualSearch: true,
      //   searchParameters: {},
      // },
      metadata: [
        {
          name: "ar,vr,mr,xr,hololen,meta,verse,facebook,microsoft,apple,arkit,arcore,easyar,vuforia,slam,增强现实,sdk,ar sdk,",
          content:
            "ar,vr,mr,xr,hololen,meta,verse,facebook,microsoft,apple,arkit,arcore,easyar,vuforia,slam,增强现实,sdk,ar sdk",
        },
      ],
    }),
};

module.exports = config;
