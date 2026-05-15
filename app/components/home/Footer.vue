<script setup lang="tsx">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import ActionBtn from "../ActionBtn.vue";

  const SOCIALS = [
    {
      name: "Instagram",
      icon: "i-ph-instagram-logo",
      link: "https://www.instagram.com/",
    },
    {
      name: "X",
      icon: "i-ph-x-logo",
      link: "https://x.com/",
    },
    {
      name: "Facebook",
      icon: "i-ph-facebook-logo",
      link: "https://www.facebook.com/",
    },
    {
      name: "YouTube",
      icon: "i-ph-youtube-logo",
      link: "https://www.youtube.com/",
    },
    {
      name: "TikTok",
      icon: "i-ph-tiktok-logo",
      link: "https://www.tiktok.com/",
    },
    {
      name: "Whatsapp",
      icon: "i-ph-whatsapp-logo",
      link: "https://wa.me/",
    },
    {
      name: "Telegram",
      icon: "i-ph-telegram-logo",
      link: "https://t.me/",
    },
    {
      name: "Email",
      icon: "i-ph-envelope-simple",
      link: "mailto:",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animfooter",
        start: "top 60%",
      },
    });

    tl.fromTo(
      ".animfooter",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back",
      },
      "<"
    );
  });

  const handleSubmission = async (e: Event) => {
    // TODO: Handle doing whatever the button does
    console.log(e);
    return alert("um .............. okay");
  };
</script>

<template>
  <div class="z-0 flex w-full items-center justify-center bg-transparent p-5">
    <div
      class="animfooter flex aspect-[2.11/1] size-full h-auto max-w-467.5 flex-col justify-between rounded-[31px] bg-[#0F0F0F] px-15.5 py-9 pt-6"
    >
      <div class="flex w-full flex-col gap-3">
        <div
          class="flex w-full justify-center text-center font-[Switzer] text-[48px] font-bold"
        >
          ALYA.co
        </div>

        <div class="flex justify-between gap-5">
          <div class="flex max-w-125 flex-col gap-6">
            <div class="font-[Haas75] text-[38px]">BUILDING TOGETHER</div>
            <div class="max-w-115 font-[Switzer] text-[22px]">
              Optimize your health with guidance that meets you where you are.
            </div>
            <div class="flex w-full flex-col gap-5">
              <div class="w-full font-[Switzer] text-[24px]">
                <input
                  placeholder="ENTER YOUR EMAIL"
                  type="text"
                  class="w-full border-b-2 border-gray-600 px-5.75 py-7 outline-none"
                  @keydown.enter="handleSubmission"
                />
              </div>
              <ActionBtn
                class="flex w-full items-center justify-center overflow-hidden rounded-full bg-white p-6 text-[24px] text-black shadow-[0px_15px_35.6px_0px] shadow-black/5"
                :call-back="handleSubmission"
              >
                Subscribe
              </ActionBtn>
            </div>
          </div>

          <div
            class="flex flex-col items-end justify-center gap-3 p-20 pt-5 text-3xl"
          >
            <NuxtLink
              v-for="social in SOCIALS"
              :key="social.name"
              :to="social.link"
              target="_blank"
              class="group flex cursor-pointer items-center gap-2 p-2"
            >
              <div class="text-base text-gray-400 group-hover:text-white">
                {{ social.name }}
              </div>
              <Icon :name="social.icon" />
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="font-[Switzer] text-[20px]">
        @ 2026 WeNatal Inc. WENATAL BETTER TOGETHER is a trademark of WeNatal
        Inc.
      </div>
    </div>
  </div>
</template>
