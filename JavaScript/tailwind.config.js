module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        scrollBehavior: ['responsive'], // Ensure scroll-behavior is enabled
      },
    },
    plugins: [],
  };