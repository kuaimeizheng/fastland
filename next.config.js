const path = require('path');
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        // 在这里添加 MDX 相关的配置
        // 例如，使用 remark 插件
        remarkPlugins: [],
        // 使用 rehype 插件
        rehypePlugins: [],
    },
});

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/assets/scss')],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        forceSwcTransforms: true,
    },
    images: {
        loader: "imgix",
        path: "localhost",
    },
    webpack: (config, {isServer}) => {
        // 在这里添加其他任何自定义的 webpack 配置
        // config.resolve.alias['components'] = path.join(__dirname, 'src/components');
        config.resolve.alias = {
            ...config.resolve.alias,
            '~components': path.join(__dirname, 'src/components'),
            "~components/*": path.join(__dirname, 'src/components/*'),
            '~data': path.join(__dirname, 'src/data'),
            '~fonts': path.join(__dirname, 'src/assets/fonts'),
            '~image': path.join(__dirname, 'public/image'),
            '~sections': path.join(__dirname, 'src/sections'),
            '~styled': path.join(__dirname, 'src/styles')
            // 根据需要继续添加别名
        };

        if (!isServer) {
            config.resolve.fallback.fs = false;
        }

        return config;
    },
};

module.exports = withMDX(nextConfig);
