<template>
  <div class="workshopsSection">
    <div class="workshops-carousel scrollbar">
      <card-workshops
        v-for="workshop in workshops"
        :key="workshop.name"
        :workshopName="workshop.name"
        :workshopSpeaker="workshop.speaker"
        :workshopRol="workshop.speakerRol"
        :workshopPhoto="workshop.path"
        :workshopDate="workshop.date"
        :workshopHour="workshop.hoursUyu"
        :workshopUrl="workshop.url"
        :workshopHoursLatam="workshop.hoursLatam"
      >
      </card-workshops>
    </div>
    <div class="workshops-intro">
      <div class="workshops-img--wrapper">
        <img
          src="@/assets/images/Experimenta.svg"
          alt=""
          class="workshops-image"
        />
      </div>
      <p class="workshops-title">Talleres</p>
    </div>
  </div>
</template>
<script>
import jsonWorkshops from "@/store/workshops-info.json";
import CardWorkshops from "@/components/organisms/CardWorkshops.vue";
export default {
  components: {
    CardWorkshops
  },
  data() {
    return {
      workshops: jsonWorkshops.workshops
    };
  }
};
</script>
