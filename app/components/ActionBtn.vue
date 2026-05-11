<script lang="ts" setup>
  import gsap from "gsap";
  import type { PropType } from "vue";
  import { SplitText } from "gsap/SplitText";

  const hover = ref<HTMLElement | null>(null);
  const hoverContent = ref<HTMLElement | null>(null);

  const props = defineProps({
    callBack: {
      type: Function as PropType<(e: Event) => void>,
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

    tl.fromTo(
      hover.value,
      {
        yPercent: 0,
        duration: 0.23,
      },
      {
        yPercent: -105,
        duration: 0.23,
      },
      "<"
    ).from(
      split.chars,
      {
        yPercent: 120,
        opacity: 0,
        stagger: 0.02,
        delay: 0.05,
        duration: 0.34,
        ease: "back.inOut",
      },
      "<"
    );
  });
</script>

<template>
  <button
    class="relative z-10 cursor-pointer"
    :class="props.class"
    @click="props.callBack"
    @mouseenter="() => tl.restart()"
    @mouseleave="() => tl.reverse()"
  >
    <div class="base relative">
      <div class="bg-white/ rounded-full px-8.25 py-2.75 transition-all">
        <slot />
      </div>
    </div>

    <div
      ref="hover"
      class="absolute z-20 h-[105%] w-[105%] translate-y-[105%] rounded-full bg-black"
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
