<template>
  <div>
    <div class="texture-left">
      <Textura3 />
    </div>
    <div class="texture-right">
      <Textura6 />
    </div>
    <div class="speakersSection-header">
      <h2 class="speakersSection-title">Speakers</h2>
    </div>
    <div
      class="speakersSection-body grid md:grid-cols-3 sm:grid-cols-2 md:gap-4 sm:gap-2"
    >
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Anna W.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Anna White</h4>
        <p class="speaker-role">
          Head of Capability Building - Digital, Novartis
        </p>
      </div>
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Regina L.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Regina A. Lena</h4>
        <p class="speaker-role">Diseñadora de Interacción</p>
      </div>
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Darcy V.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Darcy Vergara Panire</h4>
        <p class="speaker-role">Head of UX en LATAM Airlines</p>
      </div>
    </div>
    <div
      class="speakersSection-body grid md:grid-cols-3 sm:grid-cols-2 md:gap-4 sm:gap-2"
    >
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Rachel S.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Rachel Ilan Simpson</h4>
        <p class="speaker-role">Líder de diseño en Google</p>
      </div>
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Mariel B.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Mariel Backman</h4>
        <p class="speaker-role">Diseñadora UX y de servicios</p>
      </div>
      <div class="speaker">
        <div class="speaker-img--wrapper">
          <img src="@/assets/images/Nur K.jpg" alt="" class="speaker-img" />
        </div>
        <h4 class="speaker-name">Nur Karadeniz</h4>
        <p class="speaker-role">
          Fundadora de System Design Practice y Business Mentor en Diseño
          Sustentable en la Universidad de Cambridge
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Textura3 from "@/components/atoms/Textura3.vue";
import Textura6 from "@/components/atoms/Textura6.vue";
export default {
  components: {
    Textura3,
    Textura6
  }
};
</script>
