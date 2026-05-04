<script setup lang="tsx">
useHead({
  title: "Home",
});
</script>

<template>
  <!-- INFO: No interactivity no animations no nothing just statics -->
  <div
    class="flex h-max max-h-max min-h-full w-full flex-col items-center justify-center overflow-x-clip"
  >
    <HomeBackgroundTheme />
    <HomeLandingPageComponent />
    <HomeSectionTwo />
    <HomeSectionThree />
    <HomeFooter />
  </div>
</template>

<style></style>
