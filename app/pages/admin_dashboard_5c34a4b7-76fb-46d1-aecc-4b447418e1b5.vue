<script setup lang="ts">
  import { fGetUsers } from "~~/shared/utils/database";

  useHead({ title: "Admin Dashboard" });

  const fetching = ref(true);
  const users = ref<any[]>([]);
  const error = ref<string | null>(null);

  const fetchData = async () => {
    fetching.value = true;
    try {
      const res = await fGetUsers();
      console.log("the fucking response is ", res);
      users.value = res;
    } catch (err) {
      console.error("Error fetching users: ", err);
      error.value = "Error: " + err;
    } finally {
      fetching.value = false;
    }
  };

  onMounted(() => {
    fetchData();
  });
</script>
<template>
  <div
    class="flex min-h-screen w-full flex-col items-center bg-gray-950 text-white"
  >
    <PageHeader
      title="Admin Dashboard"
      subtitle="Here are the list of users submitted requests to your service"
    />

    <div class="flex w-full max-w-7xl flex-col gap-20 px-5 py-30 lg:flex-row">
      <div v-if="fetching" class="flex w-full items-center justify-center p-10">
        Loading...
      </div>
      <div
        v-if="!fetching && !users?.length"
        class="flex w-full items-center justify-center p-10"
      >
        No Requests
      </div>
      <table v-if="!fetching && users?.length" class="w-max min-w-full">
        <thead>
          <tr class="">
            <th class="p-3">Email</th>
            <th class="p-3">Full Name</th>
            <th class="p-3">Project Detail</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user?._id" class="">
            <td class="p-3">
              <NuxtLink
                :to="'mailto:' + user.email"
                target="_blank"
                class="flex rounded-full bg-white/5 p-3 text-nowrap transition-all hover:bg-white/10"
              >
                <div v-if="user?.email">{{ user.email }}</div>
                <div v-if="!user?.email" class="text-gray-500/50">No email</div>
              </NuxtLink>
            </td>
            <td class="p-3">
              <div v-if="user?.fullName">{{ user.fullName }}</div>
              <div v-if="!user?.fullName" class="text-gray-500/50">No name</div>
            </td>
            <td class="p-3">
              <div v-if="user?.details">{{ user.details }}</div>
              <div v-if="!user?.details" class="text-gray-500/50">
                No detail
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <HomeFooter />
  </div>
</template>
