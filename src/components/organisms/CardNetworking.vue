<template>
  <div class="networker">
    <div class="networker-img--wrapper">
      <img
        :src="require(`@/assets/images/${networkingPhoto}`)"
        alt=""
        class="networker-img"
      />
    </div>
    <h4 class="networker-name">{{ networkingSpeaker }}</h4>
    <p class="networker-role">
      {{ networkingRol }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    networkingSpeaker: String,
    networkingRol: String,
    networkingPhoto: String
  }
};
</script>
