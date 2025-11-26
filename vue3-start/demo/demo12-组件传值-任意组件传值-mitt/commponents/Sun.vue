<script setup lang="ts">
import {ref} from 'vue'
import emitter from "@/utils/emitter.ts";

const toy = ref('奥特曼')
// 父传 子：通过 props 传值
defineProps(['car'])

</script>

<template>
<h2>子组件:{{toy}}
</h2>
 <h2>父传子组件:{{car}}
 </h2>

  <button @click="emitter.emit('get-toy',toy)">子传父</button>

</template>

<style scoped>

</style>
