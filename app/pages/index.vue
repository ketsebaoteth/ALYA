<script lang="ts" setup>
  const router = useRouter();
  const animate = ref(false);
  const resourcesLoaded = ref(false);
  const resourcesTimedOut = ref(false);

  let redirectTimeoutId: number;

  const loadOtherResources = async () => {
    // TODO: Handle loading any other page resources before setting 'resourcesLoaded' to true
    //
    //
    //
    //
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
  <div class="transition-all ease-in-out w-svw h-svh gap-6 flex bg-white/90 text-black items-center justify-center">
  <div :class="animate ? 'scale-100 opacity-100' : 'scale-200 opacity-0'" class="duration-1500 transition-all flex gap-6 items-center justify-center">
    <img src="/logo.png" class="size-30" />
    <div :class="animate ? 'max-w-100 opacity-100 blur-0' : 'max-w-0 blur-xl opacity-0'" class="overflow-hidden delay-1300 duration-1000 transition-all whole-text text-black text-8xl font-bold font-[Inter]">
      <span :class="animate ? 'text-[#CF6210] text-shadow-lg text-shadow-black/30' : 'text-black'" class="transition-all delay-2700 duration-1000">ALYA</span>
      <span :class="animate ? 'text-black/75 text-4xl' : 'text-black text-[80px]'" class="pt-3 delay-2700 duration-700 span-text transition-all">Co.</span></div>
    </div>
  </div>
</template>
