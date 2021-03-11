<template>
  <div class="mainFeatures-section">
    <main-feature
      route="/talks"
      iconSrc="talks-icon"
      title="Charlas"
      subtitle="mUévete"
      description=" Charlas de expositoras de gran referencia,
            que serán transmitidas por streaming a todo el mundo, con interpretación simultánea (inglés
            - español - portugués)."
      type="talks"
    />
    <main-feature
      route="/workshops"
      iconSrc="workshops-icon"
      title="Talleres"
      subtitle="eXperimenta"
      description=" 5 días de talleres en toda la región, con capacidad limitada y costos accesibles."
      type="workshops"
    />
    <main-feature
      route="/panels"
      iconSrc="panels-icon"
      title="Paneles"
      subtitle="cUestiona"
      description=" Mesas de discusión con profesionales de la disciplina, líderes de +Mujeres en UX y especialistas en género."
      type="panels"
    />
    <main-feature
      route="/networking"
      iconSrc="networking-icon"
      title="Networking"
      subtitle="eXplora"
      description=" Conversa y conéctate con profesionales del sector y genera vínculos con la comunidad."
      type="networking"
    />
  </div>
</template>
<script>
import MainFeature from "@/components/MainFeature";
export default {
  components: {
    MainFeature
  }
};
</script>
<style></style>
