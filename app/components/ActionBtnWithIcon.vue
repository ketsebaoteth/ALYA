<script setup lang="tsx">
  const props = defineProps({
    icon: { type: String, default: "" },
    callBack: { type: Function as PropType<() => void>, default: () => {} },
    class: { type: String, default: "" },
  });
</script>

<template>
  <div
    class="z-30 flex cursor-pointer items-center justify-center rounded-2xl p-2 transition-all hover:bg-gray-500/30"
    :class="props.class"
    @click="props.callBack"
  >
    <Icon :name="props.icon" />
  </div>
</template>
