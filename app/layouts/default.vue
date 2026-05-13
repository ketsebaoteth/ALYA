<script setup lang="ts">
  import CursorBlob from "~/components/CursorBlob.vue";
  const loaded = ref(false);

  onMounted(() =>
    window.addEventListener("mousemove", () => {
      loaded.value = true;
      window.removeEventListener("mousemove", () => {});
    })
  );
</script>

<template>
  <div class="min-h-screen bg-white text-white">
    <NavBar />
    <CursorBlob class="loaded ? '' : 'hidden'" />

    <main class="flex flex-col items-center justify-center">
      <slot />
    </main>
  </div>
</template>
