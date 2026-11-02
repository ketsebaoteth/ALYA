<script setup lang="ts">
  useHead({ title: "FAQ" });
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-white text-black"
  >
    <PageHeader
      title="FAQ"
      subtitle="Common questions regarding our services and operations."
      bg-image="https://images.unsplash.com/photo-1541888081622-44df0e104ae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    />
    <div class="flex w-full max-w-7xl flex-col gap-10 px-5 py-30">
      <!-- Added verbose component via palette-like block -->
      <div
        class="mx-auto flex max-w-4xl flex-col gap-6 rounded-3xl border border-gray-200 bg-gray-50 p-10 text-center shadow-sm"
      >
        <div class="/font-[Haas] text-3xl font-bold">
          Trust & Legal Standing
        </div>
        <div class="/font-[Switzer] text-lg text-gray-600">
          Through years of intensive civil engineering, enterprise building
          construction and continuous operational expansion, we have maintained
          a pristine track record.
          <strong>
            Since its establishment, ALIYA Construction PLC has not been
            involved in any kind of legal disputes or litigation
          </strong>
          . We build on rigorous quality, total transparent communication, and
          absolute safety to ensure long-term harmony with clients, governments,
          and sub-contractors.
        </div>
      </div>

      <HomeFaq />
    </div>
    <HomeFooter />
  </div>
</template>
