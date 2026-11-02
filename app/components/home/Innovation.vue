<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const technologies = [
    {
      name: "Heavy Transport Fleet",
      desc: "Expansive logistics handled natively by 16m³ UD and 16.5m³ SINO dump trucks.",
    },
    {
      name: "High-Altitude Access",
      desc: "Precision lifting systems supported by extensive 42-meter boom lifts.",
    },
    {
      name: "Concrete Production Machineries",
      desc: "Automated site mixing and massive capacity HCB production outputting 2000 blocks daily.",
    },
    {
      name: "Comprehensive Formwork",
      desc: "Over 5000m² of rigid professional scaffolding integrated seamlessly with safety protocols.",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".innov-card",
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".innov-section", start: "top 70%" },
      }
    );
  });
</script>
<template>
  <div
    class="innov-section flex w-full flex-col items-center justify-center bg-gray-950 px-5 py-20"
  >
    <div class="flex w-full max-w-7xl flex-col gap-15 lg:flex-row">
      <div
        class="relative min-h-125 w-full overflow-hidden rounded-3xl border border-white/5 shadow-2xl lg:w-1/2"
      >
        <img
          src="/pal41.jpg"
          class="absolute inset-0 size-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>
      <div class="flex w-full flex-col justify-center gap-10 lg:w-1/2">
        <div class="flex flex-col gap-4">
          <div
            class="text-brand-500 /font-[Switzer] text-lg font-bold uppercase"
          >
            Innovation At Core
          </div>
          <div class="/font-[Haas] text-4xl font-bold lg:text-[70px]">
            Engineering the Future
          </div>
          <div class="/font-[Switzer] mt-4 max-w-lg text-xl text-gray-400">
            We push the boundaries of modern construction using proprietary
            technology and state-of-the-art management systems.
          </div>
        </div>
        <div class="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div
            v-for="(tech, i) in technologies"
            :key="i"
            class="innov-card hover:border-brand-500/50 flex flex-col gap-3 rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg transition-colors"
          >
            <div class="/font-[Haas] text-xl font-bold text-white">
              {{ tech.name }}
            </div>
            <div class="/font-[Switzer] text-sm text-gray-400">
              {{ tech.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
