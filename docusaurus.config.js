// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'آکادمی ستاره',
    tagline: 'بزن بریم!',
    url: 'https://docs.code-star.ir/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'images/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'Star-Academy', // Usually your GitHub org/user name.
    projectName: 'codestar-documents', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fa',
        locales: ['fa'],
        localeConfigs: {
            fa: {
                direction: 'rtl',
                htmlLang: 'fa-IR',
            },
        },
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Star-Academy/codestar-documents/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'آکادمی ستاره',
                logo: {
                    alt: 'لوگو آکادمی ستاره',
                    src: 'images/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'مقدمات',
                    },
                    {
                        type: 'doc',
                        docId: 'frontend',
                        position: 'left',
                        label: 'فرانت‌اند',
                    },
                    {
                        type: 'doc',
                        docId: 'software-engineering',
                        position: 'left',
                        label: 'مهندسی نرم‌افزار',
                    },
                    {
                        href: 'https://github.com/Star-Academy/',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                links: [
                    {
                        title: 'مستندات',
                        items: [
                            {
                                label: 'مقدمات',
                                to: '/docs/intro',
                            },
                            {
                                label: 'فرانت‌اند',
                                to: '/docs/frontend',
                            },
                            {
                                label: 'مهندسی نرم‌افزار',
                                to: '/docs/software-engineering',
                            },
                        ],
                    },
                    {
                        title: 'بیشتر',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/Star-Academy/',
                            },
                        ],
                    },
                ],
                copyright: 'تمامی حقوق مادی و معنوی این سایت متعلق به آکادمی ستاره می‌باشد.',
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                    hideable: true,
                },
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 6,
            },
        }),
};

module.exports = config;
