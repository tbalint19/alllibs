<script lang="ts">
  type Fruit = {
    name: string,
    color: string,
    isAvailable: boolean,
  }

  export let fruit: Fruit
</script>

<li>{fruit.name} ({fruit.color})</li>