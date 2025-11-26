<script setup lang="ts">
import {ref} from 'vue'
import Sun from '@/commponents/Sun.vue'

const a = ref(1)
const b = ref(2)
const x = ref(3)
const y = ref(4)

function updateA(val:number){
  a.value = val
}

</script>

<template>
  <h2>父组件</h2>
  <h1>a : {{ a }}</h1>
  <h1>b : {{ b }}</h1>
  <h1>x : {{ x }}</h1>
  <h1>y : {{ y }}</h1>
  <div>
    <Sun :a="a" :b="b" v-bind="{x:x,y:y}" :updateA="updateA"></Sun>
  </div>
</template>

<style scoped>

</style>
