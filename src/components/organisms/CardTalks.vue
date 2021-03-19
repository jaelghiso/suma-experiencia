<template>
  <div class="talks-card">
    <div class="talks-photo">
      <img
        :src="require(`@/assets/images/${talkPhoto}.jpg`)"
        alt=""
        class="talks-img"
      />
      <img class="talks-texture" src="@/assets/images/Textura 4.svg" alt="" />
    </div>
    <div class="talks-card-body">
      <h4 class="talks-card--title">
        {{ talkName }}
      </h4>
      <p class="talks-card--speaker">{{ talkSpeaker }}</p>
      <small class="talks-card--rol">{{ talkRol }} </small>
      <div class="talks-date">
        <span class="talks-day"
          ><i class="far fa-calendar-alt fa-lg mr-2 talks-icon"></i
          >{{ talkDate }}
        </span>
        <span class="talks-hour"
          ><i class="far fa-clock fa-lg mr-2 talks-icon"></i
          >{{ talkHour }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    talkName: String,
    talkSpeaker: String,
    talkRol: String,
    talkPhoto: String,
    talkDate: String,
    talkHour: String
  }
};
</script>
