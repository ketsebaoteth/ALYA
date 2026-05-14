<template>
  <button
    class="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold uppercase tracking-tight text-black transition-colors duration-300 hover:bg-zinc-100"
    @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <!-- The Mask Container: This handles the tight cropping -->
    <div class="relative overflow-hidden flex items-center h-[1.2em]">

      <!-- Top Layer -->
      <div ref="topLayer" class="flex">
        <span v-for="(char, i) in text" :key="`top-${i}`" class="inline-block"
          v-html="char === ' ' ? '&nbsp;' : char" />
      </div>

      <!-- Bottom Layer -->
      <div ref="bottomLayer" class="absolute inset-0 flex">
        <span v-for="(char, i) in text" :key="`bottom-${i}`" class="inline-block"
          v-html="char === ' ' ? '&nbsp;' : char" />
      </div>

    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: { type: String, default: 'Get Started' }
});

const topLayer = ref(null);
const bottomLayer = ref(null);

let tl;

onMounted(() => {
  const topChars = topLayer.value.children;
  const bottomChars = bottomLayer.value.children;

  // Set bottom chars exactly 100% down relative to the text mask
  gsap.set(bottomChars, { yPercent: 100 });

  tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.4, ease: 'power3.inOut' }
  });

  tl.to(topChars, {
    yPercent: -100,
    stagger: 0.015
  })
    .to(bottomChars, {
      yPercent: 0,
      stagger: 0.015
    }, 0);
});

const onMouseEnter = () => tl.play();
const onMouseLeave = () => tl.reverse();
</script>

<style scoped>
button {
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Forces the mask to be exactly the height of the text line */
.h-\[1\.2em\] {
  line-height: 1;
}
</style>
