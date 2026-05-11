<script setup lang="tsx">
  const PALETTES = [
    {
      title: "91",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "1500+",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "130",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "24/7",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
</script>

<template>
  <div
    class="/items-center relative flex h-max w-svw justify-center overflow-visible"
  >
    <div
      class="z-10 flex h-max w-full -translate-y-12 justify-end overflow-visible"
    >
      <img
        src="/back3.png"
        class="/w-[30svw] /h-[120%] rotate h-[150svh] w-auto origin-bottom-right overflow-visible"
      />
    </div>

    <div
      class="parentelm absolute flex w-full max-w-400 flex-col items-center justify-center pt-40 pl-15 text-black"
    >
      <div class="flex w-full">
        <div class="flex w-2/3 flex-col gap-20">
          <div class="title font-[Inter] text-[85px] leading-[97%]">
            Building Fast With Quality And speed
          </div>

          <div class="flex w-full flex-wrap gap-8">
            <div
              v-for="palette in PALETTES"
              :key="palette.title"
              class="flex max-w-94 flex-col gap-5 pt-12"
            >
              <div class="title font-[Switzer] text-[85px] font-semibold">
                {{ palette.title }}
              </div>
              <div class="content font-[Inter] text-[23px] leading-[105.2%]">
                {{ palette.desc }}
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/3"></div>
      </div>
    </div>
  </div>
</template>
