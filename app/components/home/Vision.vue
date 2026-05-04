<script setup lang="ts">

</script>

<template>
  <div class="flex h-svh max-h-350 min-h-200 w-full flex-col items-center pt-20 text-black">
    <div class="/467.5 /p-8 flex w-full max-w-415 gap-5 p-12 xl:p-14 2xl:gap-15">
      <div class="max-w-2/5 font-semibold text-shadow-lg max-xl:text-4xl xl:text-7xl 2xl:text-[80px]">
        Building Fast And With Quality
      </div>
      <div class="z-10 w-3/5 max-w-230 text-lg leading-tight text-black/90 max-xl:text-xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>

    <div class="relative flex h-full w-full items-center justify-center">
      <div class="absolute flex h-full w-full items-center justify-center">

        <div class="absolute flex h-full w-full items-center justify-center">
          <img src="/spiral_full.png"
            class="absolute h-max w-max scale-110 bg-black/0 min-[2180px]:-translate-x-10 min-[2180px]:scale-120" />
        </div>
        <div class="absolute flex h-full w-full items-center justify-center p-5 xl:px-20 2xl:px-40">
          <img src="/back-image.png" class="2xl:scale-110" />

          <div class="absolute z-10 flex flex-col items-center justify-center gap-45">
            <!-- BUG: These divs are not positioned properly (at least not on every screen size) -->
            <div class="z-10 max-w-50 translate-x-90 font-bold xl:text-2xl">
              Completed With Quality
            </div>
            <div class="flex flex-col font-bold">
              <div class="text-4xl xl:text-5xl">15 +</div>
              <div class="text-k">projects</div>
            </div>
          </div>
        </div>
        <div class="absolute flex h-full w-full items-center justify-center">
          <img src="/spiral_partial.png"
            class="absolute h-max w-max scale-110 bg-black/0 min-[2180px]:-translate-x-10 min-[2180px]:scale-120" />
        </div>
      </div>
    </div>
  </div>

</template>
