<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const certs = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "LEED Platinum Provider",
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".cert-item",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".safety-section",
          start: "top 80%",
        },
      }
    );
  });
</script>

<template>
  <div
    class="safety-section flex w-full flex-col items-center justify-center border-t border-b border-white/5 bg-gray-950 px-4 py-25 text-white"
  >
    <div
      class="flex w-full max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row"
    >
      <div class="flex max-w-2xl flex-col gap-4 text-center lg:text-left">
        <div class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase">
          Safety & Standards
        </div>
        <div class="/font-[Haas] text-3xl font-bold md:text-5xl">
          Uncompromising on Safety & Industry Standards
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 lg:flex-nowrap">
        <div
          v-for="(cert, i) in certs"
          :key="i"
          class="cert-item /font-[Switzer] hover:border-brand-500/50 flex cursor-default items-center justify-center rounded-xl border border-gray-800 bg-gray-900 px-6 py-4 text-center font-medium text-gray-300 transition-colors hover:text-white"
        >
          {{ cert }}
        </div>
      </div>
    </div>
  </div>
</template>
