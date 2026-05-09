<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    const sptext = new SplitText(".focus", { type: "words,chars" });

    gsap.to(sptext.chars, {
      fontWeight: 900,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        end: "+=1200",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });
  });
</script>

<template>
  <div
    class="parent/ z-10 flex h-svh max-h-350 w-full items-center justify-center"
  >
    <div class="h-full w-full bg-linear-to-b from-[#3E5CE1] to-[#22327B] flex "></div>
  </div>
</template>
