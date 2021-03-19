<template>
  <div class="panelsSection" id="panels">
    <div class="panels-intro">
      <div class="panels-img--wrapper">
        <img src="@/assets/images/Cuestiona.svg" alt="" class="panels-img" />
      </div>
      <p class="panels-title">Paneles</p>
      <a
        href="https://www.eventbrite.cl/e/suma-experiencia-conferencia-ux-tickets-141752121411"
        target="_blank"
        class="talks-button"
      >
        Regístrate ahora
      </a>
    </div>
    <div class="panels-info">
      <p class="panels-description">
        Una conversación entre profesionales de la disciplina, líderes y
        especialistas, para reflexionar sobre las perspectivas y desafíos en UX,
        desde un enfoque feminista.
      </p>
      <div class="panels-date">
        <span class="panels-day"
          ><i class="far fa-calendar-alt fa-lg mr-2 panels-icon"></i> 20 de
          Marzo</span
        >
        <span class="panels-hour"
          ><i class="far fa-clock fa-lg mr-2 networking-icon"></i> 14:15 hrs
          GMT-3</span
        >
      </div>
      <div class="panels-people">
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-4 sm:gap-4 mt-8">
          <card-panels
            v-for="panel in panels"
            :key="panel.id"
            :panelSpeaker="panel.speaker"
            :panelRol="panel.speakerRol"
            :panelPhoto="panel.path"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import jsonPanels from "@/store/panels-info.json";
import CardPanels from "@/components/organisms/CardPanels.vue";
export default {
  components: {
    CardPanels
  },
  data() {
    return {
      panels: jsonPanels.panels
    };
  }
};
</script>
<style scoped></style>
