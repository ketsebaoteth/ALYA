<script setup lang="tsx">
  import gsap from "gsap";
  const leftHand_ = ref<HTMLElement | null>(null);
  const leftBucket_ = ref<HTMLElement | null>(null);
  const rightHand_ = ref<HTMLElement | null>(null);
  const rightBucket_ = ref<HTMLElement | null>(null);

  onMounted(() => {
    const handsDuration = 3.3;

    gsap.to("#rightHand", {
      x: 70,
      duration: handsDuration,
      ease: "back",
    });

    gsap.to("#leftHand", {
      x: -70,
      duration: handsDuration,
      ease: "back",
    });

    window.addEventListener("mousemove", (e) => {
      const leftHand = leftHand_.value;
      const leftBucket = leftBucket_.value;
      const rightBucket = rightBucket_.value;
      const rightHand = rightHand_.value;

      if (!leftHand || !rightHand || !leftBucket || !rightBucket) return;

      const maxDist = 500;
      const MAX = 0.4;
      const MIN = 0.1;

      // INFO: Left hand and bucket
      const rect_left = leftHand.getBoundingClientRect();
      const centerX_left = rect_left.left + rect_left.width / 2;
      const centerY_left = rect_left.top + rect_left.height / 2;

      const deltaX_left = e.clientX - centerX_left;
      const deltaY_left = e.clientY - centerY_left;

      const radians_left = Math.atan2(deltaY_left, deltaX_left);
      const degrees_left = radians_left * (180 / Math.PI);
      const distance_left = Math.sqrt(deltaX_left ** 2 + deltaY_left ** 2);

      const rawInfluence_left = 1 - distance_left / maxDist;
      const influence_left = Math.max(MIN, Math.min(MAX, rawInfluence_left));

      // INFO: Right hand and bucket
      const rect_right = rightHand.getBoundingClientRect();
      const centerX_right = rect_right.right + rect_right.width / 2;
      const centerY_right = rect_right.top + rect_right.height / 2;

      const deltaX_right = e.clientX - centerX_right;
      const deltaY_right = e.clientY - centerY_right;

      const radians_right = Math.atan2(deltaY_right, deltaX_right);
      const degrees_right = radians_right * (180 / Math.PI);
      const distance_right = Math.sqrt(deltaX_right ** 2 + deltaY_right ** 2);

      const rawInfluence_right = 1 - distance_right / maxDist;
      const influence_right = Math.max(MIN, Math.min(MAX, rawInfluence_right));

      leftHand.style.animation = "none";
      leftBucket.style.animation = "none";
      rightHand.style.animation = "none";
      rightBucket.style.animation = "none";

      leftHand.style.transform = `rotate(${(degrees_left * influence_left) / 10}deg)`;
      rightHand.style.transform = `rotate(${(degrees_right * influence_right) / 10}deg)`;
      leftBucket.style.transform = `rotate(${degrees_left * influence_left}deg)`;
      rightBucket.style.transform = `rotate(${degrees_right * influence_right}deg)`;
    });
  });
</script>

<template>
  <div
    class="absolute flex h-full w-full -translate-y-40 items-center justify-center max-xl:hidden"
  >
    <div id="leftHand" class="absolute -left-30 flex w-160 -translate-x-150">
      <img src="/exca-layer1.png" class="w-160" />
      <div
        ref="leftHand_"
        class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all"
      >
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
          ref="leftBucket_"
          src="/exca-layer3.png"
          class="anim-bucket absolute right-2 bottom-17 w-52.5 transition-all"
        />
      </div>
    </div>

    <div
      id="rightHand"
      class="absolute -right-30 flex w-160 translate-x-150 rotate-y-180"
    >
      <img src="/exca-layer1.png" class="w-160" />
      <div
        ref="rightHand_"
        class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all"
      >
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
          ref="rightBucket_"
          src="/exca-layer3.png"
          class="anim-bucket absolute right-2 bottom-17 w-52.5 transition-all"
        />
      </div>
    </div>
  </div>
</template>

<style>
  .anim-bucket {
    animation: bucket forwards 2.5s 0.3s;
  }

  @keyframes bucket {
    from {
      transform: rotate(0px);
    }

    50% {
      transform: rotate(-40deg);
    }

    to {
      transform: rotate(40deg);
    }
  }

  .anim-hand {
    animation: hand forwards 2s 0.7s;
  }

  @keyframes hand {
    from {
      transform: rotate(0deg);
    }

    30% {
      transform: rotate(-10deg);
    }

    to {
      transform: rotate(20deg);
    }
  }
</style>
