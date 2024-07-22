/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "http://landpage.ozob.cn/landpage",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
