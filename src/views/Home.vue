<template>
  <div class="home">
    <hero />
    <main-features-section />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import mainFeaturesSection from "@/components/MainFeaturesSection.vue";

export default {
  name: "Home",
  components: {
    Hero,
    mainFeaturesSection,
  },
};
</script>
