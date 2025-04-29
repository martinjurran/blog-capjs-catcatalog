<template>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Origin Country</th>
        <th>Coat</th>
        <th>Pattern</th>
      </tr>
      <tr v-for="catBreed in catCatalogStore.catBreeds" :key="catBreed.name">
        <td>{{ catBreed.name }}</td>
        <td>{{ catBreed.originCountry }}</td>
        <td>{{ catBreed.coat }}</td>
        <td>{{ catBreed.pattern }}</td>
      </tr>

    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useCatCatalog } from '@/stores/catCatalog'

const catCatalogStore = useCatCatalog()

onMounted(() => {
  catCatalogStore.fetchCatBreeds();
})

</script>