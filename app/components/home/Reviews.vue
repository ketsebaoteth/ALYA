<script setup lang="tsx">
  const REVIEWS = [
    {
      title: "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
      desc: "I've had the pleasure of collaborating with Dumeme on multiple projects, and his ability to turn id to stunning, functional designs is unmatched. His eye for detail and technical knowledge make t an incredible designer to work with.",
      userName: "David Egyard",
      role: "Project Manager",
      image: "",
      profileImage: "",
    },
  ]

  const handleSlideLeft = () => {};
  const handleSlideRight = () => {};
</script>

<template>
  <div class="w-svw lg:min-h-300 /min-h-150 max-h-350 pb-15 lg:h-svh md:pt-20 flex justify-center items-end-safe z-0">
    <div class="flex flex-col w-full max-w-400 lg:px-20 px-10 gap-23">
      <div class="font-[Haas] font-bold lg:text-3xl 2xl:text-[40px] text-2xl flex justify-center">WHAT OTHERS <span class="px-8.5" /> SAY ABOUT US</div>

      <!-- TODO: carousel will be used for multiple reviews -->
      <div v-for="review in REVIEWS" class="lg:p-9 xl:gap-27 gap-7 items-center h-full flex w-full">
        <div class="max-w-110 lg:h-140 w-full min-h-40 bg-white shrink xl:rounded-[100px] rounded-4xl border border-black/90 border-dashed">
          <img
            :src="review.image"
          />
        </div>

        <div class="flex flex-col xl:gap-24 gap-10 w-full">
          <div class="font-[Haas] leading-[113%] xl:text-[55px] text-xl">{{ review.title }}</div>

          <div class="font-[Switzer] xl:text-xl text-sm leading-[115%] text-black/85">{{ '" ' + review.desc + ' "' }}</div>

          <div class="flex max-xl:flex-col gap-3 justify-between w-full">
            <div class="flex gap-5 items-center">
              <div class="lg:size-20 size-10 rounded-full border-[#FF8811] border-4">
                <img
                  :src="review.profileImage"
                />
              </div>
              <div class="flex flex-col font-[Switzer]">
                <div class="font-semibold lg:text-[26px] text-base">{{ review.userName }}</div>
                <div class="font-semibold max-md:text-xs flex items-center gap-2.5">{{ review.role }}<span class="bg-[#FF8811] rounded-full size-1" /></div>
              </div>
            </div>

            <div class="flex gap-3">
              <CarouselButton image="/arrow-max-left.svg" :call-back="handleSlideLeft" />
              <CarouselButton image="/arrow-max-right.svg" :call-back="handleSlideRight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
