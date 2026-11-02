<script lang="ts" setup>
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import { ref, onMounted, onUnmounted } from "vue";

  import AnimatedCtaBtn from "../AnimatedCtaBtn.vue";

  // const router = useRouter();

  const root = ref<HTMLElement | null>(null);
  const heroBgWrapper = ref<HTMLElement | null>(null);
  const heroBg = ref<HTMLImageElement | null>(null);

  let ctx: gsap.Context | undefined;
  let splitTitle: SplitText | undefined;
  let splitSubtitle: SplitText | undefined;

  let mouseHandler: ((e: MouseEvent) => void) | undefined;

  onMounted(() => {
    if (!root.value) return;

    gsap.registerPlugin(SplitText);
    gsap.defaults({
      force3D: true,
    });

    gsap.ticker.lagSmoothing(500, 33);

    ctx = gsap.context(() => {
      splitTitle = new SplitText(".spt", {
        type: "words,chars",
      });

      splitSubtitle = new SplitText(".cpt", {
        type: "lines",
      });

      gsap.set(".heroheader", {
        opacity: 1,
      });

      gsap.set(heroBgWrapper.value, {
        scale: 1.05,
      });

      gsap.set(".hero-overlay", {
        opacity: 0.85,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.out",
        },
      });

      tl.to(heroBgWrapper.value, {
        scale: 1,
        duration: 2.5,
        ease: "power2.out",
      })
        .to(
          ".hero-overlay",
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<"
        )

        .fromTo(
          ".cutbwu",
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=1.5"
        )

        .from(
          splitTitle!.chars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: 0.02,
            duration: 1.2,
            transformOrigin: "50% 50% -50",
          },
          "-=1.2"
        )

        .from(
          splitSubtitle!.lines,
          {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            stagger: 0.1,
            duration: 1,
          },
          "-=0.8"
        )

        .from(
          ".heroheader .animated-cta",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );

      mouseHandler = (e: MouseEvent) => {
        const percentX = e.clientX / window.innerWidth - 0.5;
        const percentY = e.clientY / window.innerHeight - 0.5;

        // const bgX = percentX * 40;
        // const bgY = percentY * 40;

        const textX = -percentX * 30;
        const textY = -percentY * 30;

        gsap.to(heroBg.value, {
          x: percentX * 35,
          y: percentY * 35,
          duration: 1.3,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(".heroheader", {
          x: textX,
          y: textY,
          duration: 1.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      root.value?.addEventListener("mousemove", mouseHandler);
    }, root.value);
  });

  onUnmounted(() => {
    if (mouseHandler && root.value) {
      root.value.removeEventListener("mousemove", mouseHandler);
    }

    splitTitle?.revert();
    splitSubtitle?.revert();

    ctx?.revert();
  });
</script>

<template>
  <div
    ref="root"
    class="fixed top-0 z-0 flex aspect-8/7 h-screen w-full max-w-svw justify-center overflow-visible lg:p-5"
  >
    <div
      class="pointer-events-none absolute inset-0 -top-[12.5%] -left-[7.5%] z-0 h-[115%] w-[115%]"
    >
      <img
        ref="heroBg"
        src="/hero.jpg"
        class="hero-bg-img h-full w-full rounded-xl border border-gray-800 object-cover shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] saturate-200 max-md:origin-right max-md:object-[85%_center]"
      />
      <div class="hero-overlay"></div>
    </div>

    <div
      class="pointer-events-none relative z-20 flex aspect-video h-full w-full justify-center pt-20"
    >
      <div
        class="heroheader safari-fix pointer-events-auto flex w-full flex-col items-center justify-center gap-3 p-6 text-black opacity-0 lg:gap-8"
      >
        <div class="cutbwu">
          <NuxtLink
            to="/contact"
            class="group bg-brand-600 border-brand-500 hover:bg-brand-500 flex cursor-pointer items-center gap-2.75 rounded-full border px-4 py-1.5 shadow-xl transition-colors"
          >
            <div class="light text-xs font-light text-white md:text-sm">
              contact us to build with us
            </div>
            <NuxtImg
              src="/arrow.svg"
              :placeholder="1"
              class="bounce-back w-4 shrink-0 invert transition-all group-hover:ml-3.5"
            />
          </NuxtLink>
        </div>

        <div class="/perspective-container hero-text-large">
          <span class="spt text-nowrap italic drop-shadow-2xl">
            WE DO WHAT IS RIGHT,
          </span>
          <span class="spt text-nowrap italic drop-shadow-2xl">
            NOT WHAT IS EASY!
          </span>
        </div>
        <div
          class="cpt fluid-subtext text-center text-white italic drop-shadow-xl"
        >
          Creating spaces with purpose
        </div>

        <NuxtLink to="/contact" class="animated-cta">
          <AnimatedCtaBtn text="Get Started" class="z-0 bg-white" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
  @reference "tailwindcss";

  /* ==========================================================================
   ROOT HERO
   ========================================================================== */

  .hero {
    position: fixed;
    inset: 0;

    isolation: isolate;
    overflow: hidden;

    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    will-change: transform;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  /* ==========================================================================
   BACKGROUND
   ========================================================================== */

  /* .hero-bg-wrapper {
  position: absolute;
  inset: -10%;

  z-index: 0;

  overflow: hidden;

  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  will-change: transform;

  isolation: isolate;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
} */

  .hero-bg-wrapper {
    position: absolute;
    inset: -10%;

    overflow: hidden;

    isolation: isolate;
  }

  /* .hero-bg-wrapper::after {
  content: "";

  position: absolute;
  inset: 0;

  z-index: 5;

  pointer-events: none;

  background:
    rgba(0, 0, 0, 0.7);

  box-shadow:
    inset 0 0 100px rgba(0, 0, 0, 0.85);
} */

  .hero-bg-img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    user-select: none;
    -webkit-user-select: none;

    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    will-change: transform;

    image-rendering: auto;

    -webkit-user-drag: none;

    pointer-events: none;

    /* Keep the image vivid */
    filter: saturate(2);
  }

  /* Overlay replaces animated brightness filter */
  .hero-overlay {
    position: absolute;
    inset: 0;

    pointer-events: none;

    background: rgba(0, 0, 0, 0.6);

    border-radius: inherit;

    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.85);
  }

  /* ==========================================================================
   HERO CONTENT
   ========================================================================== */

  .heroheader {
    position: relative;

    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;

    isolation: isolate;

    opacity: 0;

    transform: translateZ(1px);
    -webkit-transform: translateZ(1px);

    will-change: transform;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }

  /* ==========================================================================
   TYPOGRAPHY
   ========================================================================== */

  .hero-text-large {
    @apply flex w-full flex-col items-center justify-center text-center font-black;

    line-height: 1.1;

    font-size: clamp(30px, 5vw, 160px);

    color: white;
  }

  .fluid-subtext {
    @apply text-lg text-[#E7E7E7] lg:max-w-160 lg:text-3xl;
  }

  /* ==========================================================================
   CTA
   ========================================================================== */

  .bounce-back {
    transition:
      margin 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  /* ==========================================================================
   GSAP SPLITTEXT SUPPORT
   ========================================================================== */

  .perspective-container {
    perspective: 1200px;
  }

  /* Safari behaves much better WITHOUT preserve-3d */

  .spt,
  .spt *,
  .cpt,
  .cpt * {
    display: inline-block;

    overflow: visible !important;

    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    transform: translateZ(0);
    -webkit-transform: translateZ(0);

    will-change: transform;
  }

  /* ==========================================================================
   SAFARI FIXES
   ========================================================================== */

  @supports (-webkit-touch-callout: none) {
    .hero,
    .hero-bg-wrapper,
    .hero-bg-img,
    .heroheader {
      transform: translateZ(0);
      -webkit-transform: translateZ(0);

      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }

    .heroheader {
      z-index: 999;
    }
  }
</style>
