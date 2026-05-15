<script setup lang="ts">
import { ref } from 'vue';
import gsap from 'gsap';

const faqs = ref([
  {
    id: 1,
    title: 'Commodity Trading',
    content: 'Auremin trades and delivers a focused portfolio of commodities across energy, construction, and industrial markets - including petroleum products, bitumen, LNG, cement, sulfuric acid, and critical metals.',
    isOpen: false
  },
  {
    id: 2,
    title: 'Infrastructure Development',
    content: 'We manage and invest in critical infrastructure projects, ensuring that the foundations of modern industry are built with resilience and long-term sustainability in mind.',
    isOpen: false
  },
  {
    id: 3,
    title: 'Supply Chain Execution',
    content: 'Reliable logistics, storage, and delivery across complex markets. From sourcing through to last-mile delivery, we manage complex supply chains with precision and reliability.',
    isOpen: true
  }
]);

// GSAP Animation Logic
const beforeEnter = (el: any) => {
  el.style.height = '0';
  el.style.opacity = '0';
};

const enter = (el: any, done: () => void) => {
  gsap.to(el, {
    height: 'auto',
    opacity: 1,
    duration: 0.6,
    ease: 'expo.out',
    onComplete: done
  });
};

const leave = (el: any, done: () => void) => {
  gsap.to(el, {
    height: 0,
    opacity: 0,
    duration: 0.5,
    ease: 'expo.inOut',
    onComplete: done
  });
};

const toggleFaq = (index: number) => {
  faqs.value.forEach((faq, i) => {
    if (i === index) faq.isOpen = !faq.isOpen;
    else faq.isOpen = false; // Optional: Auto-close others like a true accordion
  });
};
</script>

<template>
  <div class="w-full h-screen my-18 text-black flex p-10 font-[Haas]">
    <!-- Left Section -->
    <div class="border rounded-l-3xl gap-8 border-gray-500 p-10 border-r-0 w-full h-full flex justify-end flex-col">
      <span class="text-[100px] leading-[100%] font-extrabold w-full">Frequently Asked Questions</span>
      <span class="w-80 text-gray-600">Some questions our customers ask about us we already answered for you</span>
    </div>

    <!-- Right Section -->
    <div class="border rounded-r-3xl  p-10 border-gray-500 w-full h-full flex flex-col overflow-y-auto">
      <div class="mb-12">
        <span class="text-gray-600">
          Auremin trades and delivers a focused portfolio of commodities across energy, construction, and industrial
          markets - including petroleum products, bitumen, LNG, cement, sulfuric acid, and critical metals. From
          sourcing through to last-mile delivery, we manage complex supply chains with precision and reliability.
        </span>
      </div>

      <!-- FAQ Accordion Container -->
      <div class="w-full border-t border-gray-500">
        <div v-for="(faq, index) in faqs" :key="faq.id" class="border-b border-gray-500">
          <button @click="toggleFaq(index)"
            class="w-full flex items-center justify-between py-6 text-left group transition-all"
            :class="faq.isOpen ? 'opacity-100' : 'opacity-40 hover:opacity-100'">
            <div class="flex items-center gap-5">
              <!-- Number Box -->
              <div
                class="w-10 h-10 flex items-center justify-center border border-gray-500 text-sm transition-all duration-500"
                :class="faq.isOpen ? 'bg-black text-white' : 'bg-transparent text-black'">
                {{ faq.id }}
              </div>

              <span class="text-3xl font-medium tracking-tight">
                {{ faq.title }}
              </span>
            </div>

            <!-- Plus Icon Animation -->
            <div class="relative w-6 h-6">
              <div class="absolute top-1/2 w-full h-[1px] bg-black"></div>
              <div class="absolute left-1/2 h-full w-[1px] bg-black transition-transform duration-500"
                :class="faq.isOpen ? 'rotate-90' : 'rotate-0'"></div>
            </div>
          </button>

          <!-- Collapsible Content -->
          <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
            <div v-if="faq.isOpen" class="overflow-hidden">
              <div class="pl-[60px] pb-8 pr-10 text-lg text-gray-600 leading-snug">
                {{ faq.content }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure font-family matches the image aesthetics if available */
.font-haas {
  font-family: 'Haas Grot Text R Web', 'Inter', sans-serif;
}

/* Custom scrollbar for the right panel */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #e2e2e2;
}
</style>
