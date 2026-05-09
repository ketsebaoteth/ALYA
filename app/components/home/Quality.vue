<script setup lang="tsx">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
onMounted(async () => {
  await nextTick();

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  let sptext = new SplitText(".focus", { type: "words,chars" });
  gsap.to(sptext.words, {
    fontWeight: 900,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".parent", // The wrapper that determines the scroll duration
      start: "top top",   // Pin starts when the top of .parent hits the top of viewport
      end: "+=8200",      // How long the "hijack" lasts (pixels scrolled)
      scrub: 1,           // Links animation progress to scrollbar
      pin: true,          // This is the "hijack" magic
      pinSpacing: true,
      anticipatePin: 1,   // Smooths out the transition to pinned state
    },
  });
});
</script>

<template>
  <div class="h-[40vh] parent z-10 flex max-h-350 min-h-80 w-full items-center justify-center xl:min-h-300 xl:px-30">
    <div
      class="focus w-6/7 max-w-200 text-nowrap text-center font-[Inter] font-thin text-4xl leading-[125%] md:max-w-400 xl:text-7xl 2xl:text-[110px]">
      our company provides safe
      <div class="text-center flex items-center justify-center">working conditions and provide</div>
      <div class="text-center flex items-center justify-center">quality work within reasonable</div>
      <div class="text-center flex items-center justify-center">timeframe</div>
    </div>
  </div>
</template>
