<script setup lang="ts">
  import { PROJECTS } from "@/components/../../shared/utils/constants";
  useHead({ title: "Our Projects" });

  const projects = PROJECTS;
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Our Work"
      subtitle="A showcase of structural excellence and architectural innovation."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-17-at-10.16.10-AM-2-1024x724.jpeg"
    />

    <div class="w-full max-w-7xl px-5 py-30">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="(project, i) in projects"
          :key="i"
          :to="'/projects_/' + project.id"
          class="group relative block h-125 w-full cursor-pointer overflow-hidden rounded-2xl"
        >
          <NuxtImg
            :src="project.img"
            :placeholder="1"
            class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/70 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"
          ></div>
          <div
            class="absolute bottom-0 left-0 flex w-full translate-y-12 flex-col gap-3 p-8 pb-10 transition-transform duration-500 group-hover:translate-y-0"
          >
            <div class="flex w-full items-center gap-0.5">
              <div
                class="text-brand-500 /font-[Switzer] text-xs font-bold uppercase"
              >
                {{ project.category }} &middot; {{ project.location }}
              </div>
              <div
                class="/font-[Switzer] px-2 py-1 text-[8px] text-nowrap uppercase italic opacity-90"
                :class="
                  project.status === 'Completed'
                    ? 'text-[#b0ffb090]'
                    : 'text-[#ffb0b0c5]'
                "
              >
                {{ project.status }}
              </div>
            </div>
            <div class="/font-[Haas55] pr-4 text-2xl font-bold text-white">
              {{ project.name }}
            </div>
            <div
              class="mt-1 flex flex-col gap-1 text-sm text-white/70 opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100"
            >
              <div class="flex items-start gap-2">
                <div class="min-w-17.5 text-white/40">Client:</div>
                <div class="font-medium text-white/90">
                  {{ project.client }}
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <HomeFooter />
  </div>
</template>
