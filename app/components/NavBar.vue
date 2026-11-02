<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
  import { ref, onMounted /* computed */ } from "vue";
  // import { useRoute } from "vue-router";

  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

  // const route = useRoute();
  // const isHome = computed(
  //   () => route.path === "/" || route.path.includes("home")
  // );

  const PHONE_NO = "+251 949007777";

  onMounted(() => {
    gsap.set(".nav-logo-draw", { strokeWidth: 5 });
    gsap.fromTo(
      [".nav-logo-draw", ".nav-red-draw"],
      { drawSVG: "0%", fill: "transparent", stroke: "white" },
      {
        delay: 8,
        drawSVG: "100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".nav-logo-draw", {
            fill: "black",
            //strokeWidth: 0,
            stroke: "black",
            duration: 0.3,
          });
          gsap.to(".nav-red-draw", {
            fill: "red",
            stroke: "#0000",
            duration: 0.3,
          });
          gsap.to(
            ".backsvg",
            // {
            //   opacity: 0,
            // },
            {
              opacity: 1,
              delay: 0,
              duration: 1,
            }
          );
        },
      }
    );

    const navTl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.6 },
      delay: 5,
    });

    navTl
      .fromTo(
        ".nav-left",
        {
          x: -200,
          opacity: 0,
          rotateY: 15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
          delay: 0.5,
        }
      )
      .fromTo(
        ".nav-right",
        {
          x: 200,
          opacity: 0,
          rotateY: -15,
        },
        {
          x: 0,
          opacity: 1,
          rotateY: 0,
        },
        "<"
      );
  });

  let copyTl: any;
  onMounted(() => {
    copyTl = gsap.timeline({ paused: true });
    copyTl.fromTo(
      ".popup",
      { scale: 0.8, y: 10, opacity: 0 },
      { scale: 1, y: 55, opacity: 1, duration: 0.4, ease: "back.out(2)" }
    );
  });

  const handleCopy = async (num: string) => {
    await navigator.clipboard.writeText(num);
    copyTl.play(0);
    setTimeout(() => copyTl.reverse(), 1800);
  };

  const isAmharic = ref(false);
  // const toggleLanguage = () => {
  //   isAmharic.value = !isAmharic.value;
  //
  //   if (isAmharic.value) {
  //     // Translate to Amharic
  //     document.cookie = `googtrans=/en/am; path=/`;
  //     document.cookie = `googtrans=/en/am; domain=${window.location.hostname}; path=/`;
  //   } else {
  //     // Revert to English by deleting the translate cookies
  //     document.cookie =
  //       "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  //     document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${window.location.hostname}; path=/;`;
  //   }
  //
  //   window.location.reload();
  // };

  onMounted(() => {
    if (
      document.cookie.includes("googtrans=/en/am") ||
      document.cookie.includes("googtrans=/auto/am")
    ) {
      isAmharic.value = true;
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = function () {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,am",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  });

  const replaySVG = () => {
    gsap.killTweensOf(".nav-logo-draw");
    gsap.set(".nav-logo-draw", { strokeWidth: 5 });
    gsap.fromTo(
      ".backsvg",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.5,
        duration: 1,
      }
    );
    gsap.fromTo(
      [".nav-logo-draw", ".nav-red-draw"],
      { drawSVG: "0%", fill: "transparent", stroke: "white" },
      {
        drawSVG: "100%",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(".nav-logo-draw", {
            fill: "black",
            stroke: "black",
            // strokeWidth: 0,
            duration: 0.3,
          });
          gsap.to(".nav-red-draw", {
            fill: "red",
            stroke: "#0000",
            duration: 0.3,
          });
        },
      }
    );
  };
</script>

<template>
  <nav
    class="perspective-1000 pointer-events-none fixed top-0 left-0 z-45 flex w-full items-start justify-between p-3 md:p-5"
  >
    <div
      class="nav-pill nav-left nav-container pointer-events-auto flex items-center gap-8 rounded-full border border-white/15 bg-black/35 p-2 px-4 shadow-2xl backdrop-blur-xl transition-all duration-300 md:px-6"
    >
      <div id="google_translate_element" class="hidden"></div>
      <NuxtLink
        to="/home"
        class="group flex items-center gap-4 pt-1 no-underline"
        @mouseenter="replaySVG"
      >
        <div
          class="bg-white/ relative flex h-5.5 w-6 -translate-y-0.5 scale-150 items-center justify-center p-0.5"
        >
          <div
            class="backsvg /w-full absolute inset-0 h-[95%] origin-center -translate-x-[0.1px] -translate-y-[0.1px] scale-108 bg-white/90 opacity-0 [clip-path:polygon(50%_0%,0%_100%,100%_100%)]"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 238.56 205.68"
            class="inset-0/ h-5./5 w-auto/ /-translate-y-0.5 /scale-150 absolute h-full w-full"
          >
            <polyline
              class="nav-red-draw"
              fill="red"
              stroke="red"
              stroke-width="6"
              points="187.66 120.15 168.3 120.15 108.87 17.84 118.68 1.04 187.66 120.15"
            />
            <g>
              <path
                class="nav-logo-draw"
                fill="currentColor"
                stroke-width="6"
                d="m46.52,124.65l22.95,41.52h-19.78l-2.75-5.22h-9.55l-8.41-.03-1.42-.03-1.88,3.49c-.46.87-1.03,1.79-1.03,1.79h-1.88s-.04-.2-.04-.31c0-.25.19-.71.56-1.39.37-.67,1.67-2.9,3.9-6.66l19.35-33.16m-8.73,18.99l-4.98,8.39-3.98,6.9,8.5.12,8.54-.12-8.07-15.29Z"
              />
              <path
                class="nav-logo-draw"
                fill="black"
                stroke-width="6"
                d="m89.61,127.23l-.11,5.96-.11,9.5.03,6.94.12,14.68,2.05.03,12.19-.2,2.22-.03c1.12,0,1.68.34,1.68,1.02,0,.59-.3.92-.91.98-.13.01-.57.04-1.31.05h-33.37l.08-10.84.06-6.64.05-7.54-.11-11.46.03-2.46h17.43"
              />
              <polyline
                class="nav-logo-draw"
                fill="black"
                stroke-width="6"
                points="128.6 127.23 128.6 129.23 128.43 144.87 128.6 166.17 111.14 166.17 111.31 142.87 111.12 128.63 111.14 127.23 128.6 127.23"
              />
              <path
                class="nav-logo-draw"
                fill="black"
                stroke-width="6"
                d="m169.52,127.23h2.48l-23.06,38.93h-1.88s-.27-.22-.13-.54c.22-.5,3.94-6.67,3.94-6.67l-18.32-31.73h19.38l8.82,14.93,8.78-14.93"
              />
              <path
                class="nav-logo-draw"
                fill="black"
                stroke-width="6"
                d="m76.69,119.34c0-3.99,2.79-10.4,8.35-19.22.11-.14,3.64-5.14,10.57-14.96l-6.23.75c-.46.05-.84.08-1.15.08-1.81,0-2.84-1.2-3.11-3.59v.03s0-.08,0-.08v.05c.06-.26.09-3.5.09-9.71,0-1.41-.41-2.27-1.22-2.58l5.18-.61c1.67-.3,3.06-.45,4.17-.45.65,0,1.23.05,1.74.15.77.15,1.22.73,1.37,1.74.05.25.07,1.27.07,3.04v10.04l10.95-1.15c-.1.15-3.01,4.6-8.74,13.37l8.96-1.67c1.52-.31,2.56-.46,3.11-.46,2.94,0,5.02,2.23,6.23,6.7.41,1.42.84,3.9,1.28,7.44.36,2.9.72,5.78,1.08,8.66.2,1.33.47,2.39.83,3.24h27.66l-49.25-84.78-49.49,84.78h27.62c-.05-.25-.08-.52-.08-.81"
              />
            </g>
            <path
              class="nav-red-draw"
              fill="red"
              stroke="red"
              stroke-width="6"
              d="m190.71,125.01s-22.95,38.79-23.33,39.46c-.37.68-.56,1.39-.56,1.39,0,.12.2.32.2.32h1.72s2.91-5.29,2.91-5.29l1.42.03,8.41.03h10.52l13.07,22.5-192.9.05-10,17.12,232.34-.23-43.8-75.39m-9.27,34.03l-8.51-.12,3.99-6.9,4.99-8.46,8.93,15.37-9.4.11Z"
            />
          </svg>
        </div>

        <span
          class="/font-[FuturaExtraBold]! -translate-y-px text-xl font-black text-white transition-transform group-hover:scale-101"
        >
          ALIYA
          <span class="/font-[Futura]! hidden text-lg font-thin md:inline">
            CONSTRUCTION PLC
          </span>
          <span class="/font-[Futura]! text-lg font-thin md:hidden">CO.</span>
        </span>
        <div
          v-if="false"
          class="ml-1 size-1.5 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
        />
      </NuxtLink>
    </div>

    <div
      class="nav-pill nav-right nav-container pointer-events-auto flex items-center gap-4 rounded-full border border-white/15 bg-black/35 p-0 px-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:px-6"
    >
      <!-- @click="toggleLanguage" --
      <button
        class="mr-2 border-r border-white/10 pr-6 text-xs font-black text-white/80 uppercase transition-colors hover:text-white lg:block"
      >
        {{ isAmharic ? "AM" : "EN" }}
      </button -->
      <div class="flex py-2 min-[1300px]:hidden">
        <TopSliderSheet />
      </div>

      <div class="hidden items-center gap-0 min-[1300px]:flex">
        <NavLinks />
      </div>
      <div class="h-5 w-px bg-gray-900/60" />
      <div class="relative flex items-center">
        <span
          class="cursor-pointer rounded-full text-xs font-semibold text-white transition-colors hover:font-extrabold"
          @click="() => handleCopy(PHONE_NO)"
        >
          {{ PHONE_NO }}
        </span>
        <div
          class="popup pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-[7px] font-black text-black opacity-0 shadow-xl"
        >
          COPIED
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .perspective-1000 {
    perspective: 1000px;
  }

  .nav-pill {
    opacity: 0;
    will-change: transform, opacity;
  }

  .nav-left {
    transform: translateX(-200px) rotateY(15deg);
  }

  .nav-right {
    transform: translateX(200px) rotateY(-15deg);
  }

  .nav-container {
    box-shadow:
      inset 0 0.5px 0 rgba(255, 255, 255, 0.2),
      0 20px 50px rgba(0, 0, 0, 0.2);
    transform-style: preserve-3d;
  }

  .nav-container span,
  .nav-container .cursor-pointer,
  :deep(.animated-link) {
    mix-blend-mode: difference;
    color: #fff !important;
  }

  :deep(.animated-link) {
    font-size: 10px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: all 0.3s ease;
  }

  :deep(body) {
    top: 0 !important;
  }
  :deep(.skiptranslate) {
    display: none !important;
  }
</style>
