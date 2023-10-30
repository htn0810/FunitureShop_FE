/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_NAME: process.env.REACT_APP_BASENAME,
    BACKEND_URL: process.env.REACT_APP_BE_URL,
  },
};

module.exports = nextConfig;
