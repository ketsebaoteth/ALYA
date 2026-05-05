<script setup lang="tsx"></script>

<template>
  <div
    class="absolute top-0 flex w-full z-20 items-center justify-center font-[Inter]"
  >
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-8"
    >
      <div class="flex items-center gap-2 md:gap-3">
        <div
          class="flex flex-col justify-center font-[Switzer,sans-serif] text-xs/tight font-semibold md:text-base/tight"
        >
          <div>Alya</div>
          <div>Construction</div>
        </div>
      </div>

      <div class="flex flex-1 items-center justify-center text-gray-900">
        <div class="relative flex items-center justify-center max-md:hidden">
          <NavLinks />
        </div>

        <div class="flex h-full w-full items-center justify-end px-3 md:hidden">
          <TopSliderSheet />
        </div>
      </div>

      <ActionBtn
        class="border-2 border-[#4D4D4D] transition-all hover:bg-[#CF6210] p-2 px-3 text-xs md:px-4.5 md:text-sm bg-transparent text-[#5D5D5D] shadow-[0px_15px_35.6px_0px] shadow-black/25"
      >
        Book A Call
      </ActionBtn>
    </div>
  </div>
</template>
