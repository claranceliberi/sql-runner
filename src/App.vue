<script setup lang="ts">
import TheHeader from "./components/atoms/TheHeader.vue";
</script>

<template>
  <!-- header section -->
  <header class="border-b-primary-600 border-b-2">
    <h2 class="py-4 pl-8 font-bold text-2xl">SQL Runner</h2>
  </header>
  <main class="flex h-[82%]">
    <!-- saved section -->
    <aside class="w-1/6 border-r-primary-600 border-r-2 px-2 py-2">
      <TheHeader>Saved Queries</TheHeader>
      <hr class="mt-3 border-primary-600" />
    </aside>
    <!-- editor section -->
    <article class="w-4/6 py-2 flex-col">
      <div class="h-1/2 px-2">
        <div class="flex justify-between">
          <div
            class="bg-primary-300 py-2 px-4 rounded-t border-primary-600 border-t border-x translate-y-[1px]"
          >
            <TheHeader>Input</TheHeader>
          </div>
          <div>
            <button class="bg-sky-500 px-6 mb-1 py-2 rounded hover:bg-sky-600">
              Run
            </button>
          </div>
        </div>
        <div
          class="bg-primary-300 h-[85%] rounded-b rounded-tr border border-primary-600"
        >
          <textarea
            class="bg-transparent w-full h-full box-border outline-none resize-none px-2"
            name=""
            id=""
          >
SELECT * FROM WHERE 
</textarea
          >
        </div>
      </div>
      <div class="h-1/2 px-2 border-t-primary-600 border-t-2">
        <TheHeader>Output</TheHeader>
        <hr class="mt-3 border-primary-600" />

        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-text">
            <thead class="text-xs text-text uppercase bg-primary-200">
              <tr>
                <th scope="col" class="py-3 px-6">Product name</th>
                <th scope="col" class="py-3 px-6">Color</th>
                <th scope="col" class="py-3 px-6">Category</th>
                <th scope="col" class="py-3 px-6">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-transparent border-b border-primary-500">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-text whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">Sliver</td>
                <td class="py-4 px-6">Laptop</td>
                <td class="py-4 px-6">$2999</td>
              </tr>
              <tr class="bg-transparent border-b border-primary-500">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-text whitespace-nowrap"
                >
                  Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">White</td>
                <td class="py-4 px-6">Laptop PC</td>
                <td class="py-4 px-6">$1999</td>
              </tr>
              <tr class="bg-transparent">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-text whitespace-nowrap"
                >
                  Magic Mouse 2
                </th>
                <td class="py-4 px-6">Black</td>
                <td class="py-4 px-6">Accessories</td>
                <td class="py-4 px-6">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
    <!-- history section -->
    <aside class="w-1/6 px-2 py-2 border-l-primary-600 border-l-2">
      <TheHeader>History</TheHeader>
      <hr class="mt-3 border-primary-600" />
    </aside>
  </main>
  <!-- footer -->
  <footer class="border-t-primary-600 border-t-2">
    <p class="text-center py-4">SQL runner @ 2022</p>
  </footer>
</template>

<style scoped></style>
