/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    // Enable CSS Modules
    cssModules: true,

    // Use CSS Modules for all files with the .module.css extension
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]'
    }
}

module.exports = nextConfig
