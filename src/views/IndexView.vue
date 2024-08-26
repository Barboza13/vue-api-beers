<script setup lang="ts">
import BeersContainer from "@/components/BeersContainer.vue"
import ViewLayout from "@/layouts/ViewLayout.vue"
</script>

<template>
  <ViewLayout>
    <template v-slot:main>
      <BeersContainer />
    </template>
  </ViewLayout>
</template>

<style scoped lang="scss"></style>
