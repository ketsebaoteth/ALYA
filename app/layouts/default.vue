<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-white text-white">
    <NavBar />

    <main class="flex flex-col items-center justify-center">
      <slot />
    </main>
  </div>
</template>
