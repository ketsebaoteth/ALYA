<script setup lang="tsx">
  const handleSubmission = async (e: Event) => {
    console.log(e);
    return alert("um .............. okay");
  };
</script>

<template>
  <div class="flex w-full items-center justify-center p-5">
    <div
      class="flex aspect-[2.11/1] size-full h-auto max-w-467.5 flex-col justify-between rounded-[31px] bg-[#0F0F0F] px-15.5 py-9 pt-6"
    >
      <div class="flex w-full flex-col gap-3">
        <div
          class="flex w-full justify-center text-center font-[Switzer] text-[48px] font-bold"
        >
          ALYA.co
        </div>

        <div class="flex max-w-125 flex-col gap-6">
          <div class="font-[Haas75] text-[38px]">BUILDING TOGETHER</div>
          <div class="max-w-115 font-[Switzer] text-[22px]">
            Optimize your health with guidance that meets you where you are.
          </div>
          <div class="flex w-full flex-col gap-5">
            <div class="w-full font-[Switzer] text-[24px]">
              <input
                placeholder="ENTER YOUR EMAIL"
                type="text"
                class="w-full border-b-2 border-gray-600 px-5.75 py-7 outline-none"
                @keydown.enter="handleSubmission"
              />
            </div>
            <button
              class="flex w-full cursor-pointer items-center justify-center rounded-full bg-white p-6 text-[24px] text-black"
              @click="handleSubmission"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div class="font-[Switzer] text-[20px]">
        @ 2026 WeNatal Inc. WENATAL BETTER TOGETHER is a trademark of WeNatal
        Inc.
      </div>
    </div>
  </div>
</template>
