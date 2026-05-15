<script setup lang="tsx">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SOCIALS = [
  {
    name: "Instagram",
    icon: "i-ph-instagram-logo",
    link: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: "i-ph-facebook-logo",
    link: "https://www.facebook.com/",
  },
  {
    name: "LinkedIn",
    icon: "i-ph-linkedin-logo",
    link: "https://www.linkedin.com/",
  },
  {
    name: "Whatsapp",
    icon: "i-ph-whatsapp-logo",
    link: "https://wa.me/",
  },
  {
    name: "Email",
    icon: "i-ph-envelope-simple",
    link: "mailto:hello@alya.co",
  },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animfooter",
      start: "top 80%",
    },
  });

  tl.fromTo(
    ".animfooter",
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }
  );
});

const handleSubmission = async (e: Event) => {
  console.log("Newsletter Sub:", e);
  return alert("Thank you for subscribing!");
};
</script>

<template>
  <div class="z-0 flex w-full items-center justify-center bg-transparent p-5">
    <div
      class="animfooter flex aspect-[2.11/1] min-h-[500px] size-full h-auto max-w-467.5 flex-col justify-between rounded-[31px] bg-[#0F0F0F] px-10 py-9 text-white lg:px-15.5">
      <div class="flex w-full flex-col gap-8">
        <div class="flex w-full justify-center text-center font-[Switzer] text-[48px] font-bold">
          ALYA.co
        </div>

        <div class="flex flex-col justify-between gap-10 lg:flex-row">
          <div class="flex max-w-125 flex-col gap-6">
            <div class="font-[Haas75] text-[38px] leading-tight">BUILDING TOGETHER</div>
            <div class="max-w-115 font-[Switzer] text-[20px] text-gray-400">
              Transforming visions into structural reality with precision engineering and sustainable design.
            </div>
          </div>

          <div class="flex w-full max-w-125 flex-col gap-5">
            <div class="w-full font-[Switzer] text-[20px]">
              <input placeholder="ENTER YOUR EMAIL" type="text"
                class="w-full border-b border-gray-600 bg-transparent py-4 outline-none focus:border-white transition-colors"
                @keydown.enter="handleSubmission" />
            </div>
            <button
              class="flex w-full items-center justify-center overflow-hidden rounded-full bg-white p-5 text-[20px] font-bold text-black shadow-lg"
              :call-back="handleSubmission">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 lg:flex-row">
        <div class="order-2 mt-6 font-[Switzer] text-[14px] text-gray-500 lg:order-1 lg:mt-0">
          © 2026 ALYA Construction Group. All rights reserved.
        </div>

        <div class="order-1 flex items-center gap-4 lg:order-2">
          <NuxtLink v-for="social in SOCIALS" :key="social.name" :to="social.link" target="_blank"
            class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-600 text-2xl transition-all hover:bg-white hover:text-black">
            <Icon :name="social.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #4b5563;
}
</style>
