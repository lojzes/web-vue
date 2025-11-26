<script setup lang="ts">
// toRefs : 解构 reactive 对象时，每个属性转换为 ref 包裹的对象
// toRef : 解构 reactive 对象时，指定某个属性，为ref 包裹的对象
import {ref, reactive, toRefs, toRef} from "vue";

// 生层次响应式：对象可以嵌套多层
let car = reactive({name:'b',price:100})

let {name,price} = toRefs(car)

let p = toRef(car,'price')

function changeName(){
   name.value += 'a'+"~"
}
function changePrice(){
   // price.value = 110
  p.value = 110
}

</script>

<template>
  <div>{{ car.name }}</div>
  <div>{{ car.price }}</div>

  <div>
    <button @click="changeName">修改名称</button>
    <button @click="changePrice">修改价格</button>
  </div>

</template>

<style scoped>

</style>
