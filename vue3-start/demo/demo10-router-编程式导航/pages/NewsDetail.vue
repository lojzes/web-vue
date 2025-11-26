<script setup lang="ts">

defineProps(['name','content'])

</script>

<template>
    <div>
      <h2>{{name}}</h2>
      <div>{{content}}</div>
    </div>
</template>

<style scoped>

</style>
