<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";
  import { SplitText } from "gsap/all";

  onMounted(async () => {
    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    const splited = new SplitText(".revtitle", { type: "lines" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".revtitle",
        start: "top center",
      },
    });

    tl.fromTo(
      splited.lines,
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
    )
      // INFO: Here is the animation for the images change it if you want
      .fromTo(
        ".image1",
        {
          opacity: 0,
          translateY: "-150px",
          rotateZ: "20px",
        },
        {
          opacity: 1,
          translateY: "0px",
          rotateZ: "0px",
        },
        "<"
      )
      .fromTo(
        ".image2",
        {
          opacity: 0,
          translateY: "-150px",
          rotateZ: "-20px",
        },
        {
          opacity: 1,
          translateY: "0px",
          rotateZ: "0px",
        },
        "<"
      );
  });

  const REVIEWS = [
    {
      title:
        "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
      desc: "I've had the pleasure of collaborating with Dumeme on multiple projects, and his ability to turn id to stunning, functional designs is unmatched. His eye for detail and technical knowledge make t an incredible designer to work with.",
      userName: "David Egyard",
      role: "Project Manager",
      image: "",
      profileImage: "",
    },
  ];

  const handleSlideLeft = () => {};
  const handleSlideRight = () => {};
</script>

<template>
  <div class="aspect-video/ /h-svh bg-black/ w-svw -translate-y-20 text-black">
    <div class="max-467.5 w-full">
      <div class="flex flex-col items-center gap-25">
        <div
          class="revtitle flex w-full justify-center px-10 text-center font-[Haas] text-[48px]"
        >
          what others think about us
        </div>

        <div class="aspect-[2.8/1] h-auto w-full max-w-467.5 px-17 py-10">
          <div
            v-for="review in REVIEWS"
            :key="review.title"
            class="flex h-full w-full gap-30 px-5"
          >
            <div
              class="test relative flex h-full flex-1 items-center justify-center"
            >
              <img
                src="/carousel-img1.png"
                class="image1 absolute z-0 h-full w-auto p-3"
              />
              <img
                src="/carousel-img2.png"
                class="image2 absolute z-10 h-[93%] w-auto p-3"
              />
            </div>

            <div class="/py-30 flex h-full w-[60%] flex-col justify-between">
              <div class="flex flex-col gap-10.5">
                <div
                  class="pr-10 font-[Haas] text-[58px] leading-[105.2%] font-thin"
                >
                  {{ review.title }}
                </div>
                <div
                  class="font-[Switzer] text-[22px] leading-[105.2%] text-[#3F3F3F]"
                >
                  " {{ review.desc }} "
                </div>
              </div>

              <div class="flex w-full gap-3.75">
                <button
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-colors hover:bg-black/5"
                  @click="handleSlideLeft"
                >
                  <img src="/arrow-max-left.svg" />
                </button>
                <button
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-colors hover:bg-black/5"
                  @click="handleSlideRight"
                >
                  <img src="/arrow-max-right.svg" />
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
