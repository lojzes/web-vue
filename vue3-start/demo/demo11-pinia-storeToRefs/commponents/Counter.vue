<script setup lang="ts">

import {ref, toRefs} from "vue";
import useCounterStore from '@/store/Counter.ts'
import {nanoid} from "nanoid";

import {storeToRefs} from 'pinia'

const counterStore = useCounterStore()

let selectVal = ref(1)

function add() {
  // 第一种：直接修改
  // counterStore.count += selectVal.value
  // 第二种：patch 批量修改
  counterStore.$patch({
    count: 1,
    name: '上海'
  })
  // 第三种：通过 actions 里面的动作方法 修改
  // counterStore.increment(100)

}

function sub() {
  counterStore.count -= selectVal.value
}

//  storeToRefs 是对 store 中的所有数据进行 ref 包裹
// const {count,name} = toRefs(counterStore)
// storeToRefs 只对 store 中的数据进行 ref 包裹
const {count,name} = storeToRefs(counterStore)

</script>

<template>
  <div class="counter">
    <h2>{{ count }} - {{name}}</h2>

    <select v-model.number="selectVal">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="add">加</button>
    <button @click="sub">减</button>

  </div>

</template>

<style scoped>

.counter {
  padding: 10px;
  background: #fff;
  border: 1px solid red;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

select, button {
  margin-right: 5px;
}

</style>
