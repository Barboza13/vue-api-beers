<script setup lang="ts">
import { defineProps } from "vue"
import { IBeer } from "@/interfaces/IBeer"

defineProps({
  beers: {
    type: Array<IBeer>,
    required: true,
  },
})
</script>

<template>
  <ul class="beers-list">
    <li v-for="beer in $props.beers" :key="beer.id" class="beers-list-item">
      {{ beer.name }}
    </li>
  </ul>
</template>

<style scoped lang="scss"></style>
