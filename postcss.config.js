module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'tailwindcss': {},
    'autoprefixer': {},
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? { 'cssnano': { preset: 'default' } } : {}),
  },
};
