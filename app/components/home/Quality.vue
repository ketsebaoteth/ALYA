<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    const sptext = new SplitText(".focus", { type: "words,chars" });

    gsap.to(sptext.chars, {
      fontWeight: 900,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "+=1200",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });
  });
</script>

<template>
  <div
    class="parent /min-h-80 /xl:min-h-300 z-10 flex h-screen max-h-350 w-full items-center justify-center xl:px-30"
  >
    <div
      class="focus flex w-[80%] max-w-200 flex-col items-center text-center font-[Inter] text-4xl leading-[125%] font-thin text-nowrap md:max-w-400 xl:text-7xl 2xl:text-[110px]"
    >
      <div class="items-center justify-center text-center">
        our company provides safe
      </div>
      <div class="items-center justify-center text-center">
        working conditions and provide
      </div>
      <div class="items-center justify-center text-center">
        quality work within reasonable
      </div>
      <div class="items-center justify-center text-center">timeframe</div>
    </div>
  </div>
</template>
