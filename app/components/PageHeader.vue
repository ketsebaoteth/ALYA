<script setup lang="ts">
  import gsap from "gsap";
  import { onMounted } from "vue";
  import { SplitText } from "gsap/SplitText";

  const props = defineProps({
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    bgImage: { type: String, default: "/hero1.jpg" },
  });

  onMounted(() => {
    gsap.registerPlugin(SplitText);
    const spl = new SplitText(".page-title", { type: "words,chars" });
    gsap.fromTo(
      spl.chars,
      { opacity: 0, y: 50, rotateX: -90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.02,
        duration: 1,
        ease: "expo.out",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      ".page-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" }
    );
  });
</script>
<template>
  <div
    class="relative flex h-[60vh] max-h-150 min-h-100 w-full items-center justify-center overflow-hidden"
  >
    <div class="absolute inset-0 z-0 bg-gray-950">
      <img
        :src="bgImage"
        class="h-full w-full object-cover opacity-40 mix-blend-overlay"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent"
      ></div>
    </div>
    <div
      class="relative z-10 flex flex-col items-center gap-4 px-5 pt-20 text-center"
    >
      <div
        class="page-title /font-[Haas] text-[clamp(45px,6vw,90px)] font-bold text-white uppercase"
        style="perspective: 1000px"
      >
        {{ props.title }}
      </div>
      <div
        class="page-subtitle /font-[Switzer] mt-4 max-w-2xl text-xl text-gray-300"
      >
        {{ props.subtitle }}
      </div>
    </div>
  </div>
</template>
