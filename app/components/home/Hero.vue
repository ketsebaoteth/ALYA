<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

  const loaded = ref(false);

  const endSVG =
    "M-359 327 L397.71 109.629 C780.086 -0.211 1185.74 0.397 1567.78 111.383 L2310 327 V1940 H-359 V327Z";

  onMounted(async () => {
    loaded.value = true;
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MorphSVGPlugin);

    gsap.to("#curve path", {
      scrollTrigger: {
        trigger: ".parent",
        start: "-20% bottom",
        end: "+=1900",
        scrub: 1,
      },
      morphSVG: endSVG,
      // ease: "power3.inOut",
    });

    const splitedText1 = new SplitText(".spt", { type: "lines" });
    const charssplit = new SplitText(".cpt", { type: "words,chars" });
    gsap.set(".heroheader", { opacity: 1 });
    gsap.fromTo(
      charssplit.words,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "back.out" }
    );

    gsap.fromTo(
      charssplit.chars,
      { filter: "blur(20px)" },
      {
        filter: "blur(0px)",
        duration: 0.1,
        stagger: 0.01,
        delay: 0.5,
        ease: "power2.inOut",
      }
    );
    gsap.fromTo(
      splitedText1.lines,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        delay: 0.5,
        stagger: 0.15,
        ease: "back",
      }
    );

    gsap.fromTo(
      ".cutbwu",
      {
        scaleX: 0.8,
      },
      {
        scaleX: 1,
        duration: 0.6,
        ease: "back",
      }
    );
  });
</script>

<template>
  <div
    class="relative flex aspect-16/14 h-auto w-full justify-center overflow-visible bg-black"
  >
    <div
      class="absolute z-10 flex aspect-video min-w-full items-center justify-center"
    >
      <div
        class="heroheader flex flex-col items-center justify-center gap-6.5 p-6 text-black opacity-0"
      >
        <div class="cutbwu">
          <NuxtLink
            to="/contact"
            class="group flex cursor-pointer items-center gap-2.75 rounded-full border border-[#B0B0B0] bg-linear-to-r from-white via-white to-[#B0B0B0] px-3.75 py-1 hover:scale-101"
          >
            <div class="light font-[Switzer] text-lg font-light md:text-[22px]">
              contact us to build with us
            </div>
            <img
              src="/arrow.svg"
              class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5"
            />
          </NuxtLink>
        </div>
        <div
          class="flex w-full min-w-200 flex-col items-center justify-center text-center font-[Haas,sans-serif] text-[clamp(33px,5vw,90px)] leading-[105%] font-black text-white"
        >
          <span class="spt text-nowrap">Beyond the act of</span>
          <span class="spt text-nowrap">building lies the power</span>
          <span class="spt text-nowrap">of purpose</span>
        </div>

        <div
          class="cpt font-Geist text-center text-[clamp(13px,2vw,30px)] font-medium text-[#E7E7E7] lg:max-w-160"
        >
          We Build For A Better Future Not just For The Sake Of Doing So.
        </div>

        <ActionBtn
          class="group flex items-center justify-center overflow-hidden rounded-full bg-white font-[Switzer] font-semibold text-black"
        >
          Get Started
        </ActionBtn>
      </div>
    </div>

    <div
      class="/hidden top-0/ /lg:h-max absolute flex aspect-video w-full flex-col items-center justify-center"
    >
      <div class="relative flex h-max w-full">
        <img src="/back-new.png" loading="eager" class="h-max w-full" />
      </div>

      <div
        :class="loaded ? '' : 'hidden'"
        class="parent z-0 h-full w-full -translate-y-[25%]"
      >
        <svg
          id="curve"
          class="h-max w-full"
          width="1920"
          height="1940"
          viewBox="0 0 1920 1940"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- stroke="black" -->
          <path
            d="M397.571 217.852C780.038 327.718 1185.79 327.11 1567.92 216.098L2309.5 0.666016V1939.5H-358.5V0.663086L397.571 217.852Z"
            fill="url(#paint0_linear_614_189)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_614_189"
              x1="975.5"
              y1="354.106"
              x2="975.5"
              y2="1940"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3E5CE1" />
              <stop offset="0.729563" stop-color="#22327B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
  .bounce-back {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>
