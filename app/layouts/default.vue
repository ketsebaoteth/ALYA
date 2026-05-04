<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-white font-[Switzer,sans-serif] text-black">
    <NavBar />

    <!-- BUG: REMOVED THE PADDING (do not put padding here it will offset the image in Vision component instead i have put the desired padding into individual child) -->
    <main class="flex flex-col items-center justify-center">
      <slot />
    </main>
  </div>
</template>
