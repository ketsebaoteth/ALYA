<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMounted } from "vue";

  const projects = [
    {
      id: "dbadcbc7-da1c-4905-8d3c-7fa24779d937",
      name: "Residence Building (2+B+G+3)",
      category: "Residential",
      status: "Completed",
      client: "W/ro Senait G/Gziabher",
      value: "6,464,859.31",
      location: "Addis Ababa",
      img: "/work3.png",
    },
    {
      id: "fb1d7c81-0601-4070-9b3c-0806ac4109ad",
      name: "Residence Building (2+B+G+3)",
      category: "Residential",
      status: "Completed",
      client: "Art. Ephrem Tamiru",
      value: "10,776,989.85",
      location: "Addis Ababa",
      img: "/work5.png",
    },
    {
      id: "3fcd4652-3653-46a3-b772-68016abf256a",
      name: "Mixed-Use Building (B+G+6) Structural Work",
      category: "Commercial",
      status: "Completed",
      client: "Ato Girma Amare & W/ro Martha Negash",
      value: "8,008,878.53",
      location: "Addis Ababa",
      img: "/work7.png",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 70%",
        },
      }
    );
  });
</script>
<template>
  <div
    class="projects-section flex w-full flex-col items-center justify-center gap-15 bg-gray-950 px-5 py-30 text-white"
  >
    <div
      class="/flex-col /md: flex w-full max-w-7xl flex-row items-end justify-between gap-10"
    >
      <div class="/font-[Haas] text-4xl font-bold lg:text-[70px]">
        Featured
        <br />
        Project
      </div>
      <NuxtLink
        to="/projects"
        class="group text-brand-500 border-brand-500 hidden cursor-pointer items-center gap-3 overflow-hidden rounded-full border px-6 py-3 font-bold transition-colors hover:border-white hover:text-white"
      >
        <span class="/font-[Switzer] mt-1 text-[15px] uppercase">
          Explore Portfolio
        </span>
        <img
          src="/arrow.svg"
          class="w-4 transition-transform group-hover:translate-x-1"
          style="filter: invert(1)"
        />
      </NuxtLink>
    </div>

    <div
      class="mt-12 grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <NuxtLink
        v-for="(project, i) in projects"
        :key="i"
        :to="'/projects_/' + project.id"
        class="project-card group relative block h-125 w-full cursor-pointer overflow-hidden rounded-2xl border border-white/5"
      >
        <img
          :src="project.img"
          class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <div
          class="absolute bottom-0 left-0 flex w-full translate-y-4 flex-col gap-2 p-8 transition-transform duration-500 group-hover:translate-y-0"
        >
          <div class="flex w-full items-center justify-between">
            <div
              class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase"
            >
              {{ project.location }}
            </div>
            <div
              class="flex size-10 items-center justify-center overflow-hidden rounded-full border border-white/20 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100"
            >
              <img src="/arrow.svg" class="w-3 rotate-45 invert" />
            </div>
          </div>
          <div class="/font-[Haas55] -mt-1 pr-4 text-3xl font-bold text-white">
            {{ project.name }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
