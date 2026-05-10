<script setup lang="tsx">
  import gsap from "gsap";

  const route = useRoute();
  // WARN: This component is not refacoted please do not touch
  const animate = ref(false);

  const isHome = computed(() => {
    return route.path === "/" || route.path.includes("home");
  });

  let tl: gsap.core.Timeline;

  const handleCopy = async (e: Event) => {
    const copyBtn = e.target as HTMLElement;

    if (copyBtn) {
      const textToCopy = copyBtn?.innerText;
      await navigator.clipboard.writeText(textToCopy);
    }

    tl.play();

    const id = setTimeout(() => {
      tl.reverse();
      clearTimeout(id);
    }, 2500);
  };

  onMounted(() => {
    animate.value = true;

    tl = gsap.timeline({ paused: true });

    tl.fromTo(
      ".popup",
      {
        translateY: "300px",
        opacity: 0,
        duration: 0.7,
      },
      {
        translateY: "-80px",
        opacity: 1,
        ease: "back.inOut",
        duration: 0.7,
      }
    );
  });
</script>

<template>
  <div
    class="absolute top-0 z-20 flex w-full items-center justify-center font-[Inter]"
  >
    <div class="popup fixed bottom-0 flex w-full items-center justify-center">
      <div
        class="rounded-full bg-gray-800/70 px-5 py-3 text-sm text-white shadow-xl shadow-black/50 backdrop-blur-xl"
      >
        Copied Successfully
      </div>
    </div>

    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between gap-18 p-3 md:p-5 md:px-8"
    >
      <NuxtLink
        to="/home"
        class="flex items-center gap-2 transition-all duration-800 md:gap-3"
        :class="
          animate ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        "
      >
        <div
          class="relative flex flex-col items-center justify-center gap-1.5 text-center font-[FontSpring] text-lg font-bold text-white transition-all hover:scale-106 md:text-2xl"
        >
          <div>
            ALYA
            <svg
              v-show="isHome"
              width="16"
              height="16"
              class="/-translate-y-1.5 absolute right-[calc(50%-6px)] -bottom-3 size-3"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C8 4.41828 11.5817 8 16 8C11.5817 8 8 11.5817 8 16C8 11.5817 4.41828 8 0 8C4.41828 8 8 4.41828 8 0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </NuxtLink>

      <div
        :class="
          animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        "
        class="flex flex-1 items-center justify-start text-gray-900 transition-all duration-500"
      >
        <NavLinks />
      </div>

      <div class="flex h-full w-full items-center justify-end px-3 md:hidden">
        <TopSliderSheet />
      </div>

      <div class="flex cursor-pointer flex-col gap-0">
        <div @click="handleCopy">+251989954323</div>
        <div @click="handleCopy">+251989954324</div>
      </div>
    </div>
  </div>
</template>
