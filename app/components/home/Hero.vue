<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import ScrollTrigger from "gsap/ScrollTrigger";

  onMounted(async () => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

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
    class="fixed top-0 z-0 flex aspect-8/7 h-auto w-full justify-center overflow-visible lg:p-5"
  >
    <div class="z-10 flex aspect-video h-max w-full justify-center">
      <div
        class="heroheader flex flex-col items-center justify-center gap-3 p-6 text-black opacity-0 lg:gap-6.5"
      >
        <div class="cutbwu">
          <NuxtLink
            to="/contact"
            class="group flex cursor-pointer items-center gap-2.75 rounded-full border border-[#B0B0B0] bg-linear-to-r from-white via-white to-[#B0B0B0] px-3.75 py-1 hover:scale-101"
          >
            <div
              class="light font-[Switzer] text-[clamp(10px,1vw,18px)] font-light md:text-[22px]"
            >
              contact us to build with us
            </div>
            <img
              src="/arrow.svg"
              class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5"
            />
          </NuxtLink>
        </div>
        <div
          class="flex w-full min-w-200 flex-col items-center justify-center text-center font-[Haas,sans-serif] text-[clamp(30px,5vw,90px)] leading-[105%] font-black text-white"
        >
          <span class="spt text-nowrap">Beyond the act of</span>
          <span class="spt text-nowrap">building lies the power</span>
          <span class="spt text-nowrap">of purpose</span>
        </div>

        <div
          class="cpt font-Geist text-center text-[clamp(10px,2vw,30px)] font-medium text-[#E7E7E7] lg:max-w-160"
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
      class="absolute top-0 flex aspect-video w-full flex-col items-center justify-center"
    >
      <div class="relative flex h-max w-full">
        <img src="/back-new.png" loading="eager" class="h-max w-full" />
      </div>
    </div>
  </div>
</template>

<style>
  .bounce-back {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>
