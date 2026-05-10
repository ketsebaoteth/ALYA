<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

  const endSVG =
    "M-359 327 L397.71 109.629 C780.086 -0.211 1185.74 0.397 1567.78 111.383 L2310 327 V1940 H-359 V327Z";

  onMounted(async () => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MorphSVGPlugin);

    gsap.to("#curve path", {
      scrollTrigger: {
        trigger: ".parent",
        start: "20% bottom",
        end: "+=1200",
        scrub: 1,
      },
      duration: 1,
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
    class="relative flex lg:min-h-[150svh] max-lg:max-h-100 w-full justify-center lg:overflow-visible"
  >
    <div
      class="absolute top-0 flex lg:h-max w-full flex-col items-center justify-center"
    >
      <div class="relative flex h-max w-full">
        <img src="/back2.png" class="h-max w-full" />

        <!-- WARNING: Please don't touch this div, it is for the blur -->
        <div
          class="inset-0/ bg-black/ /translate-y-45 absolute bottom-0 h-[55%] w-full"
        >
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_0%,transparent_12.5%)] backdrop-blur-md"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_12.5%,transparent_25%)] backdrop-blur-[9px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_25%,transparent_37.5%)] backdrop-blur-[6px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_37.5%,transparent_50%)] backdrop-blur-[5px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_50%,transparent_62.5%)] backdrop-blur-[3px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_62.5%,transparent_75%)] backdrop-blur-[1.5px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_75%,transparent_87.5%)] backdrop-blur-[1px]"
          ></div>
          <div
            class="absolute inset-0 mask-[linear-gradient(to_top,black_87.5%,transparent_100%)] backdrop-blur-[0.5px]"
          ></div>
        </div>
      </div>

      <div class="parent z-0 h-full w-full -translate-y-[16%]">
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

    <div class="bottom-0 flex lg:h-svh h-[40vh] w-full flex-col p-90"></div>

    <div class="absolute z-0 flex lg:h-svh h-[40vh] w-full items-center justify-center">
      <div
        class="heroheader pt-10/ flex flex-col items-center justify-center gap-6.5 p-6 text-black opacity-0"
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
          class="spt w-full max-w-[45%] items-center justify-center text-center font-[Haas] font-black transition-all delay-300 duration-1000 max-lg:text-center"
        >
          <span
            class="inline bg-clip-text text-center leading-[105%] font-black text-white max-xl:text-4xl lg:text-[70px] xl:text-7xl 2xl:text-[90px]"
          >
            Beyond the act of building lies the power of purpose
          </span>
        </div>

        <div
          class="cpt max-md:60 font-Geist text-center text-base font-medium text-[#E7E7E7] transition-all delay-200 duration-700 lg:max-w-160 lg:text-[30px]"
        >
          We Build For A Better Future Not just For The Sake Of Doing So.
        </div>

        <ActionBtn
          class="group flex font-[Switzer] font-semibold text-black transition-all delay-1500 duration-500 hover:scale-101"
        >
          Get Started
        </ActionBtn>
      </div>
    </div>

    <div
      class="/max-h-350 /relative absolute -bottom-full z-10 flex h-svh w-full items-center justify-center"
    ></div>
  </div>
</template>

<style>
  .bounce-back {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>
