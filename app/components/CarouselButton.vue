<script setup lang="tsx">
const props = defineProps({
  image: {type: String, default: ""},
  callBack: {type: Function as PropType<() => void>, default: () => {}}
})
</script>

<template>
  <div @click="props.callBack" class="border border-[#FF8811] lg:p-5 p-3 hover:bg-black/8 transition-all rounded-full flex items-center justify-center">
    <img
      :src="props.image"
      class="lg:size-9.5 size-6"
    />
  </div>
</template>
