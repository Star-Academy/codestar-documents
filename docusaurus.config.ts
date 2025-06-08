import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "StarAcademy",
    tagline: "کنارتیم تا بدرخشی!",
    favicon: "img/favicon.ico",
    url: "https://star-academy.github.io/",
    baseUrl: "/codestar-documents/",
    organizationName: "Star-Academy",
    projectName: "codestar-documents",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    i18n: {
        defaultLocale: "fa",
        locales: ["fa"],
        localeConfigs: {
            fa: {
                direction: "rtl",
                htmlLang: "fa-IR",
            },
        },
    },
    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    editUrl:
                        "https://github.com/Star-Academy/codestar-documents/tree/master/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            } satisfies Preset.Options,
        ],
    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'codestar',
                path: 'CodeStar',
                routeBasePath: 'codestar',
                sidebarPath: './sidebarsCodeStar.ts',
            },
        ],
    ],
    themeConfig: {
        navbar: {
            title: "آکادمی ستاره",
            logo: {
                alt: "آکادمی ستاره",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "dropdown",
                    position: "left",
                    label: "مستندات",
                    items: [
                        {
                            type: "doc",
                            docId: "general",
                            label: "عمومی",
                        },
                        {
                            type: "doc",
                            docId: "frontend",
                            label: "Frontend",
                        },
                        {
                            type: "doc",
                            docId: "software-engineering",
                            label: "Backend",
                        },
                        {
                            type: "doc",
                            docId: "devops",
                            label: "DevOps",
                        },
                        {
                            type: "doc",
                            docId: "soft-skills",
                            label: "مهارت‌های نرم",
                        },
                        {
                            type: "doc",
                            docId: "project",
                            label: "پروژه",
                        },
                    ],
                },
                {
                    type: "dropdown",
                    label: "CodeStar",
                    position: 'left',
                    items: [
                        {
                            type: "doc",
                            docsPluginId: 'codestar',
                            docId: "for-mentors",
                            label: "مستندات برگزاری دوره",
                        },
                        {
                            type: "doc",
                            docsPluginId: 'codestar',
                            docId: "for-interns",
                            label: "مستندات کاراموزان",
                        }
                    ],
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
            style: "dark",
            links: [],
            copyright: `آکادمی ستاره - شرکت فناوری اطلاعات و ارتباطات مهیمن © ${new Date().toLocaleDateString("fa-IR").split('/')[0]} `,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
    markdown: {
        mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

export default config;
