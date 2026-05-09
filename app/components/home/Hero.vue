<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    gsap.registerPlugin(SplitText);

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

    const handsDuration = 3.3;

    gsap.to("#rightHandParent", {
      x: 70,
      duration: handsDuration,
      ease: "back",
    });

    gsap.to("#leftHandParent", {
      x: -70,
      duration: handsDuration,
      ease: "back",
    });

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
    class="/min-h-300 /max-w-467.5 relative flex h-svh w-full items-center justify-center overflow-visible transition-all delay-500 duration-1000"
  >
    <div
      id="leftHandParent"
      class="absolute -left-30 flex w-160 -translate-x-150 -translate-y-40 max-xl:hidden"
    >
      <img src="/exca-layer1.png" class="w-160" />
      <div class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all">
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
          src="/exca-layer3.png"
          class="anim-bucket absolute right-2 bottom-17 w-52.5 transition-all"
        />
      </div>
    </div>

    <div
      id="rightHandParent"
      class="absolute -right-30 flex w-160 translate-x-150 -translate-y-40 rotate-y-180 max-xl:hidden"
    >
      <img src="/exca-layer1.png" class="w-160" />
      <div class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all">
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
          src="/exca-layer3.png"
          class="anim-bucket absolute right-2 bottom-17 w-52.5 transition-all"
        />
      </div>
    </div>

    <div class="z-0 flex h-full w-full items-center justify-center">
      <div
        class="heroheader pt-10/ flex flex-col items-center justify-center gap-6.5 p-6 text-black opacity-0"
      >
        <div class="cutbwu">
          <ActionBtn
            class="group flex cursor-pointer items-center gap-2.75 rounded-full border border-[#B0B0B0] bg-linear-to-r from-white/0 via-white to-[#D7D7D7]/85 px-3.75 py-1 hover:scale-101"
          >
            <div class="light font-[Switzer] text-lg font-light md:text-[22px]">
              contact us to build with us
            </div>
            <img
              src="/arrow.svg"
              class="bounce-back w-4 shrink-0 transition-all group-hover:ml-3.5"
            />
          </ActionBtn>
        </div>
        <div
          class="spt w-full max-w-200 items-center justify-center text-center font-[Haas] font-black transition-all delay-300 duration-1000 max-lg:text-center"
        >
          <span
            class="inline bg-clip-text text-center leading-[105%] font-black text-black max-xl:text-4xl lg:text-[70px] xl:text-7xl 2xl:text-[90px]"
          >
            We Build For A Better Future
            <img
              ref="followerRef"
              src="/arrow-play2.svg"
              class="/ease-in-out inline px-3 transition-all duration-300 max-md:size-12"
            />
            Not Just For The Sake Of Building
          </span>
        </div>

        <div
          class="cpt max-md:60 text-center font-[Haas] text-lg font-thin text-[#696969] transition-all delay-200 duration-700 lg:max-w-160 lg:text-[32px]"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum ha
        </div>

        <ActionBtn
          class="group flex font-[Switzer] font-semibold text-white transition-all delay-1500 duration-500 hover:scale-101"
        >
          <div
            class="rounded-full bg-black px-8.25 py-2.75 shadow-[0px_15px_35.6px_0px] shadow-black/5 transition-all"
          >
            Get Started
          </div>
          <div
            class="flex -translate-x-2 items-center justify-center rounded-full bg-black p-3.75 shadow-[0px_15px_35.6px_0px] shadow-black/5 transition-all group-hover:translate-x-1"
          >
            <img
              src="/arrow-medium.svg"
              class="w-3.75 transition-all group-hover:rotate-z-45"
            />
          </div>
        </ActionBtn>
      </div>
    </div>
  </div>
</template>

<style>
  .anim-bucket {
    animation: bucket forwards 2.5s 0.3s;
  }

  @keyframes bucket {
    from {
      transform: rotate(0px);
    }

    50% {
      transform: rotate(-40deg);
    }

    to {
      transform: rotate(40deg);
    }
  }

  .anim-hand {
    animation: hand forwards 2s 0.7s;
  }

  @keyframes hand {
    from {
      transform: rotate(0deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    to {
      transform: rotate(20deg);
    }
  }

  .bounce-back {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
</style>
