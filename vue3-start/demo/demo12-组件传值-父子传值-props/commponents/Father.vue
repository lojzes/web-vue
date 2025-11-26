<script setup lang="ts">
import Sun from "@/commponents/Sun.vue";

import {ref} from 'vue'

const car = ref('奔驰')
const toy = ref('')

function getToy(val:string){
  toy.value = val
}

</script>

<template>
  <h2>
    子传父:{{toy}}
  </h2>
  <h2>
    父组件:{{car}}
    <Sun :car="car" :sendToy="getToy"></Sun>
  </h2>

</template>

<style scoped>

</style>
