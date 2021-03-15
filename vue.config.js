module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/app.scss";`
      },
      sass: {
        additionalData: `@import "~@/app.sass"`
      }
    },
    requireModuleExtension: false
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "sUma eXperiencia | Conferencia UX";
      return args;
    });
  }
};
