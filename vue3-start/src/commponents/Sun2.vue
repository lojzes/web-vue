<script setup lang="ts">
import {ref} from "vue";

const computer = ref('联想')
const book = ref(5)

defineExpose({computer,book})

</script>

<template>
  <h2>sun2</h2>
  <h2>computer {{computer}}</h2>
  <h2>book {{book}}</h2>
</template>

<style scoped>

</style>
