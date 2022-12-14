// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Blog tiền số",
  tagline: "Kiến thức về tiền kỹ thuật số cho tất cả mọi người",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/crypto4newbie.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Blog tiền số",
        logo: {
          alt: "My Site Logo",
          src: "img/crypto4newbie.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Hướng dẫn",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://www.facebook.com/crypto4newbie",
            label: "Facebook",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://www.facebook.com/crypto4newbie",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/crypto4newbie",
              },
              {
                label: "Twitter",
                href: "https://www.facebook.com/crypto4newbie",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blogtienso, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {
          name: "keywords",
          content:
            "Hướng dẫn đầu tư crypto",
        },
        {
          name: "keywords",
          content:
            "tiền kỹ thuật số",
        },
        {
          name: "keywords",
          content:
            "Thông tin thị trường coin hôm nay",
        },
        {
          name: "keywords",
          content:
            "Tin tức mới nhất về thị trường crypto ",
        },
        {
          name: "keywords",
          content:
            "Crypto là gì ",
        },
        {
          name: "keywords",
          content:
            "Tiền ảo",
        },
        {
          name: "keywords",
          content:
            "crypto, cryptocurency",
        },
        {
          name: "keywords",
          content: "bitcoin, ethereum",
        },
        {
          name: "keywords",
          content: "tiền kỹ thuật số ",
        },
        {
          name: "keywords",
          content: "khóa học crypto",
        },
        {
          name: "keywords",
          content: "đầu tư tiền số cho người mới bắt đầu",
        },
        {
          name: "description",
          content:
            "Chia sẻ những kinh nghiệm đầu tư trong thị trường từ những người đi trước. Cung cấp những hướng dẫn đầu tư cho người mới gia nhập thị trường.",
        },
      ],
    }),
};

module.exports = config;
