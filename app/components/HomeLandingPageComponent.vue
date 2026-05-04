<script lang="tsx"></script>

<template>
  <div
    class="/p-4 relative flex h-svh min-h-200 w-full max-w-467.5 items-center justify-between px-3 md:px-10"
  >
    <div
      class="/xl:p-10 flex h-full max-w-240 flex-col items-start justify-center gap-5 p-2 md:w-2/3"
    >
      <div class="w-full py-2">
        <!-- NOTE: Tailwind: leading-none === leading-[1] -->
        <span
          class="inline max-h-1/4 bg-linear-[to_top,black_70%,#dcdcdc_100%] box-decoration-clone bg-clip-text leading-none font-semibold text-transparent [-webkit-box-decoration-break:clone] text-shadow-lg max-xl:text-4xl xl:text-7xl 2xl:text-[80px]"
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

      <div class="max-w-170 text-2xl font-bold text-[#696969] max-xl:text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum ha
      </div>

      <!-- TODO: Button does nothing -->
      <GetStartedButton />
    </div>

    <div
      class="flex h-full w-1/3 items-center justify-center overflow-x-clip max-lg:hidden"
    >
      <!-- <img src="/excav.png" class="w-full" /> -->
      <div
        class="absolute right-0 z-20 flex h-full max-h-1/4 max-w-full items-center overflow-x-clip"
      >
        <ModelViewer
          url="/ToyCar.glb"
          class="size-130 min-w-0 overflow-x-clip max-[1700px]:translate-x-10 max-2xl:translate-x-20 min-[1700px]:size-250 xl:size-150 2xl:size-200"
        />
      </div>
    </div>
  </div>
</template>
