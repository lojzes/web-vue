<script setup lang="ts">
import Sun from "@/commponents/Sun.vue";
import emitter from "@/utils/emitter.ts";

import {ref,onUnmounted} from 'vue'

const car = ref('奔驰')
const toy = ref('')
// 绑定事件
emitter.on('get-toy',(val:any)=>{
  toy.value = val
})

// 解绑事件
onUnmounted(()=>{
  emitter.off('get-toy')
})


</script>

<template>
  <h2>
    子传父:{{toy}}
  </h2>
  <h2>
    父组件:{{car}}
    <Sun :car="car"></Sun>
  </h2>

</template>

<style scoped>

</style>
