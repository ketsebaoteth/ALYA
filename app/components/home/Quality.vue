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
        start: "center top",
        end: "+=500",
        scrub: 1,
        anticipatePin: 1,
      },
    });
  });
</script>

<template>
  <div class="flex flex-col font-[Haas55] w-full h-full bg-white">
    <div class="relative z-10 text-white h-[60svh] flex items-center justify-center">
      <div class="focus font-[Haas75] gap-[38px] text-8xl font-bold flex flex-col items-center justify-center">
        <div class="max-w-335 font-thin text-center">OUR COMMITMENT TO QUALITY, SAFETY,</div>
        <div class="font-thin font-[Haas55] max-w-[760px] leading-[120%] text-center text-[32px]">At the heart of every project we take on is a dedication to delivering reliability. We build results that stand the test of time. From selecting top-grade materials to partnering with experienced subcontractors,</div>
      </div>

    </div>
    <div class="z-20 w-full flex items-center justify-center pt-35">
      <img
        src="/back1.png"
        class=" w-full"
      />

      <div class="absolute p-22 pb-30 px-36 w-full flex flex-col gap-10">
        <div class="text-[128px] font-[Haas55] font-normal leading-[97%] max-w-[1177px]">Building Fast With Quality And speed</div>
        <div class="font-[Switzer] text-[32px] font-normal leading-[105.2%] max-w-[731px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
      </div>
    </div>
  </div>
</template>
