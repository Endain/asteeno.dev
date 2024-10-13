/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.html$/i,
            loader: "html-loader"
        });

        // Important: return the modified config
        return config;
    }
};

export default nextConfig;