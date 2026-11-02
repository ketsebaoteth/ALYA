<script lang="ts" setup>
  import { onMounted } from "vue";
  const router = useRouter();

  onMounted(() => {
    router.replace("/home");
  });
</script>

<template>
  <div class="h-svh w-svw bg-white"></div>
</template>
