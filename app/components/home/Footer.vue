<script setup lang="tsx">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SplitText from "gsap/SplitText";
  import { onMounted } from "vue";

  import { fAddUser } from "~~/shared/utils/database";

  const subTxt = ref("Subscribed");
  const subscribing = ref(false);
  const email = ref("");
  // const notifyRef = ref<HTMLElement | null>(null);

  const SOCIALS = [
    {
      name: "Instagram",
      icon: "i-ph-instagram-logo",
      link: "https://www.instagram.com",
    },
    {
      name: "Telegram",
      icon: "i-ph-telegram-logo",
      link: "https://t.me/aliyaconstructionplc/",
    },
    {
      name: "Facebook",
      icon: "i-ph-facebook-logo",
      link: "https://www.facebook.com/",
    },
    // {
    //   name: "LinkedIn",
    //   icon: "i-ph-linkedin-logo",
    //   link: "https://www.linkedin.com/",
    // },
    {
      name: "Whatsapp",
      icon: "i-ph-whatsapp-logo",
      link: "https://wa.me/251949007777",
    },
    {
      name: "Email",
      icon: "i-ph-envelope-simple",
      link: "mailto:aliyaconstructionplc@gmail.com",
    },
  ];

  let animTl: any;

  const animate = () => {
    animTl.play(0);
    setTimeout(() => animTl.reverse(), 1800);
  };

  const handleSubmission = async () => {
    if (!email?.value.length) {
      subTxt.value = "Enter your Email First";
      animate();
      subscribing.value = false;
      return;
    }

    subscribing.value = true;

    const subed = localStorage.getItem("__alya_user_subscribed__");

    if (subed) {
      subTxt.value = "Already subscribed";
      animate();
      subscribing.value = false;
      return;
    }

    try {
      await fAddUser({ fullName: "", email: email.value, details: "" });
      subTxt.value = "Subscribed";
      localStorage.setItem("__alya_user_subscribed__", "true");
      animate();
    } catch (err) {
      subTxt.value = "Something went wrong";
      animate();
      console.log(err);
    } finally {
      subscribing.value = false;
    }
  };

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    animTl = gsap.timeline({ paused: true });
    animTl.fromTo(
      ".notify-footer",
      { scale: 0.8, y: 10, opacity: 0 },
      { scale: 1, y: 65, opacity: 1, duration: 0.4, ease: "back.out(2)" }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animfooter",
        start: "top 80%",
      },
    });

    tl.fromTo(
      ".animfooter",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    const splitFooterTitle = new SplitText(".footer-build-text", {
      type: "chars,words",
    });
    tl.fromTo(
      splitFooterTitle.chars,
      { opacity: 0, y: 30, rotationX: -90, transformOrigin: "0% 50% -50" },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power3.out",
      },
      "-=0.4"
    );

    const splitAlya = new SplitText(".footer-alya-text", { type: "chars" });
    tl.fromTo(
      splitAlya.chars,
      { opacity: 0, scale: 2, filter: "blur(10px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.04,
        ease: "power3.out",
      },
      "-=0.8"
    );

    const splitMega = new SplitText(".mega-text-inner", { type: "chars" });
    gsap.fromTo(
      splitMega.chars,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.015,
        ease: "power4.out",
        scrollTrigger: { trigger: ".mega-text", start: "top 95%" },
      }
    );
  });
</script>

