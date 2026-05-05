<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  // BUG: This completely doesn't work, working on it
  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger.getAll().forEach(t => t.kill())

    gsap.to(".focus", {
      duration: 3,
      "font-variation-settings": "'wght' 800",
      "--font-weight": 800,
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "+=500",
        scrub: 1,
        pin: true,
      },
    });
  });
</script>

<template>
  <div
    class="parent /h-[40vh] xl: z-10 flex h-svh max-h-350 min-h-100 w-full items-center justify-center xl:min-h-300 xl:px-30"
  >
    <div
      class="focus w-6/7 max-w-200 -translate-y-40 text-center font-[Inter] text-2xl text-4xl/ leading-[125%] md:max-w-400 xl:text-6xl 2xl:text-7xl"
    >
      our company provides safe working conditions and provide quality work
      within reasonable timeframe
    </div>
  </div>
</template>
