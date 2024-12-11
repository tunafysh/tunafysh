/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/github',
                destination: 'https://github.com',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
