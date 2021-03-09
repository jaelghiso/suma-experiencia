<template>
  <div class="home">
    <Header />
    <hero />
    <main-features-section />
    <speakers-section />
    <talks-section />
    <workshops-section />
    <sponsor-section />
    <cta-section />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import mainFeaturesSection from "@/components/MainFeaturesSection.vue";
import speakersSection from "@/components/SpeakersSection.vue";
import talksSection from "@/components/TalksSection.vue";
import workshopsSection from "@/components/WorkshopsSection.vue";
import sponsorSection from "@/components/SponsorSection.vue";
import ctaSection from "@/components/CTASection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    mainFeaturesSection,
    speakersSection,
    talksSection,
    workshopsSection,
    sponsorSection,
    ctaSection, 
    Footer
  },
};
</script>
