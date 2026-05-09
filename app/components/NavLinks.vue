<script setup lang="tsx">
  import { NAV_ROUTES } from "~~/shared/utils/constants";
  const route = useRoute();
  const routeElms = ref<Map<string, HTMLElement>>(new Map());
  const selectedFollower = ref<HTMLElement | null>(null);

  const FOLLOWER_WIDTH = 10;
  const setRefElms = (id: string, el: any) => {
    routeElms.value.set(id, el.$el || el);
  };

  onBeforeUnmount(() => (routeElms.value = new Map()));

  const selectedFollowerData = reactive({
    left: 0,
    right: 0,
  });

  const currentElm = (): HTMLElement | null =>
    routeElms.value.get(route.path) || null;

  onMounted(async () => {
    await nextTick();

    currentElm()?.click();

    window.addEventListener("resize", handleResize);
  });

  const handleResize = async () => {
    await nextTick();
    selectElm();
  };

  const selectElm = async (e?: Event) => {
    let target: HTMLElement | null;
    if (!e) target = currentElm();
    else target = e.currentTarget as HTMLElement;

    await nextTick();
    if (!target) return;

    const parentleft = target.parentElement?.getBoundingClientRect().left;
    const parentright = target.parentElement?.getBoundingClientRect().right;
    const targetLeftRes =
      target.getBoundingClientRect().left -
      (parentleft || 0) +
      target.getBoundingClientRect().width / 2 -
      FOLLOWER_WIDTH / 2;
    const targetRightRes =
      target.getBoundingClientRect().right -
      (parentright || 0) -
      target.getBoundingClientRect().width / 2 +
      FOLLOWER_WIDTH / 2;
    if (selectedFollowerData.left > targetLeftRes) {
      selectedFollowerData.left = targetLeftRes;
      setTimeout(() => {
        selectedFollowerData.right = -targetRightRes;
      }, 100);
    } else {
      selectedFollowerData.right = -targetRightRes;
      setTimeout(() => {
        selectedFollowerData.left = targetLeftRes;
      }, 100);
    }
  };
</script>

<template>
  <div class="relative flex items-center justify-center max-md:hidden">
    <div
      ref="selectedFollower"
      :style="{
        left: `${selectedFollowerData.left}px`,
        right: `${selectedFollowerData.right}px`,
      }"
      class="ease-[cubic-bezier(0.16, 1, 0.3, 1)] absolute bottom-0 h-1 rounded-full bg-black transition-all duration-500 ease-out max-md:hidden"
    />

    <NuxtLink
      v-for="r in NAV_ROUTES"
      :key="r.name"
      :ref="(e) => setRefElms(r.path, e)"
      :to="r.path"
      :class="{ 'text-black': route.path.includes(r.path) }"
      class="z-30 px-2 py-2.5 text-xs transition-all hover:text-black md:px-7 md:text-sm"
      @click="selectElm"
    >
      {{ r.name }}
    </NuxtLink>
  </div>
</template>
