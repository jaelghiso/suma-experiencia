<template>
  <div class="workshops-card">
    <div class="workshops-photo">
      <img
        class="workshops-texture"
        src="@/assets/images/Textura 6.svg"
        alt=""
      />
      <img
        :src="require(`@/assets/images/${workshopPhoto}`)"
        alt=""
        class="workshops-img"
      />
    </div>
    <div class="workshops-card-body">
      <h4 class="workshops-card--title">
        {{ workshopName }}
      </h4>
      <p class="workshops-card--speaker">{{ workshopSpeaker }}</p>
      <small class="workshops-card--rol">{{ workshopRol }} </small>
      <div class="workshops-date">
        <span class="workshops-day"
          ><i class="far fa-calendar-alt fa-lg mr-2 workshops-icon"></i
          >{{ workshopDate }}
        </span>
        <span class="workshops-hour"
          ><i class="far fa-clock fa-lg mr-2 workshops-icon"></i
          >{{ workshopHour }}</span
        >
        <small class="workshops-hour">{{ workshopHoursLatam }}</small>
        <a :href="workshopUrl" target="_blank" class="workshops-button hidden"
          >Regístrate</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    workshopName: String,
    workshopSpeaker: String,
    workshopRol: String,
    workshopPhoto: String,
    workshopDate: String,
    workshopHour: String,
    workshopHoursLatam: String,
    workshopUrl: String
  }
};
</script>
