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
  <div class="relative text-sm flex gap-10 items-center justify-center max-md:hidden">
    <AnimatedLink v-for="r in NAV_ROUTES" id="main" :key="r.name" :to="r.path" :text="r.name">
    </AnimatedLink>
  </div>
</template>
