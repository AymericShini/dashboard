import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import 'mixins.scss';`, // This will auto-import mixins.scss into every file
  },
};

export default nextConfig;
