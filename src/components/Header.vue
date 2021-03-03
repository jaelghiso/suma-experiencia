<template>
    <div class="header" :class="{ sticky: reachScroll }">
        <div class="header-brand" v-if="!sticky">
            <img src="" alt="" class="header-brand--logo">
        </div>
        <div class="mainNav">
            <ul class="">
                <li class="inline-block mr-3">
                    <router-link to="/coming-soon"
                    target="_blank"
                    class="mainNav-link"
                    >Oradoras
                    </router-link>
                </li>
                <li class="inline-block mr-3">
                    <router-link to="/coming-soon"
                    target="_blank"
                    class="mainNav-link"
                    >Talleres
                    </router-link>
                </li>
                <li class="inline-block mr-3">
                    <router-link to="/coming-soon"
                    target="_blank"
                    class="mainNav-link"
                    >Registro
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { throttle } from "lodash";

export default {
    data() {
        return {
            reachScroll: false,
        }
    },
    mounted() {
        let el = this.$el;
        let originalOffsetY = 900;

        window.addEventListener(
            "scroll",
            throttle(function() {
                el.classList[
                    window.scrollY >= originalOffsetY ? "add" : "remove"
                ]("fixed", "w-full", "top-0", "z-10", "transition", "opacity-80", "duration-300", "ease-out", "delay-150");
            }, 250)
        );
    }
}
</script>
<style scoped>
    .header.sticky{
        position: sticky;
        position:-webkit-sticky;
        top: 0;
    }
</style>