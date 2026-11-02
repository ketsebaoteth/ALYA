<script setup lang="ts">
  useHead({ title: "Our Services" });

  const services = [
    {
      title: "Residential Building Construction",
      desc: "We undertake residential construction projects ranging from private homes to multi-story apartment developments.",
      list: [
        "Residential homes",
        "G+1 and multi-level buildings",
        "Apartment construction",
        "Structural and finishing works",
        "Site development",
      ],
    },
    {
      title: "Commercial Building Construction",
      desc: "We deliver commercial projects designed to support business operations and long-term functionality.",
      list: [
        "Office buildings",
        "Mixed-use developments",
        "Retail and commercial spaces",
        "Business facilities",
        "Building extensions",
      ],
    },
    {
      title: "Institutional Construction",
      desc: "Aliya Construction PLC provides construction services for public and institutional facilities.",
      list: [
        "Schools and training centers",
        "Hospitals and health facilities",
        "Government buildings",
        "Community facilities",
      ],
    },
    {
      title: "Industrial & Warehouse Facilities",
      desc: "We construct facilities designed for storage, production, and operational use.",
      list: [
        "Warehouses",
        "Industrial buildings",
        "Storage facilities",
        "Utility structures",
      ],
    },
    {
      title: "Renovation & Finishing Works",
      desc: "We provide renovation and improvement services for existing structures.",
      list: [
        "Interior and exterior renovation",
        "Structural modification",
        "Finishing works",
        "Repair and maintenance",
      ],
    },
    {
      title: "Site Management & Supervision",
      desc: "Proper supervision is essential for successful construction delivery. Our company ensures effective coordination throughout project execution.",
      list: [
        "Site planning",
        "Work supervision",
        "Progress monitoring",
        "Resource coordination",
        "Quality assurance",
      ],
    },
    // {
    //   title: "Equipment & Construction Support",
    //   desc: "Aliya Construction PLC operates construction equipment and machinery to support project execution and operational efficiency.",
    //   list: ["Concrete mixers", "Lifting equipment", "Compactors", "Dump trucks", "Scaffolding systems", "Site equipment support"]
    // }
  ];
</script>

<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Our Services"
      subtitle="Comprehensive construction solutions tailored for enterprise scale logistics and execution."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_wv3w8swv3w8swv3w-777x1024.png"
    />

    <div class="flex w-full max-w-7xl flex-col gap-15 px-5 py-30">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(svc, i) in services"
          :key="i"
          class="hover:border-brand-500/50 flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-900 p-10 shadow-xl transition-colors"
        >
          <div class="/font-[Haas] text-2xl font-bold text-white">
            {{ svc.title }}
          </div>
          <div class="/font-[Switzer] text-base text-gray-400">
            {{ svc.desc }}
          </div>
          <ul class="mt-2 flex flex-col gap-2">
            <li
              v-for="(item, j) in svc.list"
              :key="j"
              class="/font-[Switzer] flex items-center gap-3 text-sm text-white/80"
            >
              <div class="bg-brand-500 h-1.5 w-1.5 shrink-0 rounded-full"></div>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA Palette -->
      <div
        class="bg-brand-600 relative mt-10 flex w-full flex-col items-center justify-between gap-10 overflow-hidden rounded-3xl p-12 shadow-2xl xl:flex-row"
      >
        <div
          class="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"
        ></div>
        <div
          class="relative z-10 flex max-w-3xl flex-col gap-4 text-center xl:text-left"
        >
          <div
            class="/font-[Haas] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white"
          >
            Our Commitment to your Project is Exceptional
          </div>
          <div class="/font-[Switzer] text-lg text-white/90">
            We are committed to delivering construction services with quality
            workmanship, professional management, and reliable project execution
            from planning through completion.
          </div>
        </div>
        <NuxtLink
          to="/contact"
          class="text-brand-900 /font-[Switzer] relative z-10 shrink-0 rounded-full bg-white px-8 py-4 text-lg font-bold shadow-xl transition-transform hover:scale-105"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>

    <HomeFooter />
  </div>
</template>