<template>
  <div
    class="relative z-0 flex h-full w-full flex-col items-center justify-center overflow-hidden bg-white px-5 pt-50 pb-10"
  >
    <div
      class="animfooter relative z-10 flex h-max min-h-125 w-full max-w-467.5 flex-col justify-between rounded-[31px] border border-gray-800 bg-[#0F0F0F] px-6 py-10 text-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] lg:aspect-[2.11/1] lg:px-15.5 lg:py-12"
    >
      <div class="flex w-full flex-col gap-8">
        <div
          class="/font-[Switzer] flex w-full justify-center text-center text-[32px] font-bold text-white lg:text-[48px]"
        >
          <span class="footer-alya-text">ALIYA CONSTRUCTION PLC</span>
        </div>

        <div
          class="mt-6 flex flex-col justify-between gap-10 lg:mt-10 lg:flex-row"
        >
          <div class="flex max-w-125 flex-col gap-4 lg:gap-6">
            <div
              class="footer-build-text /font-[Haas75] text-[28px] text-white perspective-[1000px] lg:text-[38px]"
            >
              BUILDING TOGETHER
            </div>
            <div class="/font-[Switzer] max-w-115 text-[20px] text-gray-400">
              Transforming visions into structural reality with precision
              engineering and sustainable design.
            </div>
          </div>

          <form
            class="flex w-full max-w-125 flex-col gap-5"
            @submit.prevent="handleSubmission"
          >
            <div class="/font-[Switzer] w-full text-[20px]">
              <input
                v-model="email"
                placeholder="ENTER YOUR EMAIL"
                type="email"
                class="focus:border-brand-500 w-full border-b border-gray-600 bg-transparent py-4 text-white transition-colors outline-none"
              />
            </div>
            <button :disabled="subscribing" class="relative z-0" type="submit">
              <div
                class="notify-footer pointer-events-none absolute top-0 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-sm font-black text-black opacity-0 shadow-xl"
              >
                {{ subTxt }}
              </div>
              <AnimatedCtaBtn
                :text="subscribing ? 'Please wait' : 'Subscribe for Updates'"
                class="bg-brand-500 relative z-0 flex w-full items-center justify-center overflow-hidden rounded-full p-5 text-[18px] font-bold text-white shadow-lg transition-colors"
              ></AnimatedCtaBtn>
            </button>
          </form>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 lg:flex-row"
      >
        <div
          class="/font-[Switzer] order-2 text-center text-[13px] font-medium text-gray-500 lg:order-1 lg:text-[15px]"
        >
          © 2026 ALIYA CONSTRUCTION PLC. All rights reserved.
        </div>

        <div
          class="order-1 flex flex-wrap items-center justify-center gap-3 lg:order-2 lg:gap-4"
        >
          <NuxtLink
            v-for="social in SOCIALS"
            :key="social.name"
            :to="social.link"
            target="_blank"
            class="hover:border-brand-500 hover:bg-brand-500 flex size-10 cursor-pointer items-center justify-center rounded-full border border-gray-600 text-lg text-white transition-all duration-500 hover:text-black lg:size-12 lg:text-xl"
          >
            <Icon :name="social.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="mega-text pointer-events-none mt-30 flex h-full w-full flex-col gap-16 pb-20"
    >
      <div
        class="mega-text-inner /font-[Haas] my-10 w-full overflow-visible px-5 text-center text-[clamp(40px,8vw,125px)] font-black whitespace-normal text-[#f3f3f3] uppercase lg:px-0 lg:whitespace-nowrap"
      >
        ALIYA CONSTRUCTION PLC
      </div>
      <div
        class="/font-[Switzer] mx-auto w-full columns-1 gap-12 border-t border-gray-100 px-10 pt-10 text-justify text-[12px] text-gray-400 md:columns-2 lg:columns-4"
      >
        <p>
          Terms of Service: By accessing this website, you agree to be bound by
          these Terms of Service, all applicable laws and regulations, and agree
          that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited
          from using or accessing this site. The materials contained in this
          website are protected by applicable copyright and trademark law.
        </p>
        <p>
          Privacy Policy: We are committed to protecting your privacy.
          Authorized employees within the company on a need to know basis only
          use any information collected from individual customers. We constantly
          review our systems and data to ensure the best possible service to our
          customers. Parliament has created specific offences for unauthorised
          actions against computer systems and data.
        </p>
        <p>
          Disclaimer: The materials on ALIYA website are provided on an 'as is'
          basis. ALIYA makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
        <p>
          Corporate Governance: We adhere to the highest standards of corporate
          governance, ensuring transparency, accountability, and ethical conduct
          in all our operations globally. Our board of directors is dedicated to
          sustainable long-term value creation for all stakeholders, maintaining
          rigid compliance with international corporate charters and
          environmental mandates.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input::placeholder {
    color: #6b7280;
  }
</style>
