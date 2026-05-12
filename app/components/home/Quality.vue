<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    const splitedText1 = new SplitText(".sptext", { type: "words,chars" });

    const charssplit = new SplitText(".cptext", { type: "words,chars" });

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
        splitedText1.chars,
        {
          opacity: 0,
          y: 65,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "back.inOut",
        },
        "<"
      );

    const spl = new SplitText(".sptext2", { type: "lines" });

    const cha = new SplitText(".cptext2", { type: "words,chars" });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus2",
        start: "-25% center",
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
      )
      .fromTo(
        ".fade",
        {
          opacity: 1,
          scale: 1.1,
          rotateZ: "-7px",
        },
        {
          opacity: 1,
          scale: 1,
          rotateZ: "0px",
          ease: "power1.inOut",
        },
        "<"
      );
  });
</script>

<template>
  <div
    class="/2xl:aspect-16/18 z-70 flex h-auto w-full flex-col gap-54 overflow-visible font-[Haas55] max-2xl:aspect-16/19 2xl:h-full"
  >
    <div class="relative z-10 flex items-center justify-center text-white">
      <div
        class="focus flex flex-col items-center justify-center gap-9.5 font-[Haas75] text-2xl font-bold 2xl:text-8xl"
      >
        <div
          class="sptext max-w-[75%] text-center text-[clamp(1.5rem,5vw,6rem)] font-thin 2xl:max-w-[65%]"
        >
          OUR COMMITMENT TO QUALITY, SAFETY,
        </div>
        <div
          class="cptext max-w-[65%] text-center font-[Haas55] text-[clamp(13px,2vw,30px)] leading-[120%] font-thin 2xl:max-w-[38%]"
        >
          At the heart of every project we take on is a dedication to delivering
          reliability. We build results that stand the test of time. From
          selecting top-grade materials to partnering with experienced
          subcontractors,
        </div>
      </div>
    </div>

    <div class="2xl:/ /pt-70 z-0 flex w-full items-center justify-center">
      <img src="/back1.png" class="fade w-full" />

      <div
        class="focus2 absolute flex w-full flex-col gap-10 xl:px-36 xl:pb-30 2xl:p-22"
      >
        <div
          class="sptext2 w-1/2 px-5 font-[Haas55] text-[clamp(30px,5vw,128px)] leading-[97%] font-normal xl:max-w-294.25"
        >
          Building Fast With Quality And speed
        </div>
        <div
          class="cptext2 w-1/2 px-5 font-[Switzer] text-[clamp(13px,2vw,32px)] leading-[105.2%] font-normal xl:max-w-182.75"
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
