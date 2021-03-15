<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "sUma eXperiencia | Conferencia UX",
      meta: [
        {
          vmid: "image",
          property: "og:image",
          itemprop: "image",
          content: "https://postimg.cc/gw4skHsp"
        },
        {
          vmid: "url",
          property: "og:url",
          content: "www.sumaexperiencia.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
</style>
