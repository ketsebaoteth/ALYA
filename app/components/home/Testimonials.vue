<script setup lang="tsx">
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import { ref, onMounted, nextTick, computed } from "vue";

  gsap.registerPlugin(SplitText);

  let titleSplit: SplitText;
  let descSplit: SplitText;
  const isAnimating = ref(false);
  const isFirstImageFront = ref(true);

  const reviews = [
    {
      name: "Art. Ephrem Tamiru",
      title:
        "Meticulous Attention to Complex Multi-Level Residential Architecture",
      desc: "Building a complex 2+B+G+3 residence requires careful multi-level structural balancing. Their seasoned site engineers maintained stringent oversight, making the final building layout feel premium.",
      image1: "/test3.jpg",
      image2: "/test2.jpg",
    },
    {
      name: "Ato Girma Amare & W/ro Martha Negash",
      title:
        "Flawless Execution from Structural Shell to Fine Structural Finishing",
      desc: "They flawlessly handled both the core concrete structural work and intricate finishing phases for our B+G+6 Mixed Use Building. Professional project management that kept clear communication lines open throughout.",
      image1: "/test1.jpg",
      image2: "/place.webp",
    },
    {
      name: "W/Ro Senait G/Gziabher",
      title:
        "Premium Craftsmanship and High-End Residential Layout Architecture",
      desc: "Our 2+B+G+3 residential construction was handled with incredible attention to detail. Every square meter reflects high-end craftsmanship, bringing our architectural vision to life seamlessly.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Ene Wro Belay Tesfaye",
      title: "Outstanding Structural Integrity and Prompt Component Handover",
      desc: "Entrusting our high-density B+G+6 Mixed Use development to them for both structural foundation setups and final finishing was the right move. Speed and safety metrics were outstanding.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Ethiopia Catholic Church Society of Jesus",
      title: "Exceptional Execution on Large Scale Educational Infrastructure",
      desc: "Managing multiple construction phases for our Learning Institute required top-tier logistical coordination. Their execution on both the G+1 Residence and institutional blocks showcased absolute structural reliability.",

      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Wro Etenesh Haile",
      title: "Highly Dependable Multipurpose Real Estate Development Services",
      desc: "Delivered our B+G+5 Mixed Use Building strictly within the expected timeframe. Their technical expertise eliminated typical construction friction and ensured a clean, functional final architecture.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Dr. Atnafu Tola",
      title: "Efficient and Streamlined B+G+2 Private Residential Construction",
      desc: "The construction workflow for our multi-story residential building was highly intuitive and transparent. Highly recommended for premium residential blocks requiring rigorous quality control.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Wro Misrak Elias",
      title: "Impeccable Material Logistics and Robust Commercial Finishing",
      desc: "Their structural crew optimized the layout planning for our B+G+5 Mixed Use structure perfectly. The attention to concrete casting standards and site safety metrics saved us weeks of engineering oversight.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Tigist Asefa",
      title: "Excellent G+5 Apartment Complex Architecture and Civil Work",
      desc: "Our G+5 multi-family housing project required a contractor capable of managing dense city requirements. They delivered highly secure, sturdy, and aesthetic structural results.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "BGI Ethiopia PLC",
      title: "Rapid and Safe Structural Overhaul for Vital Storage Logistics",
      desc: "The Kera Store maintenance work was carried out with minimum disruption to operations. They demonstrated top-tier safety conditions and rapid completion for our commercial storage space.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
  ];

  const counter = ref(0);
  const currentReview = computed(() => reviews[counter.value]);

  // Predict next index to gracefully pre-load images onto the background container
  // const nextCounter = computed(() => (counter.value + 1) % reviews.length);
  // const nextReview = computed(() => reviews[nextCounter.value]);

  // Dynamically map resources to prevent swapping artifacts
  // const image1Source = computed(() =>
  //   isFirstImageFront.value
  //     ? currentReview.value?.image1
  //     : nextReview.value?.image1
  // );
  // const image2Source = computed(() =>
  //   isFirstImageFront.value
  //     ? nextReview.value?.image2
  //     : currentReview.value?.image2
  // );

  const splitElements = () => {
    if (titleSplit) titleSplit.revert();
    if (descSplit) descSplit.revert();
    titleSplit = new SplitText(".review-title", { type: "lines" });
    descSplit = new SplitText(".review-description", { type: "words,chars" });
  };

  onMounted(async () => {
    await nextTick();
    splitElements();
  });

  const handleShuffle = async () => {
    if (isAnimating.value) return;
    isAnimating.value = true;

    const topImg = isFirstImageFront.value ? ".image1" : ".image2";
    const bottomImg = isFirstImageFront.value ? ".image2" : ".image1";

    const tl = gsap.timeline({
      onComplete: () => {
        counter.value = (counter.value + 1) % reviews.length;
        isFirstImageFront.value = !isFirstImageFront.value;
        isAnimating.value = false;
      },
    });

    // 1. Text Out
    tl.to([".review-title", ".review-description", ".review-author"], {
      opacity: 0,
      filter: "blur(4px)",
      y: 15,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // 2. The Shuffle Palette Animation
    tl.to(
      topImg,
      {
        x: 100,
        y: 40,
        rotate: 8,
        opacity: 0.5,
        scale: 0.85,
        duration: 0.5,
        ease: "expo.inOut",
      },
      "-=0.3"
    )
      .fromTo(
        bottomImg,
        {
          x: 0,
          scale: 0.9,
          zIndex: 0,
          opacity: 0.5,
        },
        {
          x: -120,
          scale: 1.05,
          opacity: 1,
          rotate: -5,
          zIndex: 20,
          duration: 0.5,
          ease: "expo.inOut",
        },
        "<"
      )
      // Synchronize layered ordering heights mid-flight
      .set(topImg, { zIndex: 0 })
      .set(bottomImg, { zIndex: 10 })
      // Re-center system sets smoothly
      .to([topImg, bottomImg], {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: (i) => (i === 0 ? 0.5 : 1),
        scale: (i) => (i === 0 ? 0.6 : 1),
        duration: 0.6,
        stagger: 0.05,
        ease: "elastic.out(1, 0.8)",
      })
      // 3. Re-split and text entrance
      .add(async () => {
        await nextTick();
        splitElements();

        gsap.set(".review-title, .review-description, .review-author", {
          opacity: 1,
          filter: "blur(0px)",
        });

        gsap.fromTo(
          titleSplit.lines,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.1, ease: "expo.out", duration: 0.8 }
        );

        gsap.fromTo(
          descSplit.words,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.015, ease: "expo.out", duration: 0.8 },
          "-=0.6"
        );

        gsap.fromTo(
          ".review-author",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 },
          "-=0.4"
        );
      }, "-=0.4");
  };
