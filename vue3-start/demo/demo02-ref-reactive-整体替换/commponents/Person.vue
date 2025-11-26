<script setup lang="ts">
// reactive 对象不能被整体替换，需要使用 Objects.asgin 实现整体替换
// ref 可以整体替换
import {ref,reactive} from "vue";

// 生层次响应式：对象可以嵌套多层
let car = reactive({name:'b',price:100})
let car2 = ref({name:'b',price:100})

function changeALl(){
  car = Object.assign(car,{name:'a',price:1010})
}

function changeALlRef(){
  car2.value = {name:'a',price:1010}
}

</script>

<template>
  <div>{{ car.name }}</div>
  <div>{{ car.price }}</div>

  <div>{{ car2.name }}</div>
  <div>{{ car2.price }}</div>


  <div>
    <button @click="changeALl">整体替换Reactive</button>
    <button @click="changeALlRef">整体替换Ref</button>
  </div>

</template>

<style scoped>

</style>
