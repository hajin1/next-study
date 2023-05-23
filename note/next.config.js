/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/products/deleted_forever',
				destination: '/products',
				permanent: true, // 308 Permanent Redirect (디스크 캐시에서)
			},
			{
				source: '/products/deleted_temp',
				destination: '/products',
				permanent: false, // 307 Temporary Redirect
			},
		];
	},
	async rewrites() {
		return [
			{
				source: '/hajin',
				destination: '/about/me/hajin',
			},
			{
				source: '/item',
				destination: '/products/1234',
			},
			{
				source: '/item/:slug',
				destination: '/products/:slug',
			},
		];
	},
};

module.exports = nextConfig;
