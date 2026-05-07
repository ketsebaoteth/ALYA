<script lang="ts" setup>
  import type { PropType } from "vue";

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
</script>

<template>
  <button
    class="z-10 cursor-pointer rounded-full transition-all"
    :class="props.class"
    @click="props.callBack"
  >
    <slot />
  </button>
</template>
