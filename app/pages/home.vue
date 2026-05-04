<script setup lang="tsx">
useHead({
  title: "Home",
});
</script>

<template>
  <div class="min-h-max w-full flex flex-col gap-20 items-center justify-center overflow-x-clip">
    <VeilBackground />
    <HomeHero />
    <HomeVision />
    <HomeOffer class="mt-50" />
  </div>
</template>
