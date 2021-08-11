const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Nave",
  tagline: "Nave team docs",
  url: "https://naveteam.github.io/",
  baseUrl: "/nave-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "naveteam",
  projectName: "nave-docs",
  clientModules: [require.resolve("./setup-playground.js")],
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "nave logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://github.com/naveteam",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Nave docs, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  scripts: [
    {
      src: "https://snack.expo.io/embed.js",
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/naveteam/nave-docs",
          remarkPlugins: [require("./src/remarks/playground")],
        },
      },
    ],
  ],
};
