<script setup lang="tsx">
  import { NAV_ROUTES } from "~~/shared/utils/constants";
  import gsap from "gsap";
  const route = useRoute();

  let tl: gsap.core.Tween;

  onMounted(async () => {
    await nextTick();

    gsap.set("#svg", {
      opacity: 1,
    });

    tl = gsap.fromTo(
      "#dot",
      {
        opacity: 0,
        width: "0px",
        duration: 1,
      },
      {
        opacity: 1,
        width: "8px",
        duration: 0.2,
        paused: true,
      }
    );
  });
</script>

<template>
  <div class="relative flex items-center justify-center max-md:hidden">
    <NuxtLink
      v-for="r in NAV_ROUTES"
      id="main"
      :key="r.name"
      :to="r.path"
      class="z-30 flex items-center justify-center gap-2 px-2 py-2.5 text-xs transition-all hover:text-white md:px-7 md:text-sm"
      :class="route.path.includes(r.path) ? 'text-white' : 'text-white/70'"
      @click="() => tl?.restart()"
    >
      <div
        id="dot"
        :class="route.path.includes(r.path) ? '' : 'hidden'"
        class="size-1 w-0 rounded-full bg-white"
      />
      <!-- <svg -->
      <!--   id="svg" -->
      <!--   width="16" -->
      <!--   height="16" -->
      <!--   viewBox="0 0 16 16" -->
      <!--   :class="route.path.includes(r.path) ? '' : 'hidden'" -->
      <!--   class="size-2" -->
      <!--   fill="none" -->
      <!--   xmlns="http://www.w3.org/2000/svg" -->
      <!-- > -->
      <!--   <path -->
      <!--     d="M8 0C8 4.41828 11.5817 8 16 8C11.5817 8 8 11.5817 8 16C8 11.5817 4.41828 8 0 8C4.41828 8 8 4.41828 8 0Z" -->
      <!--     fill="white" -->
      <!--   /> -->
      <!-- </svg> -->
      <div>
        {{ r.name }}
      </div>
    </NuxtLink>
  </div>
</template>
