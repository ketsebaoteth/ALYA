<script lang="ts" setup>
import gsap from "gsap";
import { SplitText } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(async () => {
  gsap.registerPlugin(SplitText, ScrollTrigger);

  const splitedText1 = new SplitText(".spt", { type: "words,chars" });
  const charssplit = new SplitText(".cpt", { type: "lines" });

  // Set initial visibility
  gsap.set(".heroheader", { opacity: 1 });

  const tl = gsap.timeline({
    defaults: { ease: "expo.out" }
  });

  // 1. Background Image Scale Down (The "Big Entrance")
  tl.fromTo(".hero-img",
    { scale: 1.4, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.8 }
  )

    // 2. The Contact Pill (Scale-in)
    .fromTo(".cutbwu",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=1.2" // Overlaps with background scale
    )

    // 3. MAIN HEADER: The 3D Perspective Roll-in (Matches your other section)
    .from(splitedText1.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
      duration: 1.2,
      transformOrigin: "50% 50% -50",
    }, "-=0.8")

    // 4. SUBTEXT: Soft blur and rise
    .from(charssplit.lines, {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      stagger: 0.1,
      duration: 1,
    }, "-=0.6")

    // 5. CTA BUTTON: Quick pop
    .from(".heroheader .animated-cta", { // Adjust selector if component name differs
      opacity: 0,
      y: 20,
      duration: 0.8
    }, "-=0.4");
});
</script>

<template>
  <div class="fixed top-0 z-0 flex aspect-8/7 h-screen w-full justify-center overflow-visible lg:p-5">
    <div class="z-10 flex aspect-video h-full w-full justify-center">
      <div class="heroheader flex flex-col items-center justify-center gap-3 p-6 text-black opacity-0 lg:gap-6.5">

        <!-- Contact Pill -->
        <div class="cutbwu">
          <NuxtLink to="/contact"
            class="group flex cursor-pointer items-center gap-2.75 rounded-full bg-white px-3.75 py-1 hover:scale-101 shadow-xl">
            <div class="light font-Giest text-[20px]! tracking-tighter font-light md:text-[22px]">
              contact us to build with us
            </div>
            <img src="/arrow.svg" class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5" />
          </NuxtLink>
        </div>

        <!-- MAIN TEXT (Updated as requested) -->
        <div
          class="perspective-container flex w-full min-w-300 flex-col items-center justify-center text-center font-[Haas,sans-serif] text-[clamp(30px,5.5vw,160px)] leading-[85%] font-black text-white">
          <span class="spt text-nowrap">CREATING SPACES</span>
          <span class="spt text-nowrap">WITH PURPOSE</span>
        </div>

        <!-- SUB TEXT -->
        <div
          class="cpt font-Geist text-center text-[clamp(10px,2vw,30px)] leading-6.5 tracking-tighter font-medium text-[#E7E7E7] lg:max-w-160">
          We build for a better future, not just for the sake of doing so.
        </div>

        <AnimatedCtaBtn text="Get Started" class="animated-cta" />
      </div>
    </div>

    <!-- Background Image -->
    <div class="absolute top-0 flex aspect-video w-full h-full flex-col items-center justify-center">
      <div class="relative flex p-4 h-full w-full overflow-hidden rounded-3xl">
        <img src="/back2.png" loading="eager"
          class="hero-img opacity-0 h-full w-full object-cover rounded-3xl /rounded-b-[200px]" />
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

.hero-img {
  will-change: transform;
}

/* Ensure SplitText chars have room to rotate without clipping */
:deep(.spt) {
  display: inline-block;
  overflow: visible !important;
  padding-bottom: 0.05em;
}
</style>
