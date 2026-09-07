import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  // Next.js'in normal kod dosyaları haricinde .mdx dosyalarını da tanımasını sağlar
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({});

// Ayarları birleştirip dışa aktarıyoruz
export default withMDX(nextConfig);