<script setup lang="ts">
// ref 基本类型,可以包装对象类型，底层是 reactive 包装
import {ref} from "vue";

// 生层次响应式：对象可以嵌套多层
let car = ref({name:'b',price:100})

let names = ref(['张三','李四'])

function changeName(){
  car.value.name = '长城';
}
function changeOne(){
  names.value[0] = '赵四'
}

</script>

<template>
  <div>{{ car.name }}</div>
  <div>{{ car.price }}</div>

  <div>
    <button @click="changeName">修改名称</button>
  </div>

  <div>
    <ul>
      <li v-for="name in names" key="name">{{name}}</li>
    </ul>

    <button @click="changeOne">修改第一个名称</button>
  </div>
</template>

<style scoped>

</style>
