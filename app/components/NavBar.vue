<script setup lang="tsx"></script>

<template>
  <div class="absolute top-0 flex w-full items-center justify-center">
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-8"
    >
      <div class="flex items-center gap-2 md:gap-3">
        <div
          class="flex flex-col justify-center text-xs/tight font-extrabold md:text-base/tight"
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

      <ActionBtn>Book A Call</ActionBtn>
    </div>
  </div>
</template>
