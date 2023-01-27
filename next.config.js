/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	modularizeImports: {
		"react-bootstrap": {
			transform: "react-bootstrap/{{member}}",
		},
	},
	swcMinify: true,
	reactStrictMode: true,
};

module.exports = nextConfig;
