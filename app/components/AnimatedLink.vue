<template>
  <NuxtLink :to="to"
    class="relative inline-block overflow-hidden whitespace-nowrap px-1 font-light uppercase tracking-tighter leading-3.75"
    @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <!-- Top Layer -->
    <div ref="topLayer" class="flex py-1">
      <span v-for="(char, i) in text" :key="`top-${i}`" class="inline-block" v-html="char === ' ' ? '&nbsp;' : char" />
    </div>

    <!-- Bottom Layer -->
    <div ref="bottomLayer" class="absolute inset-0 flex px-1 py-1">
      <span v-for="(char, i) in text" :key="`bottom-${i}`" class="inline-block"
        v-html="char === ' ' ? '&nbsp;' : char" />
    </div>
  </NuxtLink>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: { type: String, required: true },
  to: { type: String, default: '#' }
});

const topLayer = ref(null);
const bottomLayer = ref(null);

let tl;

onMounted(() => {
  const topChars = topLayer.value.children;
  const bottomChars = bottomLayer.value.children;

  // Set initial state of bottom characters immediately
  gsap.set(bottomChars, { yPercent: 115 });

  tl = gsap.timeline({
    paused: true,
    defaults: { duration: 0.2, ease: 'expo.inout' }
  });

  tl.to(topChars, {
    yPercent: -115,
    stagger: 0.02
  })
    .to(bottomChars, {
      yPercent: 0,
      stagger: 0.02
    }, 0);
});

const onMouseEnter = () => tl.play();
const onMouseLeave = () => tl.reverse();
</script>

<style scoped>
/* Ensure the container is strictly bound to the text height */
.relative {
  display: inline-flex;
  align-items: center;
}
</style>
