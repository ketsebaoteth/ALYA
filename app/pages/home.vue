<script setup lang="tsx">
useHead({
  title: "Home",
});
</script>

<template>
  <!-- INFO: No interactivity no animations no nothing just statics -->
  <div
    class="flex min-h-max w-full flex-col items-center justify-center overflow-x-clip"
  >
    <HomeBackgroundTheme />
    <HomeLandingPageComponent />
    <HomeSectionTwo />
    <HomeSectionThree />
  </div>
</template>

<style></style>
