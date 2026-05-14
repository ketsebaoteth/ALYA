<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const isHome = computed(() => route.path === "/" || route.path.includes("home"));

onMounted(() => {

});

// Copy Feedback
let copyTl: any;
onMounted(() => {
  copyTl = gsap.timeline({ paused: true });
  copyTl.fromTo(".popup",
    { scale: 0.8, y: 10, opacity: 0 },
    { scale: 1, y: -55, opacity: 1, duration: 0.4, ease: "back.out(2)" }
  );
});

const handleCopy = async (num: string) => {
  await navigator.clipboard.writeText(num);
  copyTl.play(0);
  setTimeout(() => copyTl.reverse(), 1800);
};
</script>

<template>
  <!-- Removed bg/border from the outer container to "split" the pill -->
  <nav class="fixed top-0 left-0 z-1 w-full flex justify-between items-start p-5 lg:p-10 pointer-events-none">

    <!-- LEFT PILL (Logo + Links) -->
    <div
      class="nav-container pointer-events-auto flex items-center gap-8 rounded-full border border-white/15 bg-white/10 p-2 px-6 backdrop-blur-3xl shadow-2xl transition-all duration-300">
      <!-- LOGO -->
      <NuxtLink to="/home" class="flex items-center gap-2 group no-underline">
        <span
          class="font-[FontSpring] text-2xl font-bold tracking-tighter text-white transition-transform group-hover:scale-105">
          ALYA
        </span>
        <div v-if="isHome" class="ml-1 size-1.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]" />
      </NuxtLink>

      <!-- CENTER LINKS (Now part of the left pill) -->
      <div class="hidden md:flex items-center gap-10">
        <NavLinks />
      </div>
    </div>

    <!-- RIGHT PILL (Actions) -->
    <div
      class="nav-container pointer-events-auto flex items-center gap-4 rounded-full border border-white/15 bg-white/10 p-4 px-6 backdrop-blur-3xl shadow-2xl transition-all duration-300">

      <!-- EN Button - Increased visibility -->
      <button
        class="hidden lg:block text-sm font-black tracking-[0.2em] text-white/80 hover:text-white uppercase transition-colors border-r border-white/10 pr-6 mr-2">
        EN
      </button>

      <div class="relative flex items-center">
        <span @click="handleCopy('+251989954323')"
          class="cursor-pointer font-[Haas] text-sm font-bold text-white rounded-full transition-colors hover:text-blue-300">
          +251 98 995 4323
        </span>
        <div ref="popupRef"
          class="pointer-events-none absolute left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-black px-4 py-1.5 rounded-full opacity-0 shadow-xl">
          COPIED
        </div>
      </div>

      <div class="md:hidden">
        <TopSliderSheet />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  will-change: transform;
  /* Glassmorphism effect applied to both individual pills */
  box-shadow: inset 0 0.5px 0 rgba(255, 255, 255, 0.2), 0 20px 50px rgba(0, 0, 0, 0.2);
}

/* Maintain the mix-blend-mode for the text for that high-end feel */
.nav-container span,
.nav-container .cursor-pointer,
:deep(.animated-link) {
  mix-blend-mode: difference;
  color: #fff !important;
}

:deep(.animated-link) {
  font-family: 'Haas', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
}
</style>
