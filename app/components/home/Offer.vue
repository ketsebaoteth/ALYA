<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/SplitText";

  onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    const splitedText1 = new SplitText(".titlet", { type: "lines" });

    const charssplit = new SplitText(".desct", { type: "words,chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".left-palette",
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
      )
      .fromTo(
        ".center-palette",
        {
          translateY: "20px",
        },
        {
          translateY: "0px",
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
        },
        "<"
      )
      .to(
        ".left-palette",
        {
          translateX: "0px",
          opacity: 1,
          duration: 0.7,
          delay: 0.4,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        ".right-palette",
        {
          translateX: "0px",
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "<"
      );
  });
</script>

<template>
  <div
    class="/max-w-415 aspvi /max-h-350 /min-h-150 z-0 flex w-full flex-col items-center justify-center gap-7 bg-white p-4 text-black lg:min-h-300 lg:p-12 xl:p-14"
  >
    <div
      class="titlet flex w-2/3 max-w-150 justify-center px-4 text-center font-[Switzer] leading-[1.15] font-bold max-xl:text-4xl xl:text-[78px] 2xl:w-1/2"
    >
      What we offer to your business
    </div>
    <div
      class="desct /flex max-w-180 justify-center text-center text-[19px] leading-none text-black max-xl:max-w-130 max-xl:text-sm"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </div>

    <div class="flex h-full w-full max-w-315 items-center gap-6.25 pt-14">
      <div
        class="left-palette /-skew-y-8 h-80 w-full max-w-[35%] -translate-x-5 rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
      <div
        class="center-palette -translate-y-7// /translate-y-63 h-80 w-full max-w-[35%] rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
      <div
        class="right-palette /skew-y-8 h-80 w-full max-w-[35%] translate-x-5 rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
    </div>
  </div>
</template>
