/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_BASENAME: process.env.REACT_APP_BASENAME,
    REACT_APP_BE_URL: process.env.REACT_APP_BE_URL,
  },
};

module.exports = nextConfig;
