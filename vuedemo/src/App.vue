<script setup lang="ts">
  import { ref } from 'vue'
  import Fruit from './components/Fruit.vue';

  const name = ref("John")

  const changeName = () => {
    name.value = "Jim"
  }

  type Fruit = {
    name: string,
    color: string,
    isAvailable: boolean,
  }

  const fruits: Fruit[] = [
    { name: "alma", color: "red", isAvailable: true },
    { name: "barack", color: "peach", isAvailable: false },
    { name: "narancs", color: "orange", isAvailable: true },
  ]
</script>

<template>
  <h1>Hello {{ name }} from vue in our store</h1>

  <h2>Fruits:</h2>
  <ul>
    <div v-for="fruit of fruits">
      <Fruit :fruit="fruit" />
    </div>
  </ul>

  <button @click="changeName">Change</button>
</template>

<style scoped>

</style>
