<script lang="ts" setup>
  const followerRef = ref<HTMLElement | null>(null);
  const animate = ref(false);
  const textOverlayFollowerRef = ref<HTMLElement | null>(null);

  onMounted(async () => {
    await nextTick();

    animate.value = true;

    window.addEventListener("mousemove", (e) => {
      const follower = followerRef.value;
      const textOverlayFollower = textOverlayFollowerRef.value;
      if (!follower || !textOverlayFollower) return;

      // 1. Get the center position of the element
      const rect = follower.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 2. Calculate the distance between mouse and center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // 3. Calculate angle in radians, then convert to degrees
      const radians = Math.atan2(deltaY, deltaX);
      const degrees = radians * (180 / Math.PI);
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      // --- SMOOTH MATH START ---
      // This scales distance (0 to 500px) to a multiplier (1.0 down to 0.1)
      // Formula: 1 - (percent of max distance) * range
      const maxDist = 500;
      const rawInfluence = 1 - distance / maxDist;
      const MAX = 0.4;
      const MIN = 0.1;
      const influence = Math.max(MIN, Math.min(MAX, rawInfluence));
      // --- SMOOTH MATH END ---

      // Apply the rotation multiplied by our smooth influence
      follower.style.transform = `rotate(${degrees * influence}deg)`;
      // textOverlayFollower.style.x = e.clientX - textOverlayFollower.parentElement?.style.left + 'px';
      // textOverlayFollower.style.y = e.clientY - textOverlayFollower.parentElement?.style.top + 'px';
      // textOverlayFollower.style.transform = `translate(${e.x}px, ${e.y}px)`;
      // 4. Apply the rotation
      // follower.style.transform = `rotate(${degrees}deg)`;
    });
  });
</script>

<template>
  <div
    class="relative flex h-svh min-h-300 w-full max-w-467.5 delay-500 duration-1000 items-center transition-all justify-center overflow-visible p-6"
  >
    <HomeBackgroundHero />
    <div
      class="z-0 flex h-full max-w-260 flex-col items-start justify-center gap-8.5 p-8 max-lg:items-center md:w-2/3 xl:p-6"
    >
      <ActionBtn
        class="flex cursor-pointer items-center group gap-2.75 duration-700 delay-700 transition-all hover:scale-101 rounded-full border border-[#B0B0B0] bg-linear-to-r from-white/0 via-[#D7D7D7]/50 to-[#D7D7D7]/85 px-3.75 py-2"
        :class="animate ? 'translate-x-0 opacity-100' : 'opacity-0 translate-x-10'"
        :call-back="() => {}"
      >
        <img src="/hammer.png" class="size-6 group-hover:-rotate-z-45 transition-all" />
        <div class="light font-[Switzer] md:text-[22px] text-lg font-extralight">
          contact us to build with us
        </div>
        <img src="/arrow.svg" class="w-4 group-hover:ml-3.5 transition-all shrink-0" />
      </ActionBtn>

      <div
        class="w-full max-w-200 font-[Haas] transition-all duration-1000 delay-300 max-lg:text-center"
        :class="animate ? 'translate-y-0 opacity-100' : 'opacity-0 translate-y-10'"
      >
        <span
          class="hero-text-background inline bg-clip-text leading-[105%] font-black text-black max-xl:text-4xl md:max-h-1/4/ lg:text-[70px] xl:text-7xl 2xl:text-[90px]"
        >
          We Build For A
          <span class="text-[#CF6210]/ bg-[#CF6210] text-transparent bg-clip-text">Better<span ref="textOverlayFollowerRef" class="absolute hidden transition-all bg-black rounded-full p-1" /></span>
          Future
          <img ref="followerRef" src="/arrow-big.svg" class="inline transition-all duration-100 /ease-in-out px-3 max-md:size-12" />
          Not Just For The Sake Of Building
        </span>
      </div>

      <div
        class="max-w-170 text-xl leading-[1.15] font-semibold transition-all duration-500 delay-500 text-gray-800 max-xl:text-xl max-lg:text-center"
        :class="animate ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-10'"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum ha
      </div>
      <ActionBtn
        class="flex font-[Switzer] transition-all delay-1500 duration-500 font-semibold group text-white hover:scale-101"
        :class="animate ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-10'"
      >
        <div
          class="rounded-full shadow-[0px_15px_35.6px_0px] transition-all shadow-black/25 bg-linear-to-b from-[#CF6210] via-[#CF6210] to-[#F2934A] px-8.25 py-2.75"
        >
          Get Started
        </div>
        <div
          class="flex -translate-x-2 shadow-[0px_15px_35.6px_0px] transition-all shadow-black/25 group-hover:translate-x-1 transition-all items-center justify-center rounded-full bg-linear-to-b from-[#CF6210] via-[#CF6210] to-[#F2934A] p-3.75"
        >
          <img src="/arrow-medium.svg" class="w-3.75 group-hover:rotate-z-45 transition-all" />
        </div>
      </ActionBtn>
    </div>

    <div
      class="flex h-full w-1/3 items-center justify-center overflow-x-clip max-lg:hidden"
    >
      <div
        :class="animate ? 'scale-100 opacity-100' : 'opacity-0 scale-200'"
        class="absolute top-[56%] transition-all duration-1000 -rotate-z-87 rounded-full bg-[#FF8811] px-30 py-40 blur-3xl"
      >
        <div
          class="absolute top-[75%] right-[20%] -rotate-z-50 rounded-full bg-[#FF8811] px-15 py-30"
        />
      </div>
      <!-- <div -->
      <!--   class="flex absolute right-0 z-20 h-full max-h-1/4 max-w-full items-center overflow-x-clip" -->
      <!-- > -->
      <!--   <ModelViewer -->
      <!--     url="/ToyCar.glb" -->
      <!--     class="size-250 min-w-0 translate-x-15 overflow-x-clip max-2xl:translate-x-20 lg:size-110 xl:size-130 2xl:size-160" -->
      <!--   /> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<style scoped>
  .hero-text-background {
    background-image: linear-gradient(to top, black 70%, #dcdcdc 100%);
  }
</style>
