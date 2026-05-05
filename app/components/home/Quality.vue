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
        start: "25% center",
        end: "+=500",
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
      class="focus w-6/7 max-w-200 text-center font-[Inter] font-[100] text-4xl leading-[125%] md:max-w-400 xl:text-7xl 2xl:text-8xl"
    >
      our company provides safe working conditions and provide quality work
      within reasonable timeframe
    </div>
  </div>
</template>
