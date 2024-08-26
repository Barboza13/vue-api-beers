<script setup lang="ts">
import { onMounted } from "vue"
import BeersList from "./BeersList.vue"
import { useStore } from "@/store/store"

const store = useStore()

onMounted(() => {
  store.getData()
})
</script>

<template>
  <section class="beers-container">
    <BeersList :beers="store.$state.beers" />
  </section>
</template>

<style scoped lang="scss">
.beers-container {
  background: red;
}
</style>
