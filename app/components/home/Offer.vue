<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  onMounted(async () => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".left-palette",
        start: "top center",
      },
    });

    tl.fromTo(
      ".center-palette",
      {
        translateY: "28px",
      },
      {
        translateY: "0px",
        opacity: 1,
        duration: 1.3,
        ease: "power1.out",
      }
    )
      .to(
        ".left-palette",
        {
          translateX: "0px",
          opacity: 1,
          duration: 0.9,
          delay: 0.8,
          ease: "power3.out",
        },
        "<"
      )
      .to(
        ".right-palette",
        {
          translateX: "0px",
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "<"
      );
  });
</script>

<template>
  <div
    class="z-0 flex max-h-350 min-h-150 w-full /max-w-415 bg-white flex-col items-center justify-center gap-7 p-4 text-black lg:min-h-300 lg:p-12 xl:p-14"
  >
    <div
      class="flex w-2/3 max-w-150 justify-center px-4 text-center font-[Switzer] leading-[1.15] font-bold max-xl:text-4xl xl:text-[78px] 2xl:w-1/2"
    >
      What we offer to your business
    </div>
    <div
      class="flex max-w-180 justify-center text-center text-[19px] leading-none text-black max-xl:max-w-130 max-xl:text-sm"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s,
    </div>

    <div class="flex h-full w-full max-w-315 items-center gap-2 pt-14">
      <div
        class="left-palette h-80 w-full max-w-[35%] -translate-x-50 /-skew-y-8 /rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
      <div
        class="center-palette -translate-y-7// h-80 w-full max-w-[35%] /translate-y-63 /rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
      <div
        class="right-palette h-80 w-full max-w-[35%] translate-x-50 /skew-y-8 /rounded-4xl bg-black opacity-0 xl:h-140"
      ></div>
    </div>
  </div>
</template>
