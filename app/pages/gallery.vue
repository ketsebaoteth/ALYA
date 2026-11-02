<script setup lang="ts">
  import { ref } from "vue";
  useHead({ title: "Site Gallery" });
  const images = [
    "/pal1.jpg",
    "/test3.jpg",
    "/pal39.jpeg",
    "/pal2.jpeg",
    "/pal17.jpg",
    "/pal40.jpg",
    "/pal60.jpg",
    "/pal48.jpg",
    "/pal44.jpg",
    "/pal46.jpg",
    "/pal32.jpeg",
    "/pal47.jpg",
    "/pal54.jpg",
    "/pal55.jpg",
    "/pal56.jpg",
    "/pal57.jpg",
    "/pal58.jpg",
    "/pal59.jpg",
    "/pal50.jpg",
    "/pal52.jpg",
    "/pal35.jpeg",
    "/pal5.jpeg",
    "/pal41.jpg",
    "/pal19.jpg",
    "/pal33.jpeg",
    "/pal4.jpeg",
    "/pal30.jpeg",
    "/pal49.jpg",
    "/pal42.jpg",
    "/pal37.jpeg",
    "/pal53.jpg",
    "/pal45.jpg",
    "/pal51.jpg",
    "/pal7.jpeg",
    "/pal31.jpeg",
    "/work14.jpg",
    "/pal18.jpeg",
    "/pal10.jpeg",
    "/pal12.jpeg",
    "/pal34.jpeg",
    "/pal36.jpeg",
    "/pal39.jpg",
  ];

  const selectedImage = ref<string | null>(null);
  const openModal = (img: string) => {
    selectedImage.value = img;
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    selectedImage.value = null;
    document.body.style.overflow = "";
  };
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Site Gallery"
      subtitle="A visual journey through our active and completed enterprise builds."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about2.png"
    />

    <div class="w-full max-w-350 px-5 py-30">
      <div
        class="grid grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          class="group relative block h-125 w-full cursor-pointer overflow-hidden rounded-2xl"
          @click="openModal(img)"
        >
          <NuxtImg
            :src="img"
            :placeholder="1"
            class="absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            class="bg-brand-900/40 absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100"
          ></div>
        </div>
      </div>
    </div>
    <HomeFooter />

    <!-- Image Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center bg-gray-950/90 p-5 backdrop-blur-sm"
      @click="closeModal"
    >
      <NuxtImg
        :src="selectedImage"
        :placeholder="1"
        class="inset-0 h-full max-h-[80vh] min-h-[60svh] w-full max-w-[80vw] min-w-[60svw] overflow-hidden rounded-lg object-contain shadow-2xl"
        @click.stop
      />

      <button
        class="absolute top-10 right-10 p-2 text-white transition-colors hover:text-red-500"
        @click="closeModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
