import { SiteConfig } from "@/types/siteConfig";
import { MdEmail } from "react-icons/md";

const OPEN_SOURCE_URL = 'https://www.pgyer.com/nEUV5zDQ'

const baseSiteConfig = {
  name: "荟安家",
  description:
    "一款功能强大、易于使用的房屋管理系统，旨在为物业公司、业主和住户提供智能便捷的房屋管理体验。凭借其创新的功能和人性化的设计，可以帮助您轻松管理您的房屋，提升工作效率。",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: '/',
  keywords: ["智能", "便捷"],
  authors: [
    {
      name: "中广盛业科技有限公司",
      url: "",
      twitter: '',
    }
  ],
  creator: '@中广盛业科技有限公司',
  openSourceURL: '',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-28x28.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'email', href: "mailto:gufanfan.worker@gmail.com", icon: MdEmail },
  ],
  footerLinks: [
  ],
  footerProducts: [
    { url: 'http://agreement.ozob.cn/housing/%E7%94%A8%E6%88%B7%E5%8D%8F%E8%AE%AE.html', name: '用户协议' },
    { url: 'http://agreement.ozob.cn/housing/%E9%9A%90%E7%A7%81%E6%94%BF%E7%AD%96.html', name: '隐私政策' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
