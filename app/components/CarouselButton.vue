<script setup lang="tsx">
  const props = defineProps({
    image: { type: String, default: "" },
    callBack: { type: Function as PropType<() => void>, default: () => {} },
  });
</script>

<template>
  <div
    class="flex items-center justify-center rounded-full border border-[#FF8811] p-3 transition-all hover:bg-black/8 lg:p-5"
    @click="props.callBack"
  >
    <img :src="props.image" class="size-6 lg:size-9.5" />
  </div>
</template>
