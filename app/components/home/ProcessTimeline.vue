<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const steps = [
    {
      id: "01",
      title: "Project Scheduling",
      desc: "Detailed building scheduling paired with structured resource and manpower planning.",
    },
    {
      id: "02",
      title: "Quality Supervision",
      desc: "Persistent site supervision inextricably combined with absolute quality control frameworks.",
    },
    {
      id: "03",
      title: "Progress Coordination",
      desc: "Continuous execution monitoring and strict alignment with core client stakeholders.",
    },
    {
      id: "04",
      title: "Project Handover",
      desc: "Methodical execution leading directly to timely project delivery and rigorous handover.",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".process-step",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      ".process-line",
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        transformOrigin: "top",
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 60%",
        },
      }
    );
  });
</script>

<template>
  <div
    class="process-section flex w-full flex-col items-center justify-center bg-white px-5 py-30 text-black"
  >
    <div class="flex w-full max-w-7xl flex-col gap-20 lg:flex-row">
      <div class="flex w-full flex-col gap-6 lg:w-1/3">
        <div class="text-brand-600 /font-[Switzer] text-lg font-bold uppercase">
          How We Work
        </div>
        <div class="/font-[Haas] text-[clamp(40px,5vw,70px)] font-bold">
          Our Proven
          <br />
          Methodology
        </div>
        <div class="/font-[Switzer] mt-4 text-xl text-gray-600">
          A systematic, phased approach ensures that every project is delivered
          on time, within budget, and to our strict quality protocols.
        </div>
      </div>

      <div class="relative flex w-full flex-col gap-12 lg:w-2/3 lg:pl-10">
        <!-- Vertical guide line -->
        <div
          class="process-line absolute top-2 bottom-4 left-0 hidden w-1 bg-gray-200 md:block lg:left-10"
        ></div>
        <div
          class="process-line bg-brand-600 absolute top-2 bottom-4 left-0 hidden w-1 opacity-30 md:block lg:left-10"
        ></div>

        <div
          v-for="(step, i) in steps"
          :key="i"
          class="process-step relative flex flex-col gap-6 md:flex-row md:gap-14 lg:pl-16"
        >
          <div
            class="bg-brand-600 absolute top-1 -left-1.25 z-10 hidden size-3.5 rounded-full border-2 border-white md:block lg:left-8.75"
          ></div>

          <div
            class="/font-[Haas] shrink-0 text-3xl font-bold text-gray-300 md:w-20"
          >
            {{ step.id }}
          </div>
          <div class="flex flex-col gap-3">
            <div class="/font-[Haas75] text-2xl font-bold text-gray-950">
              {{ step.title }}
            </div>
            <div class="/font-[Switzer] text-lg text-gray-600">
              {{ step.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
