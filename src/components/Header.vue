<template>
  <div class="header">
    <div class="header-brand">
      <router-link to="/">
        <img
          src="@/assets/images/suma-exp_logo.svg"
          alt=""
          class="header-brand--logo"
        />
      </router-link>
    </div>
    <div class="mainNav ml-auto">
      <Burger v-show="isMobile()" class="px-3"></Burger>
      <ul v-show="!isMobile()">
        <li class="inline-block mr-3">
          <router-link to="/" class="mainNav-link active"
            >Conferencia
          </router-link>
        </li>
        <li class="inline-block mr-3">
          <router-link to="/code-of-conduct" class="mainNav-link"
            >Código de conducta
          </router-link>
        </li>
        <li class="inline-block mr-3">
          <a href="#footer" class="mainNav-link">Contacto </a>
        </li>
        <li class="inline-block mr-3">
          <a
            href="https://www.eventbrite.cl/e/suma-experiencia-conferencia-ux-tickets-141752121411"
            target="_blank"
            class="mainNav-link register-button"
            >Registrate
          </a>
        </li>
      </ul>
    </div>

    <Sidebar v-show="isMobile()">
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#talks">Charlas</a>
        </li>
        <li>
          <a href="#workshops">Talleres</a>
        </li>
        <li>
          <a href="#panels">Paneles</a>
        </li>
        <li>
          <a href="#networking">Networking</a>
        </li>
        <li>
          <router-link to="/code-of-conduct">Código de conducta </router-link>
        </li>
        <li>
          <a href="#footer">Contacto </a>
        </li>
        <li>
          <a
            href="https://www.eventbrite.cl/e/suma-experiencia-conferencia-ux-tickets-141752121411"
            target="_blank"
            >Registrate
          </a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>
<script>
import { throttle } from "lodash";
import Burger from "./atoms/Burger";
import Sidebar from "./atoms/Sidebar";

export default {
  components: {
    Burger,
    Sidebar
  },
  mounted() {
    let el = this.$el;
    let originalOffsetY = 740;

    window.addEventListener(
      "scroll",
      throttle(function() {
        el.classList[window.scrollY >= originalOffsetY ? "add" : "remove"](
          "fixed",
          "w-full",
          "top-0",
          "z-10",
          "transition",
          "opacity-80",
          "duration-300",
          "ease-out",
          "delay-150"
        );
      }, 250)
    );
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.header.sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
