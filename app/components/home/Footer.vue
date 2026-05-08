<script setup lang="tsx"></script>

<template>
  <div
    class="relative flex z-0 lg:min-h-350 min-h-170 w-full max-h-max flex-col items-center justify-center gap-7 text-black"
  >
    <HomeBackgroundFooter />

    <div class="flex w-full flex-col -translate-y-32 items-center lg:gap-20 gap-4">
      <div class="lg:max-w-100 max-w-60 max-md-70 text-center font-[Switzer] leading-none font-bold max-xl:text-3xl xl:text-[76px]">Our Trusted Partners</div>
      <!-- <div class="w-full flex items-center justify-center overflow-scroll/"> -->
        <div class="anim flex w-max bg-black -translate-x-[3740px] items-center justify-center">
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
