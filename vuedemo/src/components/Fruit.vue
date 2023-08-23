<script setup lang="ts">
type Fruit = {
  name: string,
  color: string,
  isAvailable: boolean,
}
defineProps<{
  fruit: Fruit
}>()
</script>

<template>
  <li v-if="fruit.isAvailable">
    {{fruit.name}} ({{fruit.color}})
  </li>
</template>

<style scoped>

</style>
