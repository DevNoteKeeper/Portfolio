const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '/',
  outputDir: 'dist',
  transpileDependencies: true,
});
