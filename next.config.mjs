/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    turbopack: {},
    images: {
        unoptimized: true
    },
    devIndicators: {
        appIsrStatus: false
    }
};

export default nextConfig;