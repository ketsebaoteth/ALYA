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
        start: "80% top",
        end: "+=500",
        scrub: 1,
        anticipatePin: 1,
      },
    });
  });
</script>

<template>
  <div class="flex h-full w-full flex-col 2xl:bg-white bg-[#22327B] font-[Haas55]">
    <div
      class="relative z-10 flex lg:h-[60svh] max-lg:aspect-square items-center justify-center text-white"
    >
      <div
        class="focus flex flex-col items-center justify-center gap-9.5 font-[Haas75] 2xl:text-8xl text-2xl font-bold"
      >
        <div class="2xl:max-w-[65%] max-w-[75%] text-center font-thin">
          OUR COMMITMENT TO QUALITY, SAFETY,
        </div>
        <div
          class="2xl:max-w-[45%] max-w-[75%] text-center font-[Haas55] 2xl:text-[32px] text-base leading-[120%] font-thin"
        >
          At the heart of every project we take on is a dedication to delivering
          reliability. We build results that stand the test of time. From
          selecting top-grade materials to partnering with experienced
          subcontractors,
        </div>
      </div>
    </div>
    <div class="z-20 flex w-full items-center justify-center 2xl:pt-50">
      <img src="/back1.png" class="w-full" />

      <div class="absolute flex w-full flex-col gap-10 2xl:p-22 xl:px-36 xl:pb-30">
        <div
          class="xl:max-w-294.25 px-5 font-[Haas55] xl:text-[128px] text-3xl leading-[97%] font-normal"

        >
          Building Fast With Quality And speed
        </div>
        <div
          class="xl:max-w-182.75 px-5 font-[Switzer] xl:text-[32px] text-base leading-[105.2%] font-normal"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>
    </div>
  </div>
</template>
