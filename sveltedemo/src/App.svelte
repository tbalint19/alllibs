<script lang="ts">
  import Fruit from "./components/Fruit.svelte";

  let value = ""
  let name = "John"

  const change = () => {
    name = "Jim"
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

  $: localStorage.setItem("value", value)

</script>

<main>
  <h1>Hello { name } from svelte in our store</h1>

  <button on:click={() => value = ""}>Reset</button>
  <input type="text" bind:value={value}>

  <h2>Fruits:</h2>
  <ul>
    {#each fruits as fruit}

      {#if fruit.isAvailable}
        <Fruit {fruit} />
      {/if}

    {/each}
  </ul>

  <button on:click={change}>Click me</button>

</main>

<style>

</style>
