<script setup lang="tsx">
const route = useRoute();

const routes = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];
</script>

<template>
  <div class="absolute top-0 flex w-full items-center justify-center">
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-10"
    >
      <!-- INFO: The company name at left side -->
      <div class="flex items-center gap-2 md:gap-3">
        <div
          class="flex flex-col justify-center text-xs/tight font-bold md:text-base/tight"
        >
          <div>Alya</div>
          <div class="max-md:hidden">Construction</div>
          <div class="md:hidden">Co.</div>
        </div>
      </div>

      <!-- INFO: Routers (Links) -->
      <div class="relative flex items-center justify-center text-gray-900">
        <NuxtLink
          v-for="r in routes"
          :key="r.name"
          :to="r.path"
          :class="route.path.includes(r.path) ? 'text-black' : ''"
          class="z-30 px-2 py-2.5 text-xs transition-all hover:text-black md:px-7 md:text-sm"
        >
          {{ r.name }}
        </NuxtLink>
      </div>

      <!-- TODO: Button does nothing -->
      <BookACallButton />
    </div>
  </div>
</template>
