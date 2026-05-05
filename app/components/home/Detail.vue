<script setup lang="tsx">
  import gsap from "gsap";
  import ScrollTrigger from "gsap/ScrollTrigger";

  const PALETTES = [
    {
      title: "24/7",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "100+",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "16+",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  // FIX: It just doesn't work, still working on it
  onMounted(async () => {
    await nextTick();

     gsap.registerPlugin(ScrollTrigger);
     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: ".image",
         start: "center center",
         end: "+=500",
         scrub: 1,
         pin: true,
         invalidateOnRefresh: true,
       },
     });

     tl
       // .from(".image", {
       //   // width: '100%',
       //   // top: "50%",
       //   // left: "50%",
       //   // height: '100%',
       //   scale: 1,
       //   duration: 1,
       // })
       .to(".image", {
       duration: 1,
        // BUG: I am trying scaling it cuz width and height are not responding to the animation at all, I need to rewrite the layout for the whole component
       scale: 3.8,
       "border-radius": '0px',
       //   maxWidth: "none",
       // opacity: 1,
       // width: "100vw",
       // height: "100vh",
     });
  });
</script>

<template>
  <div class="relative w-full min-h-300 pb-100 max-h-350 h-svh flex flex-col items-center justify-center">
    <HomeBackgroundDetail />

    <div class="w-full h-full flex gap-8.5 px-8 flex-col z-0 items-center justify-center">

      <div class="font-[Switzer] font-semibold px-8 text-center lg:text-7xl text-5xl max-w-230">
        Building Fast With Quality And speed
      </div>

      <div class="max-w-200 text-center md:text-[21px] text-base px-5 leading-[109%]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </div>

      <div class="image scale-100 /absolute  rounded-[81px] overflow-hidden flex items-center justify-center 2xl:max-w-1/3">
        <img src="/construction.png" class="" />
      </div>

      <div class="flex max-w-300 items-center px-3 font-[Switzer] justify-between gap-13 pt-5">
        <div
          v-for="palette in PALETTES"
          class="flex flex-col text-center items-center gap-9"
        >
          <div class="lg:text-7xl text-5xl font-semibold">{{ palette.title }}</div>
          <div class="md:text-[21px] text-lg leading-[105%]">{{ palette.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
