<script setup lang="tsx">
  const animate = ref(false);

  onMounted(() => animate.value = true);
</script>

<template>
  <div
    class="absolute top-0 flex w-full z-20 items-center justify-center font-[Inter]"
  >
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-8"
    >
      <NuxtLink
        to="/"
        class="flex transition-all duration-800 items-center gap-2 md:gap-3"
        :class="animate ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-10'"
      >
        <div
          class="flex flex-col justify-center font-[Switzer,sans-serif] text-xs/tight font-semibold md:text-base/tight"
        >
          <div>Alya</div>
          <div>Construction</div>
        </div>
      </NuxtLink>

      <div
        :class="animate ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-10'"
        class="flex flex-1 items-center transition-all duration-500 justify-center text-gray-900">
        <div class="relative flex items-center justify-center max-md:hidden">
          <NavLinks />
        </div>

        <div
          class="flex h-full w-full items-center justify-end px-3 md:hidden">
          <TopSliderSheet />
        </div>
      </div>

      <ActionBtn
        :class="animate ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-10'"
        class="border-2 border-[#4D4D4D] transition-all duration-500 hover:border-black hover:bg-black hover:text-white hover:scale-101 hover:shadow-black/30 p-2 px-3 text-xs md:px-4.5 md:text-sm bg-transparent text-[#5D5D5D] shadow-[0px_15px_35.6px_0px] shadow-black/25"
        :call-back="() => {}"
      >
        Book A Call
      </ActionBtn>
    </div>
  </div>
</template>
