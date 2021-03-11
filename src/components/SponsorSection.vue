<template>
  <div class="sponsorSection">
    <div class="texture-downright">
      <Textura4 />
    </div>
    <h3 class="sponsorSection-title">Auspicia:</h3>
    <div>
      <img class="sponsor-divider" src="@/assets/images/divider.svg" alt="" />
    </div>
    <p class="sponsor-intro">
      Este evento surge del fondo CAPF Fund de la Foreign, Commonwealth &
      Development Office a través del Chevening Programme para alumni y la
      Embajada de Reino Unido en Uruguay
    </p>
    <div class="sponsor-logo--wrapper">
      <img src="@/assets/images/Chevening-logo.png" alt="" />
    </div>
  </div>
</template>
<script>
import Textura4 from "@/components/atoms/Textura4.vue";
export default {
  components: {
    Textura4
  }
};
</script>
<style scoped></style>
