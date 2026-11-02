<script setup lang="ts">
  import { fAddUser } from "~~/shared/utils/database";
  import gsap from "gsap";

  useHead({ title: "Contact Us" });

  const fullName = ref("");
  const email = ref("");
  const details = ref("");
  const submitting = ref(false);
  const subTxt = ref("");

  onMounted(() => {
    animTl = gsap.timeline({ paused: true });
    animTl.fromTo(
      ".notify",
      { scale: 0.8, y: 10, opacity: 0 },
      { scale: 1, y: 65, opacity: 1, duration: 0.4, ease: "back.out(2)" }
    );
  });
  
  let animTl: any;

  const animate = () => {
    animTl.play(0);
    setTimeout(() => animTl.reverse(), 1800);
  };

  const handleSubmission = async () => {
    if (!email?.value.length || !fullName?.value.length || !details?.value.length) {
      subTxt.value = "Fill all fields first";
      animate();
      submitting.value = false;
      return;
    }

    submitting.value = true;

    const subed = localStorage.getItem("__alya_user_subscribed__");

    if (subed) {
      subTxt.value = "Already submitted";
      animate();
      submitting.value = false;
      return;
    }

    try {
      await fAddUser({ fullName: fullName.value, email: email.value, details: details.value });
      subTxt.value = "Submitted";
      localStorage.setItem("__alya_user_subscribed__", "true");
      animate();
    } catch (err) {
      subTxt.value = "Something went wrong";
      animate();
      console.log(err);
    } finally {
      submitting.value = false;
    }
  };
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Contact Us"
      subtitle="Start a conversation with our enterprise sector."
      bgImage="https://aliyaconstructionplc.com/wp-content/uploads/2026/05/Gemini_Generated_Image_b71en4b71en4b71e-777x1024.png"
    />

    <div class="flex w-full max-w-7xl flex-col gap-20 px-5 py-30 lg:flex-row">
      <!-- Form Section -->
      <div class="flex w-full flex-col gap-8 lg:w-1/2">
        <div
          class="text-brand-500 /font-[Switzer] text-sm font-bold uppercase"
        >
          Get In Touch
        </div>
        <div
          class="/font-[Haas] text-[clamp(35px,4vw,50px)] font-bold text-white shadow-sm"
        >
          Let's build the future together.
        </div>

        <form class="mt-4 flex w-full max-w-lg flex-col gap-6" @submit.prevent="handleSubmission">
          <div class="flex flex-col gap-2">
            <label class="/font-[Switzer] text-sm text-gray-400"
              >Full Name</label
            >
            <input
              type="text"
	      v-model="fullName"
              class="focus:border-brand-500 w-full border-b border-gray-700 bg-transparent py-3 text-white transition-colors outline-none"
              placeholder="Belay Taye"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="/font-[Switzer] text-sm text-gray-400"
              >Email Address</label
            >
            <input
			    v-model="email"
              type="email"
              class="focus:border-brand-500 w-full border-b border-gray-700 bg-transparent py-3 text-white transition-colors outline-none"
              placeholder="belaytaye@example.com"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="/font-[Switzer] text-sm text-gray-400"
              >Project Details</label
            >
            <textarea
			    v-model="details"
              rows="4"
              class="focus:border-brand-500 mt-2 w-full resize-none rounded-lg border border-gray-700 bg-gray-900 p-4 text-white transition-colors outline-none"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>
          <button
			  type="submit"
			  :disabled="submitting"
            class="relative z-0 hover:bg-brand-50 hover:text-brand-900 mt-4 self-start rounded-full bg-white px-12 py-4 /font-[Switzer] font-bold text-black transition-colors"
          >
              <div
                class="notify z-40 text-nowrap pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1.5 text-sm font-black text-black opacity-0 shadow-xl"
              >
                {{ subTxt }}
              </div>
	  {{submitting ? 'Please wait' : 'Submit Request'}}
          </button>
        </form>
      </div>

      <!-- Locations Section -->
      <div class="mt-10 flex w-full flex-col gap-12 lg:mt-0 lg:w-1/2 lg:pl-10">
        <div
          class="flex flex-col gap-6 rounded-3xl border border-white/5 bg-gray-900 p-10"
        >
          <div class="/font-[Haas] text-2xl font-bold">Global Headquarters</div>
          <div class="/font-[Switzer] text-lg text-gray-400">
            Bole, Near Atlas Traffic Light,
            <br />
            KT Apartment Building @ 7th floor
            <br />
            Addis Ababa, ETHIOPIA
            <br />
            <span class="text-sm opacity-70">P.O. Box: 8566</span>
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-brand-500 /font-[Switzer] text-lg font-bold">
              +251 - 949 00 77 77
            </div>
            <div class="text-brand-500 /font-[Switzer] text-lg font-bold">
              +251 - 986 00 77 77
            </div>
            <div class="text-brand-500 /font-[Switzer] text-lg font-bold">
              +251 - 116 67 07 77
            </div>
            <div class="text-brand-500 /font-[Switzer] text-lg font-bold">
              +251 - 940 22 22 23
            </div>
          </div>
          <div class="mt-2 flex flex-col gap-2">
            <NuxtLink
              to="mailto:aliyaconstructionplc@gmail.com"
              class="hover:text-brand-500 /font-[Switzer] w-fit cursor-pointer border-b border-dashed border-gray-500 pb-1 text-base text-white transition-colors"
            >
              aliyaconstructionplc@gmail.com
            </NuxtLink>
          </div>
        </div>

        <!-- Inserted Map Component -->
        <section
          class="px-4/ /py-16 /md:px-10 w-full rounded-3xl bg-gray-100 shadow-xl"
        >
          <div class="relative overflow-hidden rounded-3xl shadow-2xl">
            <!-- Google Map -->
            <iframe
              src="https://maps.google.com/maps?q=Aliya%20Construction%20Plc%20Addis%20Ababa&z=15&output=embed"
              class="h-[500px] w-full"
              style="border: 0"
              allow="fullscreen"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </div>

    <HomeFooter />
  </div>
</template>
