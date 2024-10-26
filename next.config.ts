import withMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);
