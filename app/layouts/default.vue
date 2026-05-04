<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-white text-black">
    <NavBar />

    <main class="flex flex-col items-center justify-center p-4">
      <slot />
    </main>
  </div>
</template>
