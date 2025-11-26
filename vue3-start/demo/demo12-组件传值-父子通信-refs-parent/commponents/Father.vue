<script setup lang="ts">
import {ref} from 'vue'
import Sun from '@/commponents/Sun.vue'
import Sun2 from "@/commponents/Sun2.vue";
const house = ref(1)

const c1 = ref()
const c2 = ref()

// 单个获取
function changeC1(){
  c1.value.toy = '小猪佩奇'
}

function changeC2(){
  c2.value.computer = '华为'
}

function changeAll(refs:{[key:string]:any}):void {
  for (let key in refs) {
    refs[key].book +=3
  }
}

defineExpose({house})

</script>

<template>
  <h2>父组件</h2>
  <button @click="changeC1">changeC1</button>
  <button @click="changeC2">changeC2</button>

  <button @click="changeAll($refs)">changeAll</button>
  <h1>房产: {{ house }}</h1>
  <div>
    <Sun ref="c1"></Sun>
    <Sun2 ref="c2"></Sun2>
  </div>
</template>

<style scoped>

</style>
