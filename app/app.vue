<script lang="ts" setup></script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator color="var(--color-brand)" :height="2" />
  <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout>
</template>
