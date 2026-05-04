<script lang="ts"></script>

<template>
  <!-- INFO: These are just the background bubbles/blurs -->
  <div
    class="absolute top-0 -z-10 flex h-full w-full items-center justify-center overflow-x-clip"
  >
    <div
      class="nax-md:w-full absolute h-[200vh] w-1/2 -translate-x-30 rotate-z-40 rounded-full bg-[#FF8811]/50 blur-[700px]"
    />
    <div class="relative flex h-3/4 w-full flex-col items-end pb-10">
      <div
        class="translate-x-25 rounded-full bg-[#FF8811] p-30 py-35 blur-3xl"
      />
      <div class="h-60 rotate-z-20 rounded-full bg-[#FF8811] p-13 blur-3xl" />
      <div
        class="-translate-x-35 -translate-y-25 rounded-full bg-[#FF8811]/80 p-30 px-50 blur-3xl"
      />
    </div>

    <!-- INFO: The Grid image -->
    <!-- BUG: NuxtImg doesn't work with png images -->
    <img
      src="/grid.png"
      class="absolute -top-30 -right-40 z-10 h-full opacity-70 max-md:translate-x-50"
      loading="lazy"
    />
  </div>
</template>
