<script lang="ts" setup></script>

<template>
  <!-- FIX: Padded also here instead of layout -->
  <div
    class="relative flex h-svh min-h-200 w-full max-w-467.5 items-center justify-center p-6"
  >
    <div
      class="flex h-full max-w-260 flex-col items-start justify-center gap-4 p-8 max-lg:items-center md:w-2/3 xl:p-6"
    >
      <div class="w-full max-w-170 py-2 max-lg:text-center">
        <span
          class="hero-text-background inline max-h-1/4 bg-clip-text leading-none font-black text-transparent max-xl:text-4xl lg:text-[70px] xl:text-7xl 2xl:text-[70px]"
        >
          We Build For A
          <span
            class="bg-linear-to-br from-[#FFC290] via-[#FFA250] to-[#DF7210] bg-clip-text"
          >
            Better
          </span>
          Future Not Just For The Sake Of Building
        </span>
      </div>

      <div
        class="max-w-150 text-xl leading-[1.15] font-bold text-gray-800 max-xl:text-xl max-lg:text-center"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum ha
      </div>
      <ActionBtn class="mt-3">Get Started</ActionBtn>
    </div>

    <div
      class="flex h-full w-1/3 items-center justify-center overflow-x-clip max-lg:hidden"
    >
      <div
        class="absolute right-0 z-20 flex h-full max-h-1/4 max-w-full items-center overflow-x-clip"
      >
        <ModelViewer
          url="/ToyCar.glb"
          class="size-250 min-w-0 translate-x-15 overflow-x-clip max-2xl:translate-x-20 lg:size-110 xl:size-130 2xl:size-160"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .hero-text-background {
    background-image: linear-gradient(to top, black 70%, #dcdcdc 100%);
  }
</style>
