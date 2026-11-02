<script setup lang="ts">
  import { ref } from "vue";
  import gsap from "gsap";

  const faqs = ref([
    {
      id: 1,
      title: "Commodity Trading",
      content:
        "Auremin trades and delivers a focused portfolio of commodities across energy, construction, and industrial markets - including petroleum products, bitumen, LNG, cement, sulfuric acid, and critical metals.",
      isOpen: false,
    },
    {
      id: 2,
      title: "Infrastructure Development",
      content:
        "We manage and invest in critical infrastructure projects, ensuring that the foundations of modern industry are built with resilience and long-term sustainability in mind.",
      isOpen: false,
    },
    {
      id: 3,
      title: "Supply Chain Execution",
      content:
        "Reliable logistics, storage, and delivery across complex markets. From sourcing through to last-mile delivery, we manage complex supply chains with precision and reliability.",
      isOpen: true,
    },
    {
      id: 4,
      title: "Sustainability & ESG",
      content:
        "We adhere to the highest global standards for sustainable development, ensuring our footprint is minimized while community impact is maximized.",
      isOpen: false,
    },
  ]);

  // GSAP Animation Logic
  const beforeEnter = (el: any) => {
    el.style.height = "0";
    el.style.opacity = "0";
  };

  const enter = (el: any, done: () => void) => {
    gsap.to(el, {
      height: "auto",
      opacity: 1,
      duration: 0.6,
      ease: "expo.out",
      onComplete: done,
    });
  };

  const leave = (el: any, done: () => void) => {
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: "expo.inOut",
      onComplete: done,
    });
  };

  const toggleFaq = (index: number) => {
    faqs.value.forEach((faq, i) => {
      if (i === index) faq.isOpen = !faq.isOpen;
      else faq.isOpen = false;
    });
  };
</script>

<template>
  <div
    class="/font-[Haas] flex min-h-[90vh] w-full items-center justify-center bg-[#ffffff] p-5 pb-30 text-black lg:p-10"
  >
    <div
      class="flex w-full max-w-7xl flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] lg:flex-row"
    >
      <!-- Left Section -->
      <div
        class="flex w-full flex-col justify-between border-b border-gray-200 bg-gray-50/50 p-10 lg:w-1/2 lg:border-r lg:border-b-0 lg:p-15"
      >
        <div class="flex flex-col gap-6">
          <div
            class="text-brand-600 /font-[Switzer] text-sm font-bold uppercase"
          >
            Inquiries
          </div>
          <span class="text-[clamp(50px,7vw,85px)] font-black">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </span>
        </div>
        <span class="/font-[Switzer] mt-10 max-w-sm text-lg text-gray-600">
          Some questions our enterprise partners frequently ask us. Here are the
          core insights you need.
        </span>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col overflow-y-auto p-10 lg:w-1/2 lg:p-15">
        <div class="mb-12">
          <span class="/font-[Switzer] text-lg text-gray-600">
            From sourcing through to last-mile delivery, we manage complex
            supply chains with precision and reliability.
          </span>
        </div>

        <!-- FAQ Accordion Container -->
        <div class="w-full border-t border-gray-200">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="border-b border-gray-200"
          >
            <button
              class="group flex w-full items-center justify-between py-6 text-left transition-all"
              :class="
                faq.isOpen ? 'opacity-100' : 'opacity-60 hover:opacity-100'
              "
              @click="toggleFaq(index)"
            >
              <div class="flex items-center gap-5">
                <!-- Number Box -->
                <div
                  class="/font-[Switzer] flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-bold transition-colors duration-500"
                  :class="
                    faq.isOpen
                      ? 'bg-brand-600 border-brand-600 text-white shadow-lg'
                      : 'bg-transparent text-gray-500'
                  "
                >
                  0{{ faq.id }}
                </div>

                <span class="text-2xl font-bold">
                  {{ faq.title }}
                </span>
              </div>

              <!-- Plus Icon Animation -->
              <div
                class="relative h-5 w-5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100"
              >
                <div
                  class="absolute top-1/2 h-0.5 w-full rounded-full bg-black"
                  :class="faq.isOpen ? 'bg-brand-600' : ''"
                ></div>
                <div
                  class="absolute left-1/2 h-full w-0.5 rounded-full bg-black transition-transform duration-500"
                  :class="faq.isOpen ? 'bg-brand-600 rotate-90' : 'rotate-0'"
                ></div>
              </div>
            </button>

            <!-- Collapsible Content -->
            <transition
              :css="false"
              @before-enter="beforeEnter"
              @enter="enter"
              @leave="leave"
            >
              <div v-if="faq.isOpen" class="overflow-hidden">
                <div
                  class="/font-[Switzer] pr-5 pb-8 pl-15 text-[17px] text-gray-500"
                >
                  {{ faq.content }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Ensure font-family matches the image aesthetics if available */
  /* .font-haas { */
  /*   font-family: "Haas Grot Text R Web", "Inter", sans-serif; */
  /* } */

  /* Custom scrollbar for the right panel */
  .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
  }

  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: #e2e2e2;
  }
</style>
