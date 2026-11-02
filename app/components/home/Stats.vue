<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const stats = [
    { value: 12, suffix: "+", label: "Years of Excellence" },
    { value: 14, suffix: "+", label: "Projects Delivered" },
    { value: 100, suffix: "%", label: "Commitment to Safety" },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".stat-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 75%",
        },
      }
    );
  });
</script>

<template>
  <div
    class="stats-container relative flex w-full flex-col items-center justify-center gap-15 overflow-hidden bg-gray-950 py-50 text-white"
  >
    <!-- Decorative background element -->
    <div
      class="bg-brand-600/10 pointer-events-none absolute -top-20 -right-20 size-96 rounded-full blur-3xl"
    ></div>

    <div class="/font-[Haas] px-5 text-center text-4xl font-bold lg:text-7xl">
      The Foundation of Trust
    </div>

    <div
      class="flex w-full max-w-7xl flex-col justify-center gap-15 px-5 lg:flex-row lg:gap-30"
    >
      <div
        v-for="(stat, i) in stats"
        :key="i"
        class="stat-card flex flex-col items-center gap-3"
      >
        <div class="text-brand-500 text-6xl font-black lg:text-[100px]">
          <AnimatedCounter :target="stat.value" :suffix="stat.suffix" />
        </div>
        <div
          class="/font-[Switzer] mt-2 max-w-xs text-center text-xl text-gray-400 uppercase"
        >
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>
