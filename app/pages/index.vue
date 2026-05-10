<script lang="ts" setup>
  import { preloadRouteComponents } from "#app";

  const router = useRouter();
  const animate = ref(false);
  const resourcesLoaded = ref(false);
  const resourcesTimedOut = ref(false);

  let redirectTimeoutId: number;

  const loadOtherResources = async () => {
    // TODO: Handle loading any other page resources before setting 'resourcesLoaded' to true
    await preloadRouteComponents("/home");

    const homePreloadImages = ["/back2.png"];

    const preloadImages = async (srcs: string[]) => {
      const promises = srcs.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      return Promise.all(promises);
    };

    await Promise.all([
      preloadImages(homePreloadImages),
      document.fonts.ready,
      //new Promise((resolve) => window.addEventListener("load", resolve)),
    ]);

    console.log("loaded");
    resourcesLoaded.value = true;

    // INFO: redirect if route is still root after 4s (timeout has passed)
    if (resourcesTimedOut.value) router.replace("/home");
  };

  onMounted(async () => {
    await nextTick();

    animate.value = true;

    loadOtherResources();

    redirectTimeoutId = setTimeout(() => {
      // INFO: redirect after 4s if other resources got loaded before 4s
      if (resourcesLoaded.value) router.replace("/home");
      else resourcesTimedOut.value = true;
    }, 4000);
  });

  onBeforeUnmount(() => {
    clearTimeout(redirectTimeoutId);
    animate.value = false;
  });
</script>

<template>
  <div
    class="flex h-svh w-svw items-center justify-center gap-6 bg-white/90 text-black transition-all ease-in-out"
  >
    <div
      :class="animate ? 'scale-100 opacity-100' : 'scale-200 opacity-0'"
      class="flex items-center justify-center gap-6 transition-all duration-1500"
    >
      <img src="/logo.png" class="size-30" />
      <div
        :class="
          animate ? 'blur-0 max-w-100 opacity-100' : 'max-w-0 opacity-0 blur-xl'
        "
        class="whole-text overflow-hidden font-[Inter] text-8xl font-bold text-nowrap text-black transition-all delay-1300 duration-1000"
      >
        <span
          :class="
            animate
              ? 'text-[#CF6210] text-shadow-black/30 text-shadow-lg'
              : 'text-black'
          "
          class="transition-all delay-2700 duration-1000"
          >ALYA</span
        >
        <span
          :class="animate ? 'text-4xl text-black/75' : 'text-[80px] text-black'"
          class="span-text pt-3 transition-all delay-2700 duration-700"
          >Co.</span
        >
      </div>
    </div>
  </div>
</template>
