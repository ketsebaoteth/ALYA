<script setup lang="tsx">
  import gsap from "gsap";

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
  });
</script>

<template>
  <div
    class="absolute flex h-full w-full -translate-y-40 items-center justify-center max-xl:hidden"
  >
    <div id="leftHand" class="absolute -left-30 flex w-160 -translate-x-150">
      <img src="/exca-layer1.png" class="w-160" />
      <div class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all">
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
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
      <div class="anim-hand absolute -right-2 bottom-3 w-134.5 transition-all">
        <img src="/exca-layer2.png" class="w-134.5" />
        <img
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
