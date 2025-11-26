<script setup lang="ts">
import {ref} from 'vue'

const toy = ref('奥特曼')

// 父传 子：通过 props 传值
defineProps(['car','sendToy'])

</script>

<template>
<h2>子组件:{{toy}}
</h2>
 <h2>父传子组件:{{car}}
 </h2>

  <button @click="sendToy(toy)">子传父</button>

</template>

<style scoped>

</style>
