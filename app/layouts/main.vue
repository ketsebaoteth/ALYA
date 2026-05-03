<script setup lang="tsx"></script>

<template>
  <NuxtLayout name="default">
    <div class="z-0 flex h-max w-screen items-center justify-center text-black">
      <div class="z-0 flex h-full w-full items-center justify-center">
        <NavBar />
        <div class="flex h-full w-full items-center justify-center">
          <slot />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
