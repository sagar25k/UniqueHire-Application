/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.23"],
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-tooltip',
      'react-icons',
    ],
  },
}

export default nextConfig
