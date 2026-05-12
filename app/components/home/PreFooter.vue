<script setup lang="tsx">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/SplitText";

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    const spl = new SplitText(".antext", { type: "lines" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".antext",
        start: "top 70%",
      },
    });

    tl.fromTo(
      spl.lines,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
      },
      "<"
    );
  });
</script>

<template>
  <div
    class="/max-h-max /min-h-100 /lg:min-h-350 relative z-0 flex w-full flex-col items-center justify-center gap-7 bg-white pt-90 pb-20 text-black max-2xl:aspect-video"
  >
    <div
      class="flex w-full -translate-y-32 flex-col items-center gap-4 lg:gap-20"
    >
      <div
        class="absolute -bottom-20 left-0 z-30 h-full w-1/9 bg-linear-to-l from-white/0 via-white to-white"
      ></div>
      <div
        class="absolute right-0 -bottom-20 z-30 h-full w-1/9 bg-linear-to-r from-white/0 via-white to-white"
      ></div>
      <div
        class="antext max-w-70 text-center font-[Switzer] text-[clamp(30px,5vw,76px)] leading-none font-bold lg:max-w-100"
      >
        Our Trusted Partners
      </div>
      <!-- <div class="w-full flex items-center justify-center overflow-scroll/"> -->
      <div
        class="anim flex w-max -translate-x-935 items-center justify-center overflow-hidden bg-black max-lg:h-10"
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
