// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'آکادمی ستاره',
    staticDirectories: ['public', 'static'],
    tagline: 'بزن بریم!',
    url: 'https://star-academy.github.io/',
    baseUrl: '/codestar-documents/',
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
                        docId: 'non-technical-documents',
                        position: 'left',
                        label: 'مستندات غیرفنی',
                    },
                    {
                        href: 'https://www.aparat.com/Code_star/',
                        label: 'Aparat',
                        position: 'right',
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
                                label: 'مستندات غیرفنی',
                                to: '/docs/non-technical-documents',
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
                            {
                                label: 'Aparat',
                                href: 'https://www.aparat.com/Code_star/',
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
