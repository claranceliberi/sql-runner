<script setup lang="ts">
import TheHeader from "./components/atoms/TheHeader.vue";
import TheIcon from "./components/atoms/TheIcon.vue";
import TheHistory from "./components/organisms/TheHistory.vue";
import SavedQueries from "./components/organisms/SavedQueries.vue";

import { database } from "./data";

import { reactive, ref } from "vue";
import type { Location, User, Vehicle } from "./types";

type resultType = Array<Location | Vehicle | User>;
type keys = keyof Location | keyof Vehicle | keyof User;
type historyType = {
  query: string;
  date: string;
};

const isSidebarActive = reactive({
  savedQueries: true,
  history: true,
});

const query = ref("");
const results = ref<resultType>();
const headerValue = ref<Array<keys>>([]);
const message = ref("");
const history = ref<Array<historyType>>([]);

function search(query: string) {
  if (query === "" || !query) {
    message.value = "Please enter a query";
    return;
  }

  // search
  results.value = database.find(
    (db) => db.query.toLowerCase() === query.toLowerCase()
  )?.data;

  // save in history
  history.value.unshift({
    query: query,
    date: new Date().toLocaleString(),
  });

  if (results.value) {
    headerValue.value = Object.keys(results.value[0]) as Array<keys>;
    message.value = "";
  } else {
    message.value = "No results found";
  }
}
</script>

<template>
  <!-- header section -->
  <header class="border-b-primary-600 border-b-2">
    <h2 class="py-4 pl-8 font-bold text-2xl">SQL Runner</h2>
  </header>
  <main class="flex h-[85%]">
    <!-- saved section -->
    <aside
      class="border-r-primary-600 border-r-2 px-2 py-2 relative"
      :class="{ 'w-1/6': isSidebarActive.savedQueries }"
    >
      <button
        class="rounded border-primary-600 border bg-primary-100 absolute -right-2 top-16"
        :class="{ 'rotate-180': !isSidebarActive.savedQueries }"
        @click="isSidebarActive.savedQueries = !isSidebarActive.savedQueries"
      >
        <TheIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </TheIcon>
      </button>
      <SavedQueries :databases="database" v-if="isSidebarActive.savedQueries" />
    </aside>
    <!-- editor section -->
    <article class="flex-1 py-2 flex-col">
      <div class="h-1/2 px-4">
        <div class="flex justify-between">
          <div
            class="bg-primary-300 py-2 px-4 rounded-t border-primary-600 border-t border-x translate-y-[1px]"
          >
            <TheHeader>Input</TheHeader>
          </div>
          <div class="flex items-center space-x-4">
            <button title="clear" @click="query = ''">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-trash"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path
                  d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                ></path>
              </svg>
            </button>
            <button
              class="bg-sky-500 px-4 space-x-2 mb-1 py-2 rounded hover:bg-sky-600 flex items-center"
              @click="search(query)"
            >
              <!-- eslint-disable-next-line prettier/prettier -->
              <TheIcon ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-play"
                >
                  <!-- eslint-disable-next-line prettier/prettier -->
                  <polygon points="5 3 19 12 5 21 5 3"></polygon></svg >
              </TheIcon>
              <span>Run</span>
            </button>
          </div>
        </div>
        <div
          class="bg-primary-300 h-[85%] rounded-b rounded-tr border border-primary-600"
        >
          <textarea
            class="bg-transparent w-full h-full box-border outline-none resize-none p-2"
            name=""
            id=""
            v-model="query"
            placeholder="SELECT * FROM locations"
          ></textarea>
        </div>
      </div>
      <div class="h-1/2 px-2 border-t-primary-600 border-t-2">
        <TheHeader>Output</TheHeader>
        <hr class="mt-3 border-primary-600" />

        <div class="overflow-x-auto h-[90%] relative">
          <table
            class="w-full text-sm text-left text-text h-full overflow-y-auto"
            v-if="results && results.length > 0"
          >
            <thead
              class="text-xs text-text uppercase bg-primary-200 sticky top-0"
            >
              <tr>
                <th
                  scope="col"
                  class="py-3 px-6"
                  v-for="head in headerValue"
                  :key="head"
                >
                  {{ head }}
                </th>
              </tr>
            </thead>
            <tbody class="">
              <tr
                class="bg-transparent border-b border-primary-500"
                v-for="row in results"
                :key="row.id"
              >
                <td
                  class="py-4 px-6"
                  v-for="colName in headerValue"
                  :key="row.id + colName"
                >
                  {{ row[colName] }}
                </td>
              </tr>
            </tbody>
          </table>
          <p v-else class="text-center pt-10">{{ message }}</p>
        </div>
      </div>
    </article>
    <!-- history section -->
    <aside
      class="px-2 py-2 border-l-primary-600 border-l-2 relative"
      :class="{ 'w-1/6': isSidebarActive.history }"
    >
      <button
        class="rounded border-primary-600 border bg-primary-100 absolute -left-3 top-16"
        :class="{ 'rotate-180': !isSidebarActive.history }"
        @click="isSidebarActive.history = !isSidebarActive.history"
      >
        <TheIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </TheIcon>
      </button>
      <TheHistory v-if="isSidebarActive.history" :history="history" />
    </aside>
  </main>
  <!-- footer -->
  <footer class="border-t-primary-600 bg-primary-100 z-10 border-t-2">
    <p class="text-center py-2">SQL runner @ 2022</p>
  </footer>
</template>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  @apply rounded;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-primary-500 rounded;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  @apply bg-primary-600;
}
</style>
