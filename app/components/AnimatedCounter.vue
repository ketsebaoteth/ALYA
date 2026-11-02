<script setup lang="ts">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { ref, onMounted } from "vue";

  const props = defineProps({
    target: { type: Number, required: true },
    prefix: { type: String, default: "" },
    suffix: { type: String, default: "" },
    duration: { type: Number, default: 2 },
  });

  const displayValue = ref(0);
  const triggerRef = ref(null);

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const obj = { val: 0 };
    gsap.to(obj, {
      val: props.target,
      duration: props.duration,
      ease: "power2.out",
      onUpdate: () => {
        displayValue.value = Math.floor(obj.val);
      },
      scrollTrigger: {
        trigger: triggerRef.value,
        start: "top 85%",
      },
    });
  });
</script>

<template>
  <span ref="triggerRef" class="inline-block">
    {{ prefix }}{{ displayValue }}{{ suffix }}
  </span>
</template>
