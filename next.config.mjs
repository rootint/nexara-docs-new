import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/guides',
        permanent: false,
      },
    ];
  },
};

export default withMDX(config);
