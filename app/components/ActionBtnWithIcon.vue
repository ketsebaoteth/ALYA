<script setup lang="tsx">
  const props = defineProps({
    icon: { type: String, default: "" },
    callBack: { type: Function as PropType<() => void>, default: () => {} },
  });
</script>

<template>
  <div
    class="z-30 flex cursor-pointer items-center justify-center rounded-2xl p-1 transition-all hover:bg-gray-500/70"
    @click="props.callBack"
  >
    <Icon :name="props.icon" />
  </div>
</template>
