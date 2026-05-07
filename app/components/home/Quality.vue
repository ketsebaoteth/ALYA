<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".focus", {
      fontWeight: 900,
      scrollTrigger: {
        trigger: ".parent",
        start: "20% 65%",
        end: "+=700",
        scrub: 1,
      },
    });
  });
</script>

<template>
  <div
    class="h-[40vh] z-10 flex max-h-350 min-h-80 w-full items-center justify-center xl:min-h-300 xl:px-30"
  >
    <div
      class="focus w-6/7 max-w-200 text-nowrap text-center font-[Inter] font-thin text-4xl leading-[125%] md:max-w-400 xl:text-7xl 2xl:text-[110px]"
    >
      our company provides safe
      <div class="text-center flex items-center justify-center">working conditions and provide</div>
      <div class="text-center flex items-center justify-center">quality work within reasonable</div>
      <div class="text-center flex items-center justify-center">timeframe</div>
    </div>
  </div>
</template>
