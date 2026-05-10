<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    // const sptext = new SplitText(".focus", { type: "words,chars" });
    const splitedText1 = new SplitText(".sptext", { type: "lines" });

    const charssplit = new SplitText(".cptext", { type: "words,chars" });
    // gsap.set(".focus", { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus",
        start: "top 70%",
      },
    });
    tl.fromTo(
      charssplit.words,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "back.out" }
    )
      .fromTo(
        charssplit.chars,
        { filter: "blur(20px)" },
        {
          filter: "blur(0px)",
          duration: 0.1,
          stagger: 0.01,
          ease: "power2.inOut",
        },
        "<"
      )
      .fromTo(
        splitedText1.lines,
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

    const spl = new SplitText(".sptext2", { type: "lines" });

    const cha = new SplitText(".cptext2", { type: "words,chars" });
    // gsap.set(".focus", { opacity: 1 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus2",
        start: "top center",
      },
    });
    tl2
      .fromTo(
        cha.words,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "back.out" }
      )
      .fromTo(
        cha.chars,
        { filter: "blur(20px)" },
        {
          filter: "blur(0px)",
          duration: 0.1,
          stagger: 0.01,
          ease: "power2.inOut",
        },
        "<"
      )
      .fromTo(
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
    class="flex h-full w-full flex-col bg-[#22327B] font-[Haas55] 2xl:bg-white"
  >
    <div
      class="relative z-10 flex items-center justify-center text-white max-lg:aspect-square lg:h-[60svh]"
    >
      <div
        class="focus flex flex-col items-center justify-center gap-9.5 font-[Haas75] text-2xl font-bold 2xl:text-8xl"
      >
        <div class="sptext max-w-[75%] text-center font-thin 2xl:max-w-[65%]">
          OUR COMMITMENT TO QUALITY, SAFETY,
        </div>
        <div
          class="cptext max-w-[75%] text-center font-[Haas55] text-base leading-[120%] font-thin 2xl:max-w-[45%] 2xl:text-[32px]"
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

      <div
        class="focus2 absolute flex w-full flex-col gap-10 xl:px-36 xl:pb-30 2xl:p-22"
      >
        <div
          class="sptext2 px-5 font-[Haas55] text-3xl leading-[97%] font-normal xl:max-w-294.25 xl:text-[128px]"
        >
          Building Fast With Quality And speed
        </div>
        <div
          class="cptext2 px-5 font-[Switzer] text-base leading-[105.2%] font-normal xl:max-w-182.75 xl:text-[32px]"
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
