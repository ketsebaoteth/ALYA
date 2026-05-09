<script setup lang="tsx"></script>

<template>
  <div
    class="relative z-0 bg-white flex max-h-max min-h-170 w-full flex-col items-center justify-center gap-7 text-black lg:min-h-350"
  >
    <div
      class="flex w-full -translate-y-32 flex-col items-center gap-4 lg:gap-20"
    >
      <div
        class="max-md-70 max-w-60 text-center font-[Switzer] leading-none font-bold max-xl:text-3xl lg:max-w-100 xl:text-[76px]"
      >
        Our Trusted Partners
      </div>
      <!-- <div class="w-full flex items-center justify-center overflow-scroll/"> -->
      <div
        class="anim flex w-max -translate-x-[3740px] items-center justify-center bg-black"
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
    animation: scroll 10s linear infinite;
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
