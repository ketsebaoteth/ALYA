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

// #f4f0ea nice white
</script>


<template>
  <div class="relative flex h-fit w-svw overflow-visible bg-[#f4f0ea]">
    <div class="z-10 absolute flex h-max w-full -translate-y-12 justify-end overflow-visible">
      <img src="/back3.png"
        class="/w-[30svw] /h-[120%] rotate h-[150svh] w-auto origin-bottom-right overflow-visible" />
    </div>

    <div class="parentelm  flex h-fit w-full flex-col px-10 justify-center pt-80 pb-120 text-black">
      <div class="z-10 flex w-max max-w-[66%] flex-col gap-20">
        <div class="flex flex-col font-[Inter] text-[clamp(30px,5vw,85px)] leading-[97%]">
          <div class="title text-nowrap">Building Fast With</div>
          <div class="title text-nowrap">Quality And speed</div>
        </div>

        <div class="flex w-full flex-col gap-5 h-fit">
          <div class="flex w-full gap-5 h-fit">
            <div v-for="palette in PALETTES.slice(0, 2)" :key="palette.title"
              class="flex bg-white rounded-3xl p-8 max-w-[60%] flex-col gap-5 pt-12">
              <div class="title font-[Switzer] text-[clamp(30px,5vw,85px)] font-semibold">
                {{ palette.title }}
              </div>
              <div class="content font-[Inter] text-[clamp(13px,2vw,22px)] leading-[105.2%]">
                {{ palette.desc }}
              </div>
            </div>
          </div>
          <div class="flex w-full gap-5 h-fit">
            <div v-for="palette in PALETTES.slice(2)" :key="palette.title"
              class="flex max-w-[60%] bg-white rounded-3xl p-8 flex-col gap-5 pt-12">
              <div class="title font-[Switzer] text-[clamp(30px,5vw,85px)] font-semibold">
                {{ palette.title }}
              </div>
              <div class="content font-[Inter] text-[clamp(13px,2vw,22px)] leading-[105.2%]">
                {{ palette.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
