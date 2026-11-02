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
  <div class="relative flex items-center justify-center text-xs max-md:hidden">
    <AnimatedLink
      v-for="r in NAV_ROUTES"
      id="main"
      :key="r.name"
      :to="r.path"
      :text="r.name"
      class="p-3"
      :class="
        route.path.includes(r.path.toLowerCase())
          ? 'scale-120 font-black text-white'
          : 'text-gray-300'
      "
    ></AnimatedLink>
  </div>
</template>
