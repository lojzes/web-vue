<script setup lang="ts">

import {inject} from "vue";

const car = inject('car',{brand:'未知',price:0,costPrice:(val:number)=>{}})

</script>

<template>
  <h2>孙组件</h2>

  <h2>品牌:{{car.brand}}</h2>
  <h2>价格:{{car.price}}</h2>

  <button @click="car.costPrice(3)">花钱</button>

</template>

<style scoped>

</style>
