import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	cacheComponents: true,
	typescript: {
		ignoreBuildErrors: true
	},
	cacheHandlers: {
		default: require.resolve('./cache-handlers/remote-handler.js'),
		remote: require.resolve('./cache-handlers/remote-handler.js'),
	},
};

export default nextConfig;
