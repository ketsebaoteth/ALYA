<script setup lang="tsx">
  const PALETTES = [
    {
      title: "24/7",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "100+",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "16+",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
</script>

<template>
  <div class="relative w-full min-h-300 pb-100 max-h-350 h-svh flex flex-col items-center justify-center">
    <HomeBackgroundDetail />

    <div class="w-full h-full flex gap-8.5 px-8 flex-col z-0 items-center justify-center">

      <div class="font-[Switzer] font-semibold px-8 text-center lg:text-7xl text-5xl max-w-230">
        Building Fast With Quality And speed
      </div>

      <div class="max-w-200 text-center md:text-[21px] text-base px-5 leading-[109%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>

      <div class="image relative /scale-100 absolute/ /fixed top-0/ /w-[3000px] /min-w-vw /h-vh /min-h-vh bg-gray-900 /left-30  rounded-[81px] /overflow-hidden flex items-center justify-center 2xl:max-w-1/3">
        <img src="/construction.png" class="w-screen/ image/ absolute/ /top-1/2 /left-1/2 h-screen/" />
      </div>

      <div class="flex max-w-300 items-center px-3 font-[Switzer] justify-between gap-13 pt-5">
        <div
          v-for="palette in PALETTES"
          class="flex flex-col text-center items-center gap-9"
        >
          <div class="lg:text-7xl text-5xl font-semibold">{{ palette.title }}</div>
          <div class="md:text-[21px] text-lg leading-[105%]">{{ palette.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
