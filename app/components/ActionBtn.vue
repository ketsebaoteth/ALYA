<script lang="ts" setup>
  import gsap from "gsap";
  import type { PropType } from "vue";
  import { SplitText } from "gsap/SplitText";

  const hover = ref<HTMLElement | null>(null);
  const hoverContent = ref<HTMLElement | null>(null);

  const props = defineProps({
    callBack: {
      type: Function as PropType<() => void>,
      default: () => {},
    },
    class: {
      type: String,
      default: "",
    },
  });

  let tl: gsap.core.Timeline;

  onMounted(() => {
    tl = gsap.timeline({
      paused: true,
      defaults: {
        ease: "back.inOut",
      },
    });

    const split = new SplitText(hoverContent.value, {
      type: "chars",
    });

    tl.to(hover.value, {
      yPercent: -100,
      duration: 0.3,
    }).from(
      split.chars,
      {
        yPercent: 120,
        stagger: 0.02,
        duration: 0.4,
        ease: "back.inOut",
      },
      "<"
    );
  });
</script>

<template>
  <button
    class="relative z-10 cursor-pointer overflow-hidden rounded-full transition-all"
    :class="props.class"
    @click="props.callBack"
    @mouseenter="() => tl.restart()"
    @mouseleave="() => tl.reverse()"
  >
    <div class="base relative">
      <div
        class="rounded-full bg-white px-8.25 py-2.75 shadow-[0px_15px_35.6px_0px] shadow-black/5 transition-all"
      >
        <slot />
      </div>
    </div>

    <div
      ref="hover"
      class="absolute inset-0 translate-y-full rounded-full bg-black"
    >
      <div class="flex h-full w-full items-center justify-center">
        <div
          ref="hoverContent"
          class="rounded-full bg-black px-8.25 py-2.75 text-nowrap text-white shadow-[0px_15px_35.6px_0px] shadow-black/5 transition-all"
        >
          <slot />
        </div>
      </div>
    </div>
  </button>
</template>
