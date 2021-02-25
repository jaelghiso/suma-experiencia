<template>
  <div class="home">
    <hero />
    <main-features-section />
    <speakers-section />
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import mainFeaturesSection from "@/components/MainFeaturesSection.vue";
import speakersSection from "@/components/SpeakersSection.vue";

export default {
  name: "Home",
  components: {
    Hero,
    mainFeaturesSection,
    speakersSection,
  },
};
</script>
