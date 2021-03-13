<template>
  <div class="home">
    <Header />
    <conduct />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Conduct from "@/components/Conduct.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Conduct,
    Footer
  }
};
</script>
