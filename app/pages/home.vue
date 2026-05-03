<script setup lang="tsx">
useHead({
  title: "Home",
});
</script>

<template>
  <!-- INFO: No interactivity no animations no nothing just statics -->
  <div
    class="flex min-h-max w-full flex-col items-center justify-center overflow-x-clip"
  >
    <VeilBackground />
    <div
      class="relative flex h-svh min-h-200 w-full max-w-467.5 items-center justify-center p-4"
    >
      <div
        class="flex h-full max-w-260 flex-col items-start justify-center gap-8 p-8 md:w-2/3 xl:p-10"
      >
        <div class="w-full py-2">
          <span
            class="inline max-h-1/4 bg-linear-[to_top,black_70%,#dcdcdc_100%] box-decoration-clone bg-clip-text leading-[1.15] font-semibold text-transparent [-webkit-box-decoration-break:clone] text-shadow-lg max-xl:text-4xl xl:text-7xl 2xl:text-[80px]"
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

        <div class="max-w-200 text-2xl font-bold text-[#696969] max-xl:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum ha
        </div>

        <!-- TODO: Button does nothing -->
        <div
          class="rounded-full bg-black px-7 py-3 text-lg text-white shadow-xl shadow-black/25 max-xl:text-sm"
        >
          Get Started
        </div>
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

    <div
      class="flex h-svh max-h-350 min-h-200 w-full flex-col items-center pt-20 text-black"
    >
      <div
        class="/467.5 /p-8 flex w-full max-w-415 gap-5 p-12 xl:p-14 2xl:gap-15"
      >
        <div
          class="max-w-2/5 font-semibold text-shadow-lg max-xl:text-4xl xl:text-7xl 2xl:text-[80px]"
        >
          Building Fast And With Quality
        </div>
        <div
          class="z-10 w-3/5 max-w-230 text-lg leading-tight text-black/90 max-xl:text-xs"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
      </div>

      <div class="relative flex h-full w-full items-center justify-center">
        <div class="absolute flex h-full w-full items-center justify-center">
          <!-- NOTE: I used these to hide the edge of the spiral on very large screens -->
          <!-- <div -->
          <!--   class="max-[2180px]: absolute left-0 z-10 hidden h-full w-85 -translate-x-45 -translate-y-15 bg-white blur-xl" -->
          <!-- /> -->
          <!-- <div -->
          <!--   class="max-[2180px]: absolute right-0 z-10 hidden h-full w-85 translate-x-60 bg-white blur-2xl" -->
          <!-- /> -->

          <div class="absolute flex h-full w-full items-center justify-center">
            <img
              src="/spiral_full.png"
              class="absolute h-max w-max scale-110 bg-black/0 min-[2180px]:-translate-x-10 min-[2180px]:scale-120"
            />
          </div>
          <div
            class="absolute flex h-full w-full items-center justify-center p-5 xl:px-20 2xl:px-40"
          >
            <img src="/back-image.png" class="2xl:scale-110" />

            <div
              class="absolute z-10 flex flex-col items-center justify-center gap-45"
            >
              <!-- BUG: These divs are not positioned properly (at least not an every screen size) -->
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
            <img
              src="/spiral_partial.png"
              class="absolute h-max w-max scale-110 bg-black/0 min-[2180px]:-translate-x-10 min-[2180px]:scale-120"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex h-svh max-h-350 min-h-200 w-full max-w-415 flex-col items-center gap-5 p-12 text-black xl:p-14"
    >
      <div
        class="flex w-2/3 max-w-150 justify-center text-center leading-tight font-semibold text-shadow-lg max-xl:text-4xl xl:text-[68px] 2xl:w-1/2"
      >
        What we offer to your business
      </div>
      <div
        class="flex max-w-200 justify-center text-center text-lg leading-tight text-black/90 max-xl:max-w-130 max-xl:text-xs"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>

      <div class="flex w-full max-w-270 items-baseline-last gap-2 pt-14">
        <div
          class="h-150 max-w-1/3 w-full -skew-y-8 rounded-4xl bg-black"
        ></div>
        <div
          class="h-150 max-w-1/3 w-full -translate-y-5 rounded-4xl bg-black"
        ></div>
        <div
          class="h-150 max-w-1/3 w-full skew-y-8 rounded-4xl bg-black"
        ></div>
      </div>
    </div>
  </div>
</template>

<style></style>
