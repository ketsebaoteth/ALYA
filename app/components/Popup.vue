<script lang="tsx">
  const props = defineProps({
    class: { type: String, default: "" },
  });
</script>

<template>
  <div
    :class="props.class"
    class="fixed bottom-0 z-900 flex w-full items-center justify-center opacity-0"
  >
    <div
      class="rounded-full bg-gray-800/70 px-5 py-3 text-sm text-white shadow-xl shadow-black/50 backdrop-blur-xl"
    >
      Copied Successfully
    </div>
  </div>
</template>
