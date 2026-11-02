<script setup lang="ts">
  useHead({ title: "About Us" });

  const downloadProfile = () => {
    const link = document.createElement("a");
    link.href = "/company_profile.pdf";
    link.setAttribute("download", "aliya-co-profile.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const leaders = [
    {
      name: "Eng. Belay Taye Gurmu",
      role: "CEO (21 Years Exp.)",
      img: "/person1.jpg",
    },
    {
      name: "Ashebir Taye Gurmu",
      role: "Share Holder",
      img: "/person3.jpg",
    },
  ];

  const members = [
    {
      name: "Tesfaye Abiebie",
      role: "Project Manager (9 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Senait Fiseha Getnet",
      role: "Office Engineer (8 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Feven Zewdie",
      role: "Office Engineer (3 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Sosina Mamo",
      role: "Site Engineer (7 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Yoseph Fisseha",
      role: "Site Engineer (3 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Anwar Mohammed",
      role: "Site Engineer (3 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Natnael Markos",
      role: "Site Engineer (2 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Tekaligne Mengesha",
      role: "Site Engineer (2 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Solomon Gizachew",
      role: "Finance Manager (23 Yrs Exp)",
      img: "/place.webp",
    },
    {
      name: "Hana Messele",
      role: "Accountant (9 Yrs Exp)",
      img: "/place.webp",
    },
  ];
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="About Aliya"
      subtitle="Building the foundations of tomorrow with uncompromising quality and expertise."
      bg-image="https://aliyaconstructionplc.com/wp-content/uploads/2020/09/bosa-business2-about1.png"
    />

    <!-- Our Story Layout (Original) -->
    <div class="flex w-full max-w-7xl flex-col gap-20 px-5 py-30 lg:flex-row">
      <div class="flex w-full flex-col gap-8 lg:w-1/2">
        <div class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase">
          Our Story
        </div>
        <div class="/font-[Haas] text-[clamp(35px,4vw,60px)] font-bold">
          Decades of Excellence in Construction
        </div>
        <div class="/font-[Switzer] text-lg text-gray-400">
          Founded with a vision to redefine the construction landscape, Aliya
          has grown from a specialized contractor into a full-suite enterprise
          construction firm. Our journey is paved with milestones of structural
          innovation and engineering triumphs.
          <br />
          <br />
          We believe in constructing not just buildings, but enduring legacies.
          Every project represents our commitment to safety, precision, and
          architectural brilliance.
        </div>
      </div>
      <div
        class="group relative aspect-square h-full w-full overflow-hidden rounded-2xl lg:w-1/2"
      >
        <img
          src="/pal40.jpg"
          class="group-hover:scale-100.4 h-full w-3/4 origin-top rounded-2xl object-cover transition-transform duration-1000"
        />
      </div>
    </div>

    <!-- Added Info Palettes -->
    <div
      class="flex w-full flex-col items-center border-t border-white/5 bg-gray-950 px-5 py-20"
    >
      <div class="flex w-full max-w-7xl flex-col gap-15">
        <div class="flex flex-col gap-15 lg:flex-row">
          <div class="flex flex-col gap-6 lg:w-1/2">
            <div
              class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase"
            >
              Building with Experience
            </div>
            <div class="/font-[Haas] text-[clamp(30px,3.3vw,50px)] font-bold">
              Reliability, and Professional Execution
            </div>
            <div
              class="/font-[Switzer] flex flex-col gap-4 text-lg text-gray-400"
            >
              <p>
                Based in Addis Ababa,
                <strong>Aliya Construction PLC</strong>
                operates as a licensed contractor committed to delivering
                projects that meet required standards while maintaining
                efficiency, safety, and client satisfaction.
              </p>
              <p>
                Established in 2014 G.C. with the objective of contributing to
                the country’s growing infrastructure and building sector. Since
                its establishment, the company has delivered residential,
                commercial, and institutional projects through structured
                planning, technical supervision, and quality-focused execution.
              </p>
            </div>
          </div>
          <div
            class="flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-900 p-10 shadow-2xl lg:w-1/2"
          >
            <div class="/font-[Haas] text-3xl font-bold">
              Founded by Engineer Belay Taye
            </div>
            <div
              class="text-brand-500 /font-[Switzer] -mt-4 text-sm font-bold uppercase"
            >
              Who We Are
            </div>
            <div
              class="/font-[Switzer] mt-2 flex flex-col gap-4 text-lg text-gray-400"
            >
              <p>
                Founded by
                <strong>Engineer Belay Taye</strong>
                , Aliya Construction PLC was established to participate in
                Ethiopia’s expanding construction industry and provide
                dependable building solutions for both public and private sector
                projects.
              </p>
              <p>
                The company is registered and licensed under Ethiopian
                regulations and continues to grow through experience,
                professional management, and practical execution. Today, our
                company includes engineers, project managers, financial
                professionals, and skilled construction personnel working
                together to ensure successful project delivery.
              </p>
            </div>

            <button
              class="/font-[Switzer] mt-4 w-fit rounded-full bg-white px-6 py-3 font-bold text-black transition-colors hover:bg-gray-200"
              @click="downloadProfile"
            >
              Download Company Profile
            </button>
          </div>
        </div>

        <div
          class="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black p-8"
        >
          <div
            class="mb-2 flex h-12 w-12 shrink-0 transform items-center justify-center rounded-full bg-white/5 transition-transform group-hover:scale-110"
          >
            <div class="bg-brand-500 h-4 w-4 rotate-45 rounded-md"></div>
          </div>
          <div class="/font-[Haas] text-2xl font-bold text-white">
            Our Background
          </div>
          <div class="/font-[Switzer] text-base text-gray-400">
            ALIYA CONSTRUCTION PLC is company established by ENGINEER BELAY TAYE
            in 2014 G.C. to play a major role in the booming local construction
            industry. The capital of the company has been fully paid at the time
            of its establishment and since then it has continued to increase
            significantly. The company has a Business License from Addis Ababa
            Trade Industry & Urban Development Bureau Grade-5 General Contractor
            OR/AND Grade-4 Building Contractor. It has TIN certificate given
            from Federal Democratic Republic of Ethiopia Bureau of Revenue. And
            also registered for VAT and received certificate from the same
            office. At present the Company’s general manager is Engineer Belay
            Taye all his legal papers are attached herewith.
          </div>
        </div>
        <div
          class="/flex mb-2 hidden h-12 w-12 shrink-0 transform items-center justify-center rounded-full bg-white/5 transition-transform group-hover:scale-110"
        >
          <div class="/font-[Haas] mb-2 text-2xl font-bold text-white">
            Our Commitment
          </div>
          <div class="/font-[Switzer] text-base text-white/80">
            At Aliya Construction PLC, we believe construction is more than
            completing structures. Every project represents responsibility,
            planning, and long-term value. We remain committed to delivering
            dependable construction solutions that support growth and
            development across Ethiopia.
          </div>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            class="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black p-8"
          >
            <div
              class="mb-2 flex h-12 w-12 shrink-0 transform items-center justify-center rounded-full bg-white/5 transition-transform group-hover:scale-110"
            >
              <div class="bg-brand-500 h-4 w-4 rounded-full"></div>
            </div>
            <div class="/font-[Haas] text-2xl font-bold text-white">
              Our Vision
            </div>
            <div class="/font-[Switzer] text-base text-gray-400">
              To become a leading construction company recognized for integrity,
              excellence, and delivering results beyond client expectations.
            </div>
          </div>
          <div
            class="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-black p-8"
          >
            <div
              class="mb-2 flex h-12 w-12 shrink-0 transform items-center justify-center rounded-full bg-white/5 transition-transform group-hover:scale-110"
            >
              <div class="bg-brand-500 h-4 w-4 rotate-45 rounded-md"></div>
            </div>
            <div class="/font-[Haas] text-2xl font-bold text-white">
              Our Mission
            </div>
            <div class="/font-[Switzer] text-base text-gray-400">
              To provide quality construction services through competitive
              pricing, safe working environments, efficient project management,
              and timely project completion.
            </div>
          </div>
          <div
            class="bg-brand-900 border-brand-500/30 relative flex flex-col gap-4 overflow-hidden rounded-3xl border p-8"
          >
            <div class="/font-[Haas] mb-2 text-2xl font-bold text-white">
              Our Commitment
            </div>
            <div class="/font-[Switzer] text-base text-white/80">
              At Aliya Construction PLC, we believe construction is more than
              completing structures. Every project represents responsibility,
              planning, and long-term value. We remain committed to delivering
              dependable construction solutions that support growth and
              development across Ethiopia.
            </div>
          </div>
        </div>

        <div
          class="flex flex-col gap-15 rounded-3xl border border-white/5 bg-gray-900 p-10 lg:flex-row lg:p-16"
        >
          <div class="flex flex-col gap-6 lg:w-1/2">
            <div class="/font-[Haas] text-[clamp(30px,3vw,45px)] font-bold">
              What We Do
            </div>
            <div class="/font-[Switzer] text-lg text-gray-400">
              Aliya Construction PLC delivers construction services across
              multiple sectors:
            </div>
            <ul class="/font-[Switzer] mt-2 flex flex-col gap-3 text-white/90">
              <li class="flex items-center gap-3">
                <span class="bg-brand-500 h-2 w-2 rounded-full"></span>
                Residential Buildings & Apartments
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-brand-500 h-2 w-2 rounded-full"></span>
                Commercial Buildings & Facilities
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-brand-500 h-2 w-2 rounded-full"></span>
                Institutional Projects & Schools
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-brand-500 h-2 w-2 rounded-full"></span>
                Warehouses and Industrial Complexes
              </li>
              <li class="flex items-center gap-3">
                <span class="bg-brand-500 h-2 w-2 rounded-full"></span>
                Mixed-use Developments
              </li>
            </ul>
          </div>
          <div
            class="flex flex-col gap-6 border-white/10 lg:w-1/2 lg:border-l lg:pl-10"
          >
            <div class="/font-[Haas] text-[clamp(30px,3vw,45px)] font-bold">
              Our Approach
            </div>
            <div class="/font-[Switzer] text-lg text-gray-400">
              We follow a structured project delivery process that focuses on
              planning, supervision, and quality assurance.
            </div>
            <div class="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                class="/font-[Switzer] rounded-xl border border-white/5 bg-black p-4 text-sm text-white/80"
              >
                Detailed project scheduling
              </div>
              <div
                class="/font-[Switzer] rounded-xl border border-white/5 bg-black p-4 text-sm text-white/80"
              >
                Resource & manpower planning
              </div>
              <div
                class="/font-[Switzer] rounded-xl border border-white/5 bg-black p-4 text-sm text-white/80"
              >
                Site supervision & control
              </div>
              <div
                class="/font-[Switzer] rounded-xl border border-white/5 bg-black p-4 text-sm text-white/80"
              >
                Continuous monitoring
              </div>
              <div
                class="/font-[Switzer] rounded-xl border border-white/5 bg-black p-4 text-sm text-white/80"
              >
                Coordination with stakeholders
              </div>
              <div
                class="bg-brand-600 /font-[Switzer] rounded-xl p-4 text-sm font-bold text-white shadow-lg"
              >
                Timely delivery & handover
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Capabilities & Machinery Section -->
    <div
      class="/flex /flex-col hidden w-full items-center bg-gray-900 px-5 py-30"
    >
      <div class="flex w-full max-w-7xl flex-col gap-15">
        <div class="flex flex-col items-center gap-12 text-center">
          <div
            class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase"
          >
            Scalable Logistics
          </div>
          <div class="/font-[Haas] text-[clamp(40px,5vw,70px)] font-bold">
            Workforce & Equipment
          </div>
          <div class="/font-[Switzer] max-w-2xl text-lg text-gray-400">
            Backed by a systematically organized workforce and a comprehensive
            fleet of heavy-duty construction machinery ensuring full execution
            self-reliance.
          </div>
        </div>

        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div
            class="hover:border-brand-500/30 flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-950 p-10 shadow-2xl transition-colors"
          >
            <div class="/font-[Haas55] text-3xl font-bold text-white">
              Our Staff (34+ Core Professionals)
            </div>
            <div
              class="/font-[Switzer] flex flex-col gap-4 text-lg text-gray-400"
            >
              <p>
                We boast a foundational company of highly skilled
                <strong>
                  Civil Engineers, Building Engineers, and Construction Managers
                </strong>
                . The engineering core includes
                <strong>Senait Fiseha</strong>
                and
                <strong>Feven Zewdie</strong>
                managing central office operations, supported natively by active
                site engineers including
                <strong>Sosina Mamo</strong>
                ,
                <strong>Yoseph Fisseha</strong>
                ,
                <strong>Anwar Mohammed</strong>
                ,
                <strong>Natnael Markos</strong>
                , and
                <strong>Tekaligne Mengesha</strong>
                .
              </p>
              <p>
                Additionally, our administrative logistics are overseen
                gracefully by
                <strong>Hana Messele</strong>
                and
                <strong>Ashebir Taye</strong>
                .
              </p>
            </div>
          </div>

          <div
            class="hover:border-brand-500/30 flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-950 p-10 shadow-2xl transition-colors"
          >
            <div class="/font-[Haas55] text-3xl font-bold text-white">
              Heavy Machinery Fleet
            </div>
            <div
              class="/font-[Switzer] flex flex-col gap-4 text-lg text-gray-400"
            >
              <p>
                To assure uninterrupted velocity across operations, we maintain
                our own fleet:
              </p>
              <ul class="flex list-disc flex-col gap-2 pl-5 opacity-90">
                <li>
                  Heavy transports featuring
                  <strong>16m³ UD</strong>
                  and
                  <strong>16.5m³ SINO Dump Trucks</strong>
                  .
                </li>
                <li>
                  Four
                  <strong>1HZ TOYOTA HILUX Pickups</strong>
                  for instant site connectivity.
                </li>
                <li>
                  High-powered
                  <strong>42m Lifts</strong>
                  and top tier
                  <strong>HCB Machines</strong>
                  (2000 blocks daily).
                </li>
                <li>
                  An exhaustive arsenal of concrete mixers (360lt), robin plate
                  compacters, jack hammers, and over
                  <strong>5,000m² of professional scaffolding</strong>
                  .
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Leadership Section -->
    <div
      class="flex w-full flex-col items-center border-t border-gray-900 bg-gray-950 px-5 py-30"
    >
      <div class="flex w-full max-w-7xl flex-col gap-15">
        <div class="flex flex-col items-center gap-8 text-center">
          <div class="/font-[Haas] text-[clamp(40px,5vw,70px)] font-bold">
            Leadership Sector
          </div>
          <div class="/font-[Switzer] max-w-2xl text-lg text-gray-400">
            The visionaries guiding our projects to perfection, bringing decades
            of combined industry experience and strategic oversight.
          </div>
        </div>
        <div
          class="/grid /grid-cols-1 /md:grid-cols-2 flex w-full items-center justify-evenly gap-20"
        >
          <div
            v-for="(leader, i) in leaders"
            :key="i"
            class="group flex max-h-[65vh] w-full cursor-pointer flex-col items-center justify-center gap-5"
          >
            <div
              class="/w-2/5 relative aspect-3/4 overflow-hidden rounded-2xl bg-gray-800 shadow-lg"
            >
              <img
                :src="leader.img"
                class="size-full object-cover opacity-80 transition-all duration-700"
              />
            </div>
            <div class="flex flex-col items-center text-center">
              <div
                class="group-hover:text-brand-500 /font-[Haas55] text-2xl font-bold text-white transition-colors"
              >
                {{ leader.name }}
              </div>
              <div
                class="/font-[Switzer] mt-2 text-sm font-bold text-gray-400 uppercase"
              >
                {{ leader.role }}
              </div>
            </div>
          </div>
        </div>

        <div class="/grid hidden grid-cols-1 gap-10 md:grid-cols-3">
          <div
            v-for="(member, i) in members"
            :key="i"
            class="group flex cursor-pointer flex-col gap-5"
          >
            <div
              class="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-gray-800 shadow-lg"
            >
              <img
                :src="member.img"
                class="size-full object-cover opacity-80 transition-all duration-700"
              />
            </div>
            <div class="flex flex-col items-center text-center">
              <div
                class="group-hover:text-brand-500 /font-[Haas55] text-2xl font-bold text-white transition-colors"
              >
                {{ member.name }}
              </div>
              <div
                class="/font-[Switzer] mt-2 text-sm font-bold text-gray-400 uppercase"
              >
                {{ member.role }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <HomeFooter />
  </div>
</template>
