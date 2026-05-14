<script setup lang="ts">
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  size: { type: Number, default: 20 },
  color: { type: String, default: "#ffffff" },
  zIndex: { type: Number, default: 9999 }
});

// Refs for the two distinct elements
const dotRef = ref<HTMLElement | null>(null);
const ringRef = ref<HTMLElement | null>(null);

// Storage for GSAP setters
let dotX: any, dotY: any;
let ringX: any, ringY: any;

const handleMove = (e: MouseEvent) => {
  if (dotX && dotY && ringX && ringY) {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  }
};

onMounted(() => {
  // Dot: Fast and snappy
  dotX = gsap.quickTo(dotRef.value, "x", { duration: 0.1, ease: "power3" });
  dotY = gsap.quickTo(dotRef.value, "y", { duration: 0.1, ease: "power3" });

  // Ring: Slower with more lag
  ringX = gsap.quickTo(ringRef.value, "x", { duration: 0.4, ease: "power2.out" });
  ringY = gsap.quickTo(ringRef.value, "y", { duration: 0.4, ease: "power2.out" });

  window.addEventListener("mousemove", handleMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMove);
});
</script>

<template>
  <div class="cursor-wrapper" :style="{ zIndex: zIndex }">
    <!-- The Outer Ring - Now only 30% larger than base size -->
    <div ref="ringRef" class="cursor-element ring" :style="{
      width: `${size * 1.3}px`,
      height: `${size * 1.3}px`,
      borderColor: color,
      /* Offset: -(Size * 1.3 / 2) to keep it centered */
      marginLeft: `-${(size * 1.3) / 2}px`,
      marginTop: `-${(size * 1.3) / 2}px`,
    }" />

    <!-- The Inner Small Circle -->
    <div ref="dotRef" class="cursor-element dot" :style="{
      width: `${size / 2}px`,
      height: `${size / 2}px`,
      backgroundColor: color,
      marginLeft: `-${size / 4}px`,
      marginTop: `-${size / 4}px`,
    }" />
  </div>
</template>

<style scoped>
.cursor-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
}

.cursor-element {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  will-change: transform;
}

.ring {
  border: 1.5px solid;
  transition: opacity 0.3s ease;
}

.dot {
  /* No border, solid fill */
}
</style>
