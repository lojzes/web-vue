<script setup lang="ts">

import Sun from '@/commponents/Sun.vue'

import {provide, reactive} from "vue";

const car = reactive({
  brand:'奔驰',
  price: 100,
  costPrice
})

function costPrice(val: number) {
  car.price -= val
}

// 向后代提供数据
provide('car',car)

</script>

<template>
  <h2>祖组件</h2>
  <h2>品牌:{{car.brand}}</h2>
  <h2>价格:{{car.price}}</h2>
  <Sun></Sun>
</template>

<style scoped>

</style>
