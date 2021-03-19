<template>
  <div class="networkingSection" id="networking">
    <div class="networking-info">
      <p class="networking-description">
        Porque la idea no es sólo recibir información sino involucrarnos para
        avanzar en conjunto, vamos a tener una instancia para conocer a otras
        personas y charlar sobre distintos temas:
      </p>
      <ul class="networking-topics">
        <li class="networking-topic">UX Research</li>
        <li class="networking-topic">UX Writing</li>
        <li class="networking-topic">Diseño con enfoque de género</li>
        <li class="networking-topic">Accesibilidad</li>
      </ul>
      <div class="networking-date">
        <span class="networking-day"
          ><i class="far fa-calendar-alt fa-lg mr-2 networking-icon"></i> 19 de
          Marzo</span
        >
        <span class="networking-hour"
          ><i class="far fa-clock fa-lg mr-2 networking-icon"></i> 19:25 hrs
          GMT-3</span
        >
      </div>
      <div class="networking-people">
        <div class="grid lg:grid-cols-5 sm:grid-cols-3 lg:gap-4 sm:gap-2 mt-8">
          <card-networking
            v-for="networking in networkings"
            :key="networking.id"
            :networkingSpeaker="networking.speaker"
            :networkingRol="networking.speakerRol"
            :networkingPhoto="networking.path"
          />
        </div>
      </div>
    </div>
    <div class="networking-intro">
      <div class="networking-img--wrapper">
        <img src="@/assets/images/Expresa.svg" alt="" class="networking-img" />
      </div>
      <p class="networking-title">Networking</p>
      <a
        href="https://www.eventbrite.cl/e/suma-experiencia-conferencia-ux-tickets-141752121411"
        target="_blank"
        class="talks-button"
      >
        Regístrate ahora
      </a>
    </div>
  </div>
</template>
<script>
import jsonNetworking from "@/store/networking-info.json";
import CardNetworking from "@/components/organisms/CardNetworking.vue";
export default {
  components: {
    CardNetworking
  },
  data() {
    return {
      networkings: jsonNetworking.networkings
    };
  }
};
</script>
<style scoped></style>
