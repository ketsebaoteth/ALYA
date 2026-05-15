<script lang="ts" setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";

const imageSources = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
];

onMounted(async () => {
  gsap.registerPlugin(SplitText);

  const splitedText1 = new SplitText(".spt", { type: "words,chars" });
  const charssplit = new SplitText(".cpt", { type: "lines" });

  gsap.set(".heroheader", { opacity: 1 });

  const tl = gsap.timeline({
    defaults: { ease: "expo.out" }
  });

  // 1. SPLIT BACKGROUND ANIMATION
  // Using .fromTo to ensure we take control from the CSS initial state
  tl.fromTo(".bg-slice",
    {
      scaleY: 1.6,
      opacity: 0,
      y: 100
    },
    {
      scaleY: 1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.08,
      ease: "power4.out"
    }
  )
    .fromTo(".cutbwu",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=1.2"
    )
    .from(splitedText1.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
      duration: 1.2,
      transformOrigin: "50% 50% -50",
    }, "-=0.8")
    .from(charssplit.lines, {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 1,
    }, "-=0.6")
    .from(".heroheader .animated-cta", {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.4");
});
</script>

<template>
  <div class="fixed top-0 z-0 flex aspect-8/7 h-screen w-full justify-center overflow-visible lg:p-5">

    <div class="z-20 flex aspect-video h-full w-full justify-center">
      <div class="heroheader flex flex-col items-center justify-center gap-3 p-6 text-black opacity-0 lg:gap-6.5">
        <div class="cutbwu">
          <NuxtLink to="/contact"
            class="group flex cursor-pointer items-center gap-2.75 rounded-full bg-white px-3.75 py-1 shadow-xl">
            <div class="light font-Giest text-[20px]! tracking-tighter font-light md:text-[22px]">
              contact us to build with us
            </div>
            <img src="/arrow.svg" class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5" />
          </NuxtLink>
        </div>

        <div
          class="perspective-container flex w-full min-w-300 flex-col items-center justify-center text-center font-[Haas,sans-serif] text-[clamp(30px,5.5vw,160px)] leading-[85%] font-black text-white">
          <span class="spt text-nowrap">CREATING SPACES</span>
          <span class="spt text-nowrap">WITH PURPOSE</span>
        </div>

        <div
          class="cpt font-Geist text-center text-[clamp(10px,2vw,30px)] leading-6.5 tracking-tighter font-medium text-[#E7E7E7] lg:max-w-160">
          We build for a better future, not just for the sake of doing so.
        </div>
        <AnimatedCtaBtn text="Get Started" class="animated-cta" />
      </div>
    </div>

    <div class="absolute inset-0 z-0 flex h-full w-full gap-2 p-4 lg:p-5">
      <div v-for="(img, index) in imageSources" :key="index"
        class="bg-slice h-full flex-1 overflow-hidden brightness-75 rounded-xl bg-cover bg-center transition-all duration-700 ease-out hover:flex-[1.1] hover:brightness-100 hover:-translate-y-2"
        :style="{ backgroundImage: `url(${img})` }">
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounce-back {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.perspective-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* INITIAL STATE: 
   Matches GSAP { scaleY: 1.6, opacity: 0, y: 100 } 
   This prevents the "flash" of images before the animation starts.
*/
/* Update the base class */
.bg-slice {
  opacity: 0;
  transform: translateY(100px) scaleY(1.6);
  /* Added flex for smoother transition */
  flex: 1;
  transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1),
    transform 0.6s ease-out,
    opacity 0.6s ease-out,
    filter 0.4s ease;
  will-change: transform, opacity, flex;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.4);
}

/* The Hover Effect */
.bg-slice:hover {
  /* This controls the width expansion */
  flex: 3;
  transform: translateY(-10px) scaleY(1);
  /* Slightly lift it */
  z-index: 10;
}

/* Dim the others when one is hovered */
.absolute:hover .bg-slice:not(:hover) {
  flex: 0.7;
  /* Shrink the siblings slightly */
  opacity: 0.5;
  filter: brightness(0.4) grayscale(0.5);
}

.absolute:hover .bg-slice:not(:hover) {
  opacity: 0.6;
  filter: brightness(0.5) grayscale(0.2);
}

:deep(.spt) {
  display: inline-block;
  overflow: visible !important;
  padding-bottom: 0.05em;
}
</style>
