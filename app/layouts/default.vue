<script setup lang="tsx"></script>

<template>
  <div
    class="z-0 flex h-max w-screen items-center justify-center bg-white font-[Switzer,sans-serif] text-black"
  >
    <div class="z-0 flex h-full w-full items-center justify-center">
      <NavBar />
      <div class="flex h-full w-full items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>
