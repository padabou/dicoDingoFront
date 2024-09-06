/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://equidico.fr",
  generateRobotsTxt: true // (optional)
  // ...other options
};
