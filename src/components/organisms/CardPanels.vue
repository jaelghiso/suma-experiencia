<template>
  <div class="panelist">
    <div class="panelist-img--wrapper">
      <img
        :src="require(`@/assets/images/${panelPhoto}`)"
        alt=""
        class="panelist-img"
      />
    </div>
    <h4 class="panelist-name">{{ panelSpeaker }}</h4>
    <p class="panelist-role">
      {{ panelRol }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    panelSpeaker: String,
    panelRol: String,
    panelPhoto: String
  }
};
</script>
