/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_REDIRECT_URL: process.env.REACT_APP_REDIRECT_URL,
    REACT_APP_BE_URL: process.env.REACT_APP_BE_URL,
    REACT_APP_BASENAME: process.env.REACT_APP_BASENAME,
  },
};

module.exports = nextConfig;
