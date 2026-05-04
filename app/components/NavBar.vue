<script setup lang="tsx">
const route = useRoute();

const NAV_ROUTES = [
  { name: "Home", path: "/home" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];
</script>

<template>
  <div class="absolute top-0 flex w-full items-center justify-center">
    <div class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-8">
      <div class="flex items-center gap-2 md:gap-3">

        <div class="flex flex-col justify-center text-xs/tight md:text-base/tight font-extrabold">
          <div>Alya</div>
          <div>Construction</div>
        </div>
      </div>

      <div class="relative flex items-center justify-center gap-0 p-0 text-gray-900">
        <NuxtLink v-for="r in NAV_ROUTES" :key="r.name" :to="r.path"
          :class="{ 'text-black': route.path.includes(r.path) }"
          class="md:px-7 py-2.5 px-2 md:text-sm text-xs z-30 transition-all hover:text-black">
          {{ r.name }}
        </NuxtLink>
      </div>

      <ActionBtn>
        Book A Call
      </ActionBtn>
    </div>
  </div>
</template>
