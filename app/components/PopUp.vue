<template>
  <div
    class="popup fixed bottom-0 left-1/2 z-900 flex items-center justify-center overflow-hidden bg-white shadow-xl pointer-events-none">
    <div class="popup-content whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-800 opacity-0">
      Copied to ClipBoard
    </div>
  </div>
</template>

<style scoped>
.popup {
  height: 44px;
  border-radius: 999px;
  transform-origin: center center;
  will-change: transform, width, opacity;
}
</style>