</script>

<template>
  <div
    class="w-svw overflow-hidden bg-transparent py-20 text-white lg:my-40 lg:py-40"
  >
    <div class="max-467.5 mx-auto w-full">
      <div class="flex flex-col items-center gap-25">
        <div
          class="revhead /font-[Haas] flex w-full justify-center px-10 text-center text-[clamp(30px,4vw,48px)] uppercase"
        >
          what others think about us
        </div>

        <div
          class="flex h-auto w-full max-w-467.5 px-5 py-5 lg:aspect-[2.8/1] lg:px-17 lg:py-10"
        >
          <div
            class="flex h-full w-full flex-col gap-10 px-0 lg:flex-row lg:gap-30 lg:px-5"
          >
            <!-- Dynamic Image Swapping Stack -->
            <div
              class="test relative flex h-95 w-full flex-1 items-center justify-center overflow-visible max-lg:my-40 lg:h-full"
            >
              <img
                src="/test3.jpg"
                class="/image1 absolute h-70 w-60 rounded-[40px] object-cover lg:h-130 lg:w-120 lg:rounded-[100px]"
              />
              <!-- img
                :src="image2Source"
                class="image2 absolute mt-10 h-[280px] w-[240px] lg:h-130 lg:w-120 rounded-[40px] lg:rounded-[100px] object-cover"
                :style="{
                  zIndex: isFirstImageFront ? 0 : 10,
                  opacity: isFirstImageFront ? 0.5 : 1,
                }"
              / -->
            </div>

            <!-- Content Area -->
            <div
              class="flex h-full w-full flex-col justify-between gap-10 lg:w-[60%]"
            >
              <div class="flex flex-col gap-6 lg:gap-10.5">
                <div
                  class="review-title /font-[Haas] pr-0 text-[clamp(24px,3vw,58px)] font-thin uppercase italic lg:pr-10"
                >
                  {{ currentReview?.title }}
                </div>
                <div
                  class="review-description /font-[Switzer] text-[clamp(13px,2vw,22px)] text-gray-400"
                >
                  " {{ currentReview?.desc }} "
                </div>
                <div
                  class="review-author mt-2 text-[clamp(12px,1.5vw,18px)] font-semibold tracking-wider text-white uppercase"
                >
                  — {{ currentReview?.name }}
                </div>
              </div>

              <!-- Controls -->
              <div class="flex w-full gap-3.75">
                <button
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                  @click="handleShuffle"
                >
                  <img src="/arrow-max-left.svg" class="invert max-lg:size-5" />
                </button>
                <button
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                  @click="handleShuffle"
                >
                  <img
                    src="/arrow-max-right.svg"
                    class="invert max-lg:size-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .test {
    --dash-length: 32px;
    --dash-thickness: 2px;
    --dash-color: #3f3f3f30;
    background-image:
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%);
    background-position: top, bottom, left, right;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size:
      var(--dash-length) var(--dash-thickness),
      var(--dash-length) var(--dash-thickness),
      var(--dash-thickness) var(--dash-length),
      var(--dash-thickness) var(--dash-length);
  }

  img {
    will-change: transform, opacity, z-index;
  }

  .image1,
  .image2 {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));
  }
</style>
