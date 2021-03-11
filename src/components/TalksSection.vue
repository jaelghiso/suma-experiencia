<template>
  <div class="talksSection">
    <div class="talks-intro">
      <div class="talks-img--wrapper">
        <img src="@/assets/images/Muevete.svg" alt="" class="talks-img" />
      </div>
      <p class="talks-title">Charlas</p>
      <a
        href="https://www.eventbrite.cl/e/suma-experiencia-conferencia-ux-tickets-141752121411"
        target="_blank"
        class="talks-button"
      >
        Registrate ahora
      </a>
    </div>
    <div class="talks-carousel scrollbar">
      <card-talks
        v-for="talk in talks"
        :key="talk.name"
        :talkName="talk.name"
        :talkSpeaker="talk.speaker"
        :talkRol="talk.speakerRol"
        :talkPhoto="talk.path"
        :talkDate="talk.date"
        :talkHour="talk.hoursUyu"
      ></card-talks>
    </div>
  </div>
</template>
<script>
import jsonTalks from "@/store/talks-info.json";
import CardTalks from "@/components/organisms/CardTalks.vue";

export default {
  components: {
    CardTalks
  },
  data() {
    return {
      talks: jsonTalks.talks
    };
  }
};
</script>
