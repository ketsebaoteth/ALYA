<script setup lang="tsx">
  import gsap from "gsap";
  import { NAV_ROUTES } from "~~/shared/utils/constants";
  const route = useRoute();
  const expanded = ref(true);

  let timeLine: gsap.core.Timeline;

  onMounted(async () => {
    await nextTick();
    expanded.value = false;
    timeLine = gsap.timeline({ paused: true });

    timeLine
      .from(".overlay", {
        autoAlpha: 0,
        visibility: 0,
        zIndex: -50,
      })
      .to(".overlay", {
        duration: 0.4,
        autoAlpha: 1,
        visibility: 1,
        zIndex: 50,
        ease: "power3.inOut",
        backgroundColor: "#0005",
      })
      .to(".top-sheet", {
        duration: 0.5,
        ease: "power2.out",
        height: "100vh",
        zIndex: 50,
      });
  });

  watch(expanded, (isExpanded) => {
    if (isExpanded) timeLine.play();
    else timeLine.reverse();
  });

  onBeforeUnmount(() => (expanded.value = false));
</script>

<template>
  <div class="flex items-center justify-end">
    <div
      class="overlay fixed top-0 left-0 -z-50 h-svh w-svw bg-transparent text-black/70 opacity-0 backdrop-blur-md transition-all"
      @click="() => (expanded = false)"
    >
      <div
        class="top-sheet absolute top-0 left-0 -z-50 flex h-0 w-svw justify-center overflow-hidden bg-transparent"
      >
        <div
          class="flex h-1/2 w-full flex-col items-center justify-center gap-12 bg-white"
          @click="(e) => e.stopPropagation()"
        >
          <div class="flex flex-col items-center gap-4">
            <NuxtLink
              v-for="r in NAV_ROUTES"
              :key="r.name"
              :to="r.path"
              :class="{ 'bg-black/5 text-black': route.path.includes(r.path) }"
              class="z-30 w-full rounded-xl px-12 py-2.5 text-center text-sm transition-all hover:bg-black/5 hover:text-black"
            >
              {{ r.name }}
            </NuxtLink>
          </div>
          <ActionBtnWithIcon
            :call-back="() => (expanded = false)"
            icon="i-lucide-x"
          />
        </div>
      </div>
    </div>

    <ActionBtnWithIcon
      :call-back="() => (expanded = true)"
      icon="i-lucide-menu"
    />
  </div>
</template>
