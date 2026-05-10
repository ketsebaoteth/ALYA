<script setup lang="tsx"></script>

<template>
  <div
    class="/max-h-max /min-h-100 /lg:min-h-350 max-2xl:aspect-video relative z-0 flex w-full flex-col items-center justify-center gap-7 bg-white pt-90 pb-20 text-black"
  >
    <div
      class="flex w-full -translate-y-32 flex-col items-center gap-4 lg:gap-20"
    >
      <div
        class="absolute -bottom-20 left-0 z-30 h-full w-2/9 bg-linear-to-l from-white/0 via-white to-white"
      ></div>
      <div
        class="absolute right-0 -bottom-20 z-30 h-full w-2/9 bg-linear-to-r from-white/0 via-white to-white"
      ></div>
      <div
        class="max-md-70 max-w-60 text-center font-[Switzer] leading-none font-bold max-xl:text-3xl lg:max-w-100 xl:text-[76px]"
      >
        Our Trusted Partners
      </div>
      <!-- <div class="w-full flex items-center justify-center overflow-scroll/"> -->
      <div
        class="anim flex w-max max-lg:h-10 overflow-hidden -translate-x-935 items-center justify-center bg-black"
      >
        <img src="/partners.png" class="" />
        <img src="/partners.png" class="" />
        <img src="/partners.png" class="" />
        <img src="/partners.png" class="" />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style>
  .anim {
    animation: scroll 50s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(1870px);
    }
    100% {
      transform: translateX(3740px);
    }
  }
</style>
