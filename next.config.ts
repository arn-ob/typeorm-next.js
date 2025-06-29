import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    serverExternalPackages: ['typeorm'],
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    experimental: {
        serverMinification: false,
        // Remove before going to prod
        webpackMemoryOptimizations: true,
    },
    // Uncomment to prevent double rendering of client components in dev mode
    // reactStrictMode: false
};

export default nextConfig;
