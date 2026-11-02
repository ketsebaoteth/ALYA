<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { PROJECTS } from "@/components/../../shared/utils/constants";

  const route = useRoute();
  const projectId = route.params.id as string;
  const project = PROJECTS.find((p) => p.id === projectId);
  const projectName = project
    ? project.name
    : projectId
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
  const projectImage = project
    ? project.img
    : "https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png";

  useHead({ title: projectName + " | Project Details" });
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      :title="projectName"
      subtitle="A deep dive into our structural masterpiece and engineering process."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg"
    />

    <div class="flex w-full max-w-7xl flex-col items-center gap-20 px-5 py-30">
      <div class="flex flex-col gap-15 lg:flex-row">
        <div class="flex w-full flex-col gap-8 lg:w-2/3">
          <div class="/font-[Haas] text-[clamp(35px,4vw,50px)] font-bold">
            Project Overview
          </div>
          <div class="/font-[Switzer] text-lg text-gray-400">
            The {{ projectName }} represents the pinnacle of modern construction
            methodology. Blending sustainable practices with extreme structural
            integrity, this project was successfully delivered on time and
            within our client's stringent budget.
            <br />
            <br />
            Our company utilized advanced digital spatial analysis to predict
            layout constraints, saving weeks of rework on site. High-grade
            industrial composites were sourced globally, ensuring a finish that
            meets the highest enterprise standards.
          </div>
        </div>

        <div
          class="flex w-full flex-col gap-6 rounded-3xl border border-gray-800 bg-gray-900 p-8 lg:w-1/3"
        >
          <div
            class="/font-[Haas] border-b border-gray-800 pb-4 text-xl font-bold"
          >
            Key Metrics
          </div>
          <div class="flex flex-col gap-4">
            <div class="flex justify-between">
              <span class="/font-[Switzer] text-gray-400">Sector</span>
              <span class="font-bold">
                {{ project ? project.category : "Commercial" }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="/font-[Switzer] text-gray-400">Location</span>
              <span class="font-bold">
                {{ project ? project.location : "Addis Ababa" }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="/font-[Switzer] text-gray-400">Status</span>
              <span class="font-bold">
                {{ project ? project.status : "Completed" }}
              </span>
            </div>
            <div class="flex justify-between">
              <span class="/font-[Switzer] text-gray-400">Client</span>
              <span class="font-bold">
                {{ project ? project.client : "Confidential" }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="relative h-max overflow-hidden rounded-3xl border border-white/5 shadow-2xl"
      >
        <NuxtImg
          :src="projectImage"
          :placeholder="1"
          class="/h-full h-[52svh] w-auto object-cover transition-all duration-1000"
        />
      </div>
    </div>

    <HomeFooter />
  </div>
</template>
