<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { target: 91, suffix: '', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { target: 130, suffix: '', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { target: 1500, suffix: '+', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { target: 24, suffix: '/7', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const counters = document.querySelectorAll(".counter-val");

    counters.forEach((counter) => {
      const targetValue = parseInt(counter.getAttribute('data-target') || '0');
      gsap.to(counter, {
        innerText: targetValue,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: ".specs-parent",
          start: "top 20%",
          toggleActions: "play none none none"
        }
      })
    })
  })


  onUnmounted(() => ctx.revert());

})
</script>

<template>
  <div
    class="text-black specs-parent relative w-screen h-screen lg:gap-80 sm:gap-20 p-32 flex flex-col overflow-hidden">
    <h1 class="lg:text-8xl lg:w-[60%] font-bold sm:text-7xl sm:w-[90%]">Building Fast With Quality And speed</h1>

    <div class="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-32 sm:gap-25 lg:w-[60%] sm:w-[90%] z-10">
      <div v-for="(stat, index) in stats" :key="index" class="flex gap-12 text-8xl font-bold flex-col">
        <p class="text-8xl">
          <span class="counter-val" :data-target="stat.target">0</span>{{ stat.suffix }}
        </p>
        <p class="text-2xl w-2.5/3 sm:w-[90%] font-medium">{{ stat.text }}</p>
      </div>
    </div>

    <!-- right side image -->
    <NuxtImg class="absolute right-0 mt-20 top-1/2 -translate-y-1/2 w-[40%]" src="/specs-right-pic.png" />
  </div>
</template>
