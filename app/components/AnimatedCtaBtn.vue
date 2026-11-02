<template>
  <div
    :class="
      'group relative inline-flex items-center justify-center rounded-full px-8 py-4 font-bold uppercase transition-colors duration-300' +
      props.class
    "
    @click="props.callBack"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- The Mask Container: This handles the tight cropping -->
    <div
      class="/translate-y-0.5 relative flex h-[1.2em] items-center overflow-hidden"
    >
      <!-- Top Layer -->
      <div ref="topLayer" class="flex">
        <span v-for="(char, i) in text" :key="`top-${i}`" class="inline-block">
          {{ char === " " ? "&nbsp;" : char }}
        </span>
      </div>

      <!-- Bottom Layer -->
      <div ref="bottomLayer" class="absolute inset-0 flex">
        <span
          v-for="(char, i) in text"
          :key="`bottom-${i}`"
          class="inline-block"
        >
          {{ char === " " ? "&nbsp;" : char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { gsap } from "gsap";

  const props = defineProps({
    text: { type: String, default: "Get Started" },
    class: { type: String, default: "" },
    callBack: { type: Function, default: () => {} },
  });

  const topLayer = ref(null);
  const bottomLayer = ref(null);

  let tl;

  onMounted(() => {
    const topChars = topLayer.value.children;
    const bottomChars = bottomLayer.value.children;

    // Set bottom chars exactly 100% down relative to the text mask
    gsap.set(bottomChars, { yPercent: 110 });
    gsap.set(topChars, { yPercent: 8 });

    tl = gsap.timeline({
      paused: true,
      defaults: { duration: 0.4, ease: "power3.inOut" },
    });

    tl.to(topChars, {
      yPercent: -100,
      stagger: 0.015,
    }).to(
      bottomChars,
      {
        yPercent: 10,
        stagger: 0.015,
      },
      0
    );
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
