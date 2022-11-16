// next.config.js
module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}

		return config;
	},
	images: {
		formats: ["image/avif", "image/webp"],
		quality: 75,
		deviceSizes: [320, 375, 480, 600, 768, 924, 1202, 1600, 1920],
		minimumCacheTTL: 60 * 60 * 24 * 365 * 5,
	},
	experimental: {
		output: "standalone",
	},
	reactStrictMode: true,
};
