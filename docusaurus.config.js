// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
        title: 'Team',
        titleDelimiter: '-',
        tagline: 'Team',
        url: 'https://design-engineering.littleor.cn',
        baseUrl: '/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/clock.png',
        organizationName: 'mengcye', // Usually your GitHub org/user name.
        projectName: 'DesignEngineering', // Usually your repo name.

        presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                    docs: {
                        routeBasePath: '/', // doc only mode
                        sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                        editUrl: 'https://github.com/mengcye/DesignEngineering/blob/master',
                    }, blog: false, theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                }
            ),],],
        themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                colorMode: {
                    respectPrefersColorScheme: true
                },
                /* algolia: {
                     // The application ID provided by Algolia
                     appId: 'YOUR_APP_ID',

                     // Public API key: it is safe to commit it
                     apiKey: 'YOUR_SEARCH_API_KEY',

                     indexName: 'YOUR_INDEX_NAME',

                     // Optional: see doc section below
                     contextualSearch: true,

                     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                     // externalUrlRegex: 'external\\.com|domain\\.com',

                     // Optional: Algolia search parameters
                     // searchParameters: {},

                     //... other Algolia params
                 },*/
                // algolia: {
                //     // The application ID provided by Algolia
                //     appId: 'FW0TY4ZE99',
                //
                //     // Public API key: it is safe to commit it
                //     apiKey: '1dc44a8b9f2eed41019c57d59f473bdb',
                //
                //     indexName: 'anyweb',
                //
                //     // Optional: see doc section below
                //     contextualSearch: true,
                //
                //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                //     // externalUrlRegex: 'external\\.com|domain\\.com',
                //
                //     // Optional: Algolia search parameters
                //     // searchParameters: {},
                //
                //     //... other Algolia params
                // },

                navbar: {
                    title: '10:36 Team', logo: {
                        alt: 'My Site Logo', src: 'img/clock1.png', width: 30
                    }, items: [{
                        href: 'https://github.com/mengcye/DesignEngineering/issues', label: 'Feedback', position: 'left'
                    }, {
                        href: 'https://github.com/mengcye/DesignEngineering', label: 'GitHub', position: 'right',
                    },],
                },

                footer: {
                    style: 'light',
                    links: [{
                        title: 'Docs', items: [{
                            label: 'Tutorial', to: '/',
                        },],
                    }, {
                        title: 'Community', items: [{
                            label: 'Discussions', href: 'https://github.com/mengcye/DesignEngineering/discussions',
                        },],
                    }, {
                        title: 'More', items: [{
                            label: 'GitHub', href: 'https://github.com/mengcye',
                        },],
                    },],
                    copyright: `Copyright © ${new Date().getFullYear()} Team. Built with Docusaurus.`,
                }, prism: {
                    theme: lightCodeTheme, darkTheme: darkCodeTheme, additionalLanguages: ['java'],
                },
            }),
    }
;

module.exports = config;
// module.exports = {
//     plugins: ['@docusaurus/theme-live-codeblock'],
//     themeConfig: {
//       liveCodeBlock: {
//         /**
//          * 实时效果显示的位置，在编辑器上方还是下方。
//          * 可为："top" | "bottom"
//          */
//         playgroundPosition: 'bottom',
//       },
//     },
//   };
