<script setup lang="tsx">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { onMounted, onUnmounted, ref, nextTick } from "vue";

const endSVG =
  "M-359 327 L397.71 109.629 C780.086 -0.211 1185.74 0.397 1567.78 111.383 L2310 327 V1940 H-359 V327Z";

const loaded = ref(false);

// --- CURSOR LOGIC ---
const dotRef = ref<HTMLElement | null>(null);
const ringRef = ref<HTMLElement | null>(null);
let dotX: any, dotY: any, ringX: any, ringY: any;

const handleMouseMove = (e: MouseEvent) => {
  if (dotX && ringX) {
    dotX(e.clientX);
    dotY(e.clientY);
    ringX(e.clientX);
    ringY(e.clientY);
  }
};

onMounted(async () => {
  await nextTick();
  loaded.value = true;

  gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);

  // --- CURSOR INIT ---
  dotX = gsap.quickTo(dotRef.value, "x", { duration: 0.1, ease: "power3" });
  dotY = gsap.quickTo(dotRef.value, "y", { duration: 0.1, ease: "power3" });
  ringX = gsap.quickTo(ringRef.value, "x", { duration: 0.4, ease: "power2.out" });
  ringY = gsap.quickTo(ringRef.value, "y", { duration: 0.4, ease: "power2.out" });
  window.addEventListener("mousemove", handleMouseMove);

  // --- TEXT SPLITTING ---
  const splitedText1 = new SplitText(".sptext", { type: "words,chars" });
  const charssplit = new SplitText(".cptext", { type: "lines" });
  const spl2 = new SplitText(".sptext2", { type: "words,chars" });
  const cha2 = new SplitText(".cptext2", { type: "lines" });

  // --- TIMELINE 1 (Our Commitment) ---
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".focus",
      start: "top 80%",
    },
  });

  // SVG MORPH
  gsap.to("#curve path", {
    scrollTrigger: {
      trigger: ".parent",
      start: "-98% top",
      end: "+=2000",
      scrub: 1,
    },
    morphSVG: endSVG,
  });

  tl.from(splitedText1.chars, {
    opacity: 0,
    y: 100,
    rotateX: -90,
    stagger: 0.03,
    duration: 1,
    ease: "expo.out",
  })
    .from(charssplit.lines, {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");

  // --- TIMELINE 2 (Building Fast - THE SCALE DOWN COOK) ---
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".focus2",
      start: "top 85%",
    },
  });

  tl2
    // THE IMAGE SCALE DOWN: Starts huge and settles to normal
    .fromTo(".fade",
      { scale: 1.6 },
      { scale: 1, duration: 2.5, ease: "expo.out" }
    )
    // 3D Perspective Animation (Matching the first section style)
    .from(spl2.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.02,
      duration: 1.2,
      ease: "expo.out",
    }, "-=2") // Overlaps with the scale down
    .from(cha2.lines, {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    }, "-=1.5");
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <!-- Cursor Elements -->
  <div ref="ringRef" class="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-white"
    style="width: 26px; height: 26px; margin-left: -13px; margin-top: -13px;"></div>
  <div ref="dotRef" class="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-white"
    style="width: 6px; height: 6px; margin-left: -3px; margin-top: -3px;"></div>

  <div
    class="parent relative z-0 flex h-auto w-full flex-col gap-54 overflow-visible font-[Haas55] max-2xl:aspect-16/19 2xl:h-full">

    <!-- SVG SECTION (Untouched) -->
    <div class="absolute flex aspect-video w-full -translate-y-1/2 flex-col items-center justify-center">
      <div :class="loaded ? '' : 'hidden'" class="lparent z-0 h-full w-full">
        <svg id="curve" class="h-max w-full" width="1920" height="1940" viewBox="0 0 1920 1940" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M397.571 217.852C780.038 327.718 1185.79 327.11 1567.92 216.098L2309.5 0.666016V1939.5H-358.5V0.663086L397.571 217.852Z"
            fill="url(#paint0_linear_614_189)" />
          <defs>
            <linearGradient id="paint0_linear_614_189" x1="975.5" y1="354.106" x2="975.5" y2="1940"
              gradientUnits="userSpaceOnUse">
              <stop stop-color="#3E5CE1" />
              <stop offset="0.729563" stop-color="#22327B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <!-- SECTION 1 -->
    <div class="relative z-10 flex items-center justify-center text-white">
      <div class="focus flex flex-col items-center justify-center gap-12 font-[Haas75] text-2xl font-bold 2xl:text-8xl">
        <div
          class="sptext perspective-text max-w-[85%] text-center text-[clamp(2.5rem,8vw,8.5rem)] font-bold leading-[0.9] 2xl:max-w-[75%]">
          OUR COMMITMENT TO QUALITY, SAFETY,
        </div>
        <div
          class="cptext max-w-[75%] text-center font-[Haas55] text-[clamp(16px,2.2vw,32px)] leading-[1.4] font-thin 2xl:max-w-[45%]">
          At the heart of every project we take on is a dedication to delivering
          reliability. We build results that stand the test of time.
        </div>
      </div>
    </div>

    <!-- SECTION 2 (Scale Down Content) -->
    <div class="z-0 flex w-full items-center justify-center relative min-h-screen">
      <!-- Full Background (No Insets/Overlays) -->
      <div class="absolute inset-0 w-full h-full overflow-hidden">
        <img src="/back1.png" class="fade w-full h-full object-cover" />
      </div>

      <!-- Content (Centered & Purposeful) -->
      <div
        class="focus2 relative z-10 flex w-full flex-col items-center justify-center gap-10 text-white text-center px-5">
        <div
          class="sptext2 perspective-text w-full max-w-[90%] font-[Haas55] text-[clamp(45px,9vw,160px)] leading-[0.8] font-bold tracking-tighter">
          Building Fast With <br />
          Quality And Speed
        </div>
        <div
          class="cptext2 w-full max-w-[700px] font-[Switzer] text-[clamp(16px,1.8vw,28px)] leading-[1.4] font-normal opacity-90">
          We don't just build; we accelerate. By combining cutting-edge material logistics
          with a veteran workforce, we hit deadlines that others miss.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-text {
  perspective: 1200px;
  transform-style: preserve-3d;
}

:deep(.sptext),
:deep(.sptext2) {
  overflow: hidden;
  padding-bottom: 0.1em;
  /* Prevents 3D character clipping */
}

.fade {
  will-change: transform;
}
</style>
