<template>
  <div class="card-feature" :class="type">
    <div class="feature-icon--wrapper">
      <img
        class="feature-icon"
        :src="require(`@/assets/images/${iconSrc}.svg`)"
        alt=""
      />
    </div>
    <h2 class="feature-title">
      {{ title }}
    </h2>
    <p class="feature-subtitle">{{ subtitle }}</p>
    <p class="feature-description">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    iconSrc: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    description: {
      type: String
    },
    type: {
      String
    }
  }
};
</script>
<style scoped></style>
