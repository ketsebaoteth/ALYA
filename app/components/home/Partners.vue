<script setup lang="tsx">
  import { onMounted } from "vue";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/SplitText";

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const spl = new SplitText(".antext", { type: "lines" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".antext",
        start: "top 70%",
      },
    });

    tl.fromTo(
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
    class="relative z-0 flex w-full flex-col items-center justify-center gap-7 bg-transparent pt-32 pb-20 text-black"
  >
    <div class="flex w-full flex-col items-center gap-4 lg:gap-20">
      <div
        class="pointer-events-none absolute top-0 bottom-0 left-0 z-30 w-1/6 bg-linear-to-l from-transparent to-white"
      ></div>
      <div
        class="pointer-events-none absolute top-0 right-0 bottom-0 z-30 w-1/6 bg-linear-to-r from-transparent to-white"
      ></div>

      <div
        class="antext flex max-w-70 flex-col text-center text-[clamp(30px,5vw,76px)] font-bold lg:max-w-100"
      >
        <span class="text-nowrap">Our Trusted</span>
        <span class="text-nowrap text-blue-400">Partners</span>
      </div>

      <div
        class="marquee-container flex w-full overflow-hidden whitespace-nowrap"
      >
        <div class="marquee-track flex shrink-0 items-center gap-16 pr-16">
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
        </div>

        <div
          class="marquee-track flex shrink-0 items-center gap-16 pr-16"
          aria-hidden="true"
        >
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part1.png"
            alt="Partner 1"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part2.png"
            alt="Partner 2"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part3.png"
            alt="Partner 3"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part4.png"
            alt="Partner 4"
            class="mx-4 h-12 object-contain lg:h-20"
          />
          <img
            src="/part5.jpg"
            alt="Partner 5"
            class="mx-4 h-12 object-contain lg:h-20"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .marquee-container {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 10%,
      black 90%,
      transparent
    );
  }

  .marquee-track {
    animation: scrollMarquee 35s linear infinite;
  }

  /* Pause animation on hover so users can look closer */
  .marquee-container:hover .marquee-track {
    animation-play-state: paused;
  }

  @keyframes scrollMarquee {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>
