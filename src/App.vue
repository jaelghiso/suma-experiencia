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
      meta: [{ property: "og:image", content: "https://postimg.cc/gw4skHsp" }]
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/sass/app.scss";
</style>
