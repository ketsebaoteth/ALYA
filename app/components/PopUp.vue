<template>
  <div
    class="popup pointer-events-none fixed bottom-0 left-1/2 z-900 flex items-center justify-center overflow-hidden bg-white shadow-xl"
  >
    <div
      class="popup-content px-6 py-3 text-sm font-medium whitespace-nowrap text-gray-800 opacity-0"
    >
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
