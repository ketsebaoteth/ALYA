<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  let tl: gsap.core.Timeline;

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    gsap.fromTo(
      ".revhead",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back",
      }
    );

    const splrevtitle = new SplitText(".review-title", { type: "lines" });
    const splrevdesc = new SplitText(".review-description", {
      type: "words,chars",
    });

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".revhead",
        start: "top 30%",
      },
    });

    tl.fromTo(
      splrevtitle.lines,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back",
      },
      "<"
    )
      .fromTo(
        splrevdesc.words,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.04,
          ease: "back",
        },
        "<"
      )
      // INFO: Here is the animation for the images change it if you want
      .fromTo(
        ".image1",
        {
          opacity: 0,
          translateY: "-200px",
          rotateZ: "20px",
        },
        {
          opacity: 1,
          translateY: "0px",
          rotateZ: "0px",
          ease: "back.inOut",
          duration: 1,
        },
        "<"
      )
      .fromTo(
        ".image2",
        {
          opacity: 0,
          translateY: "-200px",
          rotateZ: "-20px",
        },
        {
          opacity: 1,
          translateY: "0px",
          rotateZ: "0px",
          ease: "back.inOut",
          duration: 1,
        },
        "<"
      );
  });

  const reviews = ref([
    {
      title:
        "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
      desc: "I've had the pleasure of collaborating with Dumeme on multiple projects, and his ability to turn id to stunning, functional designs is unmatched. His eye for detail and technical knowledge make t an incredible designer to work with.",
      image: "/carousel-img1.png",
      z: 0,
    },
    {
      title:
        "Unmatched Reliability And Incredible Build Quality That Never Disappoints",
      desc: "I’ve worked alongside Dumeme on different projects, and he consistently brings ideas to life through impressive and functional designs. His keen attention to detail and technical understanding make him incredibly great to work with.",
      image: "/carousel-img2.png",
      z: 0,
    },
  ]);

  let counter = 0;
  const review = ref(reviews.value[counter]);

  const handleSlideLeft = (e: Event) => {
    counter = counter === 1 ? 0 : counter + 1;
    reviews.value = reviews.value.map((each) => ({ ...each, z: -90 }));
    review.value = reviews.value[counter];
    review.value.z = 90;
    tl.restart();
  };

  const handleSlideRight = (e: Event) => {
    reviews.value = reviews.value.map((each) => ({ ...each, z: -90 }));
    counter = counter === 1 ? 0 : counter + 1;
    review.value = reviews.value[counter];
    review.value.z = 90;
    tl.restart();
  };
</script>

<template>
  <div class="aspect-video/ /h-svh bg-black/ w-svw -translate-y-20 text-black">
    <div class="max-467.5 w-full">
      <div class="flex flex-col items-center gap-25">
        <div
          class="revhead flex w-full justify-center px-10 text-center font-[Haas] text-[clamp(30px,4vw,48px)]"
        >
          what others think about us
        </div>

        <div
          class="aspect-[2.8/1] h-auto w-full max-w-467.5 px-10 py-5 lg:px-17 lg:py-10"
        >
          <!-- v-for="review in REVIEWS" -->
          <div class="flex h-full w-full gap-10 px-5 lg:gap-30">
            <div
              class="test relative flex h-auto flex-1 items-center justify-center lg:h-full"
            >
              <img
                :style="{ zIndex: review.z }"
                src="/carousel-img1.png"
                class="image1 absolute h-full w-auto p-3"
              />
              <img
                :style="{ zIndex: review.z }"
                src="/carousel-img2.png"
                class="image2 absolute h-[93%] w-auto p-3"
              />
            </div>

            <div
              class="/py-30 flex h-full w-[60%] flex-col justify-between gap-10"
            >
              <div class="flex flex-col gap-10.5">
                <div
                  class="review-title pr-10 font-[Haas] text-[clamp(20px,3vw,58px)] leading-[105.2%] font-thin"
                >
                  {{ review.title }}
                </div>
                <div
                  class="review-description font-[Switzer] text-[clamp(13px,2vw,22px)] leading-[105.2%] text-[#3F3F3F]"
                >
                  " {{ review.desc }} "
                </div>
              </div>

              <div class="flex w-full gap-3.75">
                <button
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-colors hover:bg-black/5"
                  @click="handleSlideLeft"
                >
                  <img src="/arrow-max-left.svg" class="max-lg:size-5" />
                </button>
                <button
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-colors hover:bg-black/5"
                  @click="handleSlideRight"
                >
                  <img src="/arrow-max-right.svg" class="max-lg:size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* INFO: The dashed border */
  .test {
    --dash-length: 32px;
    --dash-thickness: 2px;
    --dash-color: #3f3f3f80;

    background-image:
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%); /* Right */

    background-position: top, bottom, left, right;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;

    background-size:
      var(--dash-length) var(--dash-thickness),
      var(--dash-length) var(--dash-thickness),
      var(--dash-thickness) var(--dash-length),
      var(--dash-thickness) var(--dash-length);
  }
</style>
