<script lang="ts" setup>
import TheHeader from "../atoms/TheHeader.vue";
import TheIcon from "../atoms/TheIcon.vue";
import moment from "moment";

type historyType = {
  query: string;
  date: string;
};

const props = defineProps<{ history: historyType[] }>();
</script>

<template>
  <div class="">
    <TheHeader>
      <span class="flex space-x-2 items-center">
        <TheIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-repeat"
          >
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <polyline points="7 23 3 19 7 15"></polyline>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </TheIcon>
        <span>History</span>
      </span>
    </TheHeader>
    <hr class="mt-3 border-primary-600" />
    <ul>
      <li v-for="(item, index) in props.history" :key="index" class="py-1 px-2">
        <p>{{ item.query }}</p>
        <p class="text-sm opacity-50">{{ moment(item.date).fromNow() }}</p>
      </li>
    </ul>
  </div>
</template>
