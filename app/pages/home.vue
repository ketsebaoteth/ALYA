<script setup lang="tsx">
  useHead({
    title: "Home",
  });
</script>

<template>
  <div
    class="flex h-max w-full flex-col items-center justify-center overflow-x-clip"
  >
    <HomeHero />
    <div class="/bg-black/5 /p-140 aspect-8/7 h-auto w-full"></div>
    <div
      class="z-5 flex h-max w-full flex-col items-center justify-center bg-white"
    >
      <HomeQuality />
      <HomeDetail />
      <HomeReviews />
      <HomeOffer />
      <HomePreFooter />
      <HomeFooter />
    </div>
  </div>
</template>
