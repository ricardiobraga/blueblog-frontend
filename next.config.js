/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  // experimental: {
  //   appDir: true,
  // }
}

module.exports = {
  env: {
    DB_HOST:"https://rabid-van-production.up.railway.app/api/posts",
  },
};
