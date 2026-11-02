<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";
  import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
  import { onMounted, onUnmounted, ref, nextTick } from "vue";

  const endSVG =
    "M-359 327 L397.71 109.629 C780.086 -0.211 1185.74 0.397 1567.78 111.383 L2310 327 V1940 H-359 V327Z";

  const loaded = ref(false);
  const btnRef = ref<HTMLElement | null>(null);

  const dotRef = ref<HTMLElement | null>(null);
  const ringRef = ref<HTMLElement | null>(null);
  let dotX: any, dotY: any, ringX: any, ringY: any;

  let btnMoveX: any, btnMoveY: any;

  const handleMouseMove = (e: MouseEvent) => {
    if (dotX && ringX) {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    }

    if (btnRef.value && btnMoveX) {
      const { clientX, clientY } = e;
      const rect = btnRef.value.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(clientX - centerX, clientY - centerY);

      // Damped magnetic follow
      if (distance < 450) {
        btnMoveX((clientX - centerX) * 0.15);
        btnMoveY((clientY - centerY) * 0.15);
      } else {
        btnMoveX(0);
        btnMoveY(0);
      }
    }
  };

  onMounted(async () => {
    await nextTick();
    loaded.value = true;
    gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);

    dotX = gsap.quickTo(dotRef.value, "x", { duration: 0.1, ease: "power3" });
    dotY = gsap.quickTo(dotRef.value, "y", { duration: 0.1, ease: "power3" });
    ringX = gsap.quickTo(ringRef.value, "x", {
      duration: 0.4,
      ease: "power2.out",
    });
    ringY = gsap.quickTo(ringRef.value, "y", {
      duration: 0.4,
      ease: "power2.out",
    });

    btnMoveX = gsap.quickTo(btnRef.value, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    btnMoveY = gsap.quickTo(btnRef.value, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    window.addEventListener("mousemove", handleMouseMove);

    const splitedText1 = new SplitText(".sptext", { type: "words,chars" });
    const charssplit = new SplitText(".cptext", { type: "lines" });
    const spl2 = new SplitText(".sptext2", { type: "words,chars" });
    const cha2 = new SplitText(".cptext2", { type: "lines" });

    gsap.to("#curve path", {
      scrollTrigger: {
        trigger: ".parent",
        start: "-78% top",
        end: "+=2000",
        scrub: 1,
      },
      morphSVG: endSVG,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus",
        start: "top 80%",
      },
    });

    tl.from(splitedText1.chars, {
      opacity: 0,
      y: 100,
      rotateX: -90,
      stagger: 0.03,
      duration: 1,
      ease: "expo.out",
    })
      .from(
        charssplit.lines,
        {
          opacity: 0,
          y: 30,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".magnetic-wrap",
        {
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".focus2",
        start: "top 85%",
      },
    });

    tl2
      .fromTo(
        ".fade",
        { scale: 1.6 },
        { scale: 1, duration: 2.5, ease: "expo.out" }
      )
      .from(
        spl2.chars,
        {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.02,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=2"
      )
      .from(
        cha2.lines,
        {
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        },
        "-=1.5"
      );
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMouseMove);
  });
</script>

<template>
  <div
    ref="ringRef"
    class="pointer-events-none fixed top-0 left-0 z-9999 rounded-full border border-white"
    style="width: 26px; height: 26px; margin-left: -13px; margin-top: -13px"
  ></div>
  <div
    ref="dotRef"
    class="pointer-events-none fixed top-0 left-0 z-9999 rounded-full bg-white"
    style="width: 6px; height: 6px; margin-left: -3px; margin-top: -3px"
  ></div>

  <div
    class="parent /font-[Haas55] /bg-white /max-lg:py-30 relative z-0 flex h-auto w-full flex-col gap-20 overflow-visible max-2xl:aspect-16/19 max-lg:h-auto lg:gap-54 2xl:h-full"
  >
    <div
      class="absolute flex w-full flex-col items-center justify-center max-lg:aspect-4/3 max-lg:-translate-y-[25%] lg:aspect-video lg:-translate-y-1/2"
    >
      <div :class="loaded ? '' : 'hidden'" class="lparent z-0 h-full w-full">
        <svg
          id="curve"
          class="h-max w-full shadow-lg shadow-black max-lg:hidden"
          width="1920"
          height="1940"
          viewBox="0 0 1920 1940"
          fill="none"
        >
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
              <stop stop-color="#dc2626" />
              <stop offset="0.729563" stop-color="#7f1d1d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div
      class="relative z-10 flex h-max w-full items-center justify-center text-white max-lg:min-h-[70vh] max-lg:bg-[#7f1d1d] lg:aspect-video"
    >
      <div
        class="focus /font-[Haas75] relative flex flex-col items-center justify-center gap-8 px-5 text-2xl font-bold lg:gap-12 lg:px-0 2xl:text-8xl"
      >
        <div
          class="sptext perspective-text max-w-[85%] text-center text-[clamp(2.5rem,6vw,8.5rem)] font-bold 2xl:max-w-[75%]"
        >
          OUR COMMITMENT TO QUALITY, SAFETY,
        </div>
        <div
          class="cptext /font-[Haas55] max-w-[90%] text-center text-[clamp(16px,2.2vw,32px)] font-thin lg:max-w-[75%] 2xl:max-w-[45%]"
        >
          At the heart of every project we take on is a dedication to delivering
          reliability. We build results that stand the test of time.
        </div>

        <NuxtLink to="/contact" class="magnetic-wrap z-20">
          <div
            ref="btnRef"
            class="group cursor-pointer rounded-full border border-white/20 p-2"
          >
            <div
              class="flex h-fit w-fit rounded-full bg-white px-12 py-6 mix-blend-difference transition-transform group-hover:scale-90"
            >
              <span class="text-brand-600 text-xl font-bold uppercase">
                Contact
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div
      class="relative z-0 -mt-43 flex h-max w-full items-center justify-center bg-[#7f1d1d] max-lg:min-h-[70vh] lg:aspect-video"
    >
      <div
        class="absolute inset-0 h-full w-full overflow-hidden bg-transparent"
      >
        <NuxtImg
          src="/pal10.jpeg"
          :placeholder="1"
          class="fade h-full w-full bg-white object-cover opacity-50"
        />
        <div class="fade absolute inset-0 -z-10 h-full bg-black"></div>
        <div
          class="fade-back absolute inset-0 -z-20 mt-1 mr-1 h-full bg-white"
        ></div>
      </div>
      <div
        class="focus2 relative z-10 flex w-full flex-col items-center justify-center gap-10 px-5 text-center text-white"
      >
        <div
          class="sptext2 perspective-text /font-[Haas55] w-full max-w-[90%] text-[clamp(45px,6vw,150px)] font-bold"
        >
          Building Fast With
          <br />
          Quality And Speed
        </div>
        <div
          class="cptext2 /font-[Switzer] w-full max-w-175 text-[clamp(16px,1.8vw,28px)] font-normal opacity-90"
        >
          We don't just build; we accelerate. By combining cutting-edge material
          logistics with a veteran workforce.
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
  }

  .fade {
    will-change: transform;
    clip-path: polygon(0 0, 65% 0, 100% 30%, 100% 100%, 35% 100%, 0% 70%);
  }

  .fade-back {
    clip-path: polygon(0 0, 65% 0, 100% 30%, 100% 100%, 0% 100%);
  }

  .magnetic-wrap {
    will-change: transform;
    pointer-events: auto;
  }
</style>
