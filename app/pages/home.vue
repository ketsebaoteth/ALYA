<script setup lang="tsx">
  useHead({
    title: "Home",
  });
</script>

<template>
  <div
    class="flex min-h-max w-full flex-col items-center justify-center gap-20 overflow-x-clip"
  >
    <VeilBackground />
    <HomeHero />
    <HomeVision />
    <HomeOffer class="mt-50" />
  </div>
</template>
