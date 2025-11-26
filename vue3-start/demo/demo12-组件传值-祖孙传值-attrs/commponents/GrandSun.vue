<script setup lang="ts">
defineProps(['a', 'b', 'x', 'y','updateA'])
</script>

<template>
  <h2>孙组件</h2>

  <h1>a : {{ a }}</h1>
  <h1>b : {{ b }}</h1>
  <h1>x : {{ x }}</h1>
  <h1>y : {{ y }}</h1>

  <button @click="updateA(a)">孙传祖</button>
</template>

<style scoped>

</style>
