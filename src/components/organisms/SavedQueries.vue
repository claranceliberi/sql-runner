<script lang="ts" setup>
import TheHeader from "../atoms/TheHeader.vue";
import TheIcon from "../atoms/TheIcon.vue";

type Database = {
  query: string;
  data: any;
};

type prop = {
  databases: Database[];
};

const props = defineProps<prop>();
const emits = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: "rerun", query: string): void;
}>();
</script>

<template>
  <div>
    <TheHeader>
      <span class="flex space-x-2 items-center">
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
            class="feather feather-save"
          >
            <path
              d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
            ></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
        </TheIcon>
        <span>Saved Queries</span>
      </span>
    </TheHeader>
    <hr class="mt-3 border-primary-600" />
    <ol class="mt-4">
      <li
        @click="emits('rerun', query.query)"
        class="py-1 hover:bg-primary-200 pl-1 cursor-pointer"
        v-for="query in props.databases"
        :key="query.query"
      >
        {{ query.query }}
      </li>
    </ol>
  </div>
</template>
