module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/app.scss";`,
      },
      sass: {
        additionalData: `@import "~@/app.sass"`,
      },
    },
    requireModuleExtension: false,
  },
};
