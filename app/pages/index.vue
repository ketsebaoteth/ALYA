<script lang="ts" setup>
  const router = useRouter();
  const animate = ref(false);

  let redirectTimeout;
  onMounted(async () => {
    await nextTick();

    animate.value = true

    redirectTimeout = setTimeout(() => router.replace("/home"), 4000);
  });

  onBeforeUnmount(() => clearTimeout(redirectTimeout));
</script>

<template>
  <div>
    <!-- NOTE: Intro animation page -->
    <div class="transition-all w-svw h-svh gap-6 flex bg-white/90 text-black items-center justify-center">
    <div :class="animate ? 'scale-100 opacity-100' : 'scale-200 opacity-0'" class="duration-1500 transition-all flex gap-6 items-center justify-center">
      <img src="/logo.png" class="delay-2000 duration-1000 transition-all size-30" />
      <div :class="animate ? 'max-w-100' : 'max-w-0'" class="overflow-hidden delay-1300 duration-1000 transition-all whole-text text-black text-8xl font-bold font-[Inter]">
	      <span :class="animate ? 'text-[#E0500E]' : 'text-black'" class="transition-all delay-2700 duration-1000">ALYA</span>
	      <span :class="animate ? 'text-black/75 text-4xl' : 'text-black text-7xl'" class=" pt-3 delay-2700 duration-700 span-text transition-all">Co.</span></div>
      </div>
    </div>
    
  </div>
</template>
