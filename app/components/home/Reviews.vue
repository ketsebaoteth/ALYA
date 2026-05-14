<script setup lang="tsx">
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ref, onMounted, nextTick } from "vue";

gsap.registerPlugin(SplitText);

let titleSplit: SplitText;
let descSplit: SplitText;
const isAnimating = ref(false);
const isFirstImageFront = ref(true);

const reviews = [
  {
    title: "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
    desc: "I've had the pleasure of collaborating with Dumeme on multiple projects, and his ability to turn ideas into stunning, functional designs is unmatched.",
    image1: "/carousel-img1.png",
    image2: "/carousel-img2.png",
  },
  {
    title: "Unmatched Reliability And Incredible Build Quality That Never Disappoints",
    desc: "I’ve worked alongside Dumeme on different projects, and he consistently brings ideas to life through impressive and functional designs.",
    image1: "/carousel-img2.png",
    image2: "/carousel-img1.png",
  },
];

const counter = ref(0);
const review = ref(reviews[0]);

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
      isAnimating.value = false;
      isFirstImageFront.value = !isFirstImageFront.value;
    }
  });

  // 1. Text & Layout Out
  tl.to([".review-title", ".review-description"], {
    opacity: 0,
    filter: "blur(4px)",
    y: 15,
    duration: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      counter.value = (counter.value + 1) % reviews.length;
      review.value = reviews[counter.value];
    }
  });

  // 2. THE REFINED SHUFFLE
  // Top Image: Move Right, Rotate, and Drop
  tl.to(topImg, {
    x: 100,
    y: 40,
    rotate: 8,
    opacity: 0.5,
    scale: 0.85,
    duration: 0.5,
    ease: "expo.inOut",
  }, "-=0.3")

    // Bottom Image: Swing out Left and Come Forward
    .fromTo(bottomImg, {
      x: 0,
      scale: 0.9,
      zIndex: 0
    }, {
      x: -120,
      scale: 1.05,
      rotate: -5,
      zIndex: 20,
      duration: 0.5,
      ease: "expo.inOut"
    }, "<")

    // Switch Depths at the peak of the movement
    .set(topImg, { zIndex: 0 })
    .set(bottomImg, { zIndex: 10 })

    // Return both to center
    .to([topImg, bottomImg], {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: (i) => i === 0 ? 1 : 0.93, // Keep back image slightly smaller
      duration: 0.6,
      stagger: 0.05,
      ease: "elastic.out(1, 0.8)"
    })

    // 3. Text Re-Split and Entrance
    .add(async () => {
      await nextTick();
      splitElements();

      gsap.set(".review-title, .review-description", { opacity: 1, filter: "blur(0px)" });

      gsap.fromTo(titleSplit.lines,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "expo.out", duration: 0.8 }
      );

      gsap.fromTo(descSplit.words,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.015, ease: "expo.out", duration: 0.8 },
        "-=0.6"
      );
    }, "-=0.4");
};
</script>

<template>
  <div class="w-svw my-40 bg-transparent text-black overflow-hidden">
    <div class="max-467.5 w-full mx-auto">
      <div class="flex flex-col items-center gap-25">

        <div class="revhead flex w-full justify-center px-10 text-center font-[Haas] text-[clamp(30px,4vw,48px)]">
          what others think about us
        </div>

        <div class="aspect-[2.8/1] h-auto w-full max-w-467.5 px-10 py-5 lg:px-17 lg:py-10">
          <div class="flex h-full w-full gap-10 px-5 lg:gap-30">

            <div class="test relative flex h-auto flex-1 items-center justify-center lg:h-full overflow-visible">
              <!-- Inline styles ensure initial z-index is defined for GSAP -->
              <img src="/testi1.jpg" class="image1 absolute h-130 object-contain w-120 rounded-[100px] p-3"
                style="z-index: 10;" />
              <img src="/testi2.jpg" class="image2 absolute h-130 object-contain mt-10 w-120 rounded-[100px] p-3"
                style="z-index: 0;" />
            </div>

            <div class="flex h-full w-[60%] flex-col justify-between gap-10">
              <div class="flex flex-col gap-10.5">
                <div
                  class="review-title pr-10 font-[Haas] text-[clamp(20px,3vw,58px)] leading-[105.2%] font-thin uppercase italic">
                  {{ review.title }}
                </div>
                <div class="review-description font-[Switzer] text-[clamp(13px,2vw,22px)] leading-[1.4] text-[#3F3F3F]">
                  " {{ review.desc }} "
                </div>
              </div>

              <div class="flex w-full gap-3.75">
                <button @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-all hover:bg-black/5 active:scale-95">
                  <img src="/arrow-max-left.svg" class="max-lg:size-5" />
                </button>
                <button @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-black p-6.5 transition-all hover:bg-black/5 active:scale-95">
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

/* Optional: add a slight shadow to the front image during shuffle */
.image1,
.image2 {
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));
}
</style>
