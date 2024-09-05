const ChainedBackend = require("i18next-chained-backend").default;
const LocalStorageBackend = require("i18next-localstorage-backend").default;
const isBrowser = typeof window !== "undefined";

module.exports = {
	debug: process.env.NODE_ENV === "development",
	backend: {
		backendOptions: [{ expirationTime: 60 * 60 * 1000 }, {}], // 1 hour
		backends: isBrowser ? [LocalStorageBackend, HttpBackend] : []
	},
	i18n: {
		defaultLocale: "fr",
		locales: ["fr", "en"]
	},
	react: {
		useSuspense: true
	},
	localePath:
		typeof window === "undefined"
			? require("path").resolve("./public/locales")
			: "/locales",
	reloadOnPrerender: process.env.NODE_ENV === "development",
	use: isBrowser ? [ChainedBackend] : []
};
