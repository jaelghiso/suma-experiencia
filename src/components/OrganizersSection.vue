<template>
  <div class="organizersSection">
    <h3 class="organizersSection-title">Organizan:</h3>
    <div>
      <img
        class="organizers-divider"
        src="@/assets/images/divider.svg"
        alt=""
      />
    </div>
    <div class="texture-downleft">
      <Textura5 />
    </div>
    <div class="flex organizers">
      <div class="organizers-orgs">
        <div class="organizers-logo--wrapper mx-auto">
          <img
            class="organizers-logo org-masm"
            src="@/assets/images/+mujeres-uruguay-sinFondo.png"
            alt=""
          />
        </div>
        <div class="organizers-logo--wrapper mx-auto">
          <img
            class="organizers-logo"
            src="@/assets/images/GUBA_logo.svg"
            alt=""
          />
        </div>
      </div>
      <div class="organizers-people">
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:gap-12 sm:gap-2">
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Julia.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Julia Castillo Aguerre</h4>
            <p class="organizer-role">
              Organización
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Rosina.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Rosina Nabazas</h4>
            <p class="organizer-role">
              Organización
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Leticia.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Leticia Barzilai</h4>
            <p class="organizer-role">
              Organización
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/pau bn.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Pau Delgado Iglesias</h4>
            <p class="organizer-role">
              Especialista en género
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Carolina.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Carolina Echavarría</h4>
            <p class="organizer-role">
              Organización y comunicación
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Mariana.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Mariana Valenzuela</h4>
            <p class="organizer-role">
              Organización
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Antonia.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Antonia Cerda</h4>
            <p class="organizer-role">
              Diseño gráfico
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Thanya.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Thayná Matos</h4>
            <p class="organizer-role">
              Traducción a portugués
            </p>
          </div>
          <div class="organizer">
            <div class="organizer-img--wrapper">
              <img
                src="@/assets/images/Jael.png"
                alt=""
                class="organizer-img"
              />
            </div>
            <h4 class="organizer-name">Jael Ghiso</h4>
            <p class="organizer-role">
              Desarrolladora de Interfaz
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Textura5 from "@/components/atoms/Textura5.vue";
export default {
  components: {
    Textura5
  }
};
</script>
<style scoped></style>
