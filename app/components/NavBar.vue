<script setup lang="tsx">
const route = useRoute();
const routeElms = ref<Map<string, HTMLElement>>(new Map());
const selectedFollower = ref<HTMLElement | undefined>();
const hoveredFollower = ref<HTMLElement | undefined>();

const setRefElms = (id: string, el: any) => {
  routeElms.value.set(id, el.$el || el);
};

onBeforeUpdate(() => (routeElms.value = new Map()));

const routes = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const selectedFollowerData = reactive({
  left: 0,
  right: 0,
});

const hoverFollowerData = reactive({
  left: 0,
  width: 0,
});

const currentElm = (): HTMLElement | null =>
  routeElms.value.get(route.path) || null;

onMounted(async () => {
  await nextTick();

  // NOTE: Fallback
  // document.getElementById(route.path.slice(1))?.click();
  // hoverElm(undefined, true);

  currentElm()?.click();
  hoverElm(undefined, true);

  window.addEventListener("resize", handleResize);
});

const handleResize = async () => {
  await nextTick();
  selectElm();
  hoverElm();
};

const hoverElm = (e?: Event, leaving?: boolean) => {
  let target: Element | null;
  if (leaving) {
    target = currentElm();
  } else {
    if (!e) return;
    target = e.target as HTMLElement;
  }

  const parentleft = target?.parentElement?.getBoundingClientRect().left;
  hoverFollowerData.left =
    (target?.getBoundingClientRect()?.left || 0) - (parentleft || 0);
  hoverFollowerData.width = (target?.getBoundingClientRect()?.width || 0) - 16;
};

const selectElm = (e?: Event) => {
  let target: HTMLElement | null;
  if (!e) target = currentElm();
  else target = e.currentTarget as HTMLElement;

  if (!target) return;

  const parentleft = target.parentElement?.getBoundingClientRect().left;
  const parentright = target.parentElement?.getBoundingClientRect().right;
  const targetLeftRes = target.getBoundingClientRect().left - (parentleft || 0);
  const targetRightRes =
    target.getBoundingClientRect().right - (parentright || 0);
  if (selectedFollowerData.left > targetLeftRes) {
    selectedFollowerData.left = targetLeftRes;
    setTimeout(() => {
      selectedFollowerData.right = -targetRightRes;
    }, 300);
  } else {
    selectedFollowerData.right = -targetRightRes;
    setTimeout(() => {
      selectedFollowerData.left = targetLeftRes;
    }, 300);
  }
};
</script>

<template>
  <div class="absolute top-0 flex w-full items-center justify-center">
    <div
      class="flex h-full w-full max-w-467.5 items-center justify-between p-3 md:p-5 md:px-6"
    >
      <div class="flex items-center gap-2 md:gap-3">
        <div
          class="flex md:size-8 size-6 items-center justify-center overflow-hidden md:rounded-xl rounded-md"
        >
          <img src="/logo.png" class="" />
        </div>
        <div class="flex flex-col justify-center text-xs/tight md:text-base/tight font-bold">
          <div>Alya</div>
          <div class="max-md:hidden">Construction</div>
          <div class="md:hidden">Co.</div>
        </div>
      </div>

      <div
        class="relative flex items-center justify-center gap-0 p-0 text-gray-900"
      >
        <div
          ref="selectedFollower"
          :style="{
            right: `${selectedFollowerData.right}px`,
            left: `${selectedFollowerData.left}px`,
          }"
          class="absolute bottom-0 mx-2 h-1 min-w-2 rounded-full bg-black transition-all duration-300 ease-[cubic-bezier(.72,0,.7,.9)]"
        />

        <div
          ref="hoveredFollower"
          :style="{
            width: `${hoverFollowerData.width}px`,
            left: `${hoverFollowerData.left}px`,
          }"
          class="/min-w-2 absolute bottom-0 mx-2 h-1 rounded-full bg-black/50 transition-all duration-400 ease-in-out"
          onmou
        />

        <NuxtLink
          v-for="r in routes"
          :ref="(e) => setRefElms(r.path, e)"
          :key="r.name"
          :to="r.path"
          :class="route.path.includes(r.path) ? 'text-black' : ''"
          class="md:px-7 py-2.5 md:px-3 px-2 md:text-sm text-xs z-30 transition-all hover:text-black"
          @click="selectElm"
          @mouseenter="hoverElm"
          @mouseleave="() => hoverElm(undefined, true)"
        >
          {{ r.name }}
        </NuxtLink>
      </div>

      <!-- TODO: Button does nothing -->
      <div
        class="rounded-full border-black bg-black p-2 px-3 md:px-4.5 md:text-sm text-xs text-white shadow-xl shadow-black/25 transition-all"
      >
        <span class="md:hidden">Book</span> <span class="max-md:hidden">Book A Call</span>
      </div>
    </div>
  </div>
</template>
