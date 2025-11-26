<script setup lang="ts">
// watch
import {reactive, watch} from "vue";

let person = reactive({name: '张三', age: 30})

// 默认开启深层层次响应 deep:true ,而且 deep 无法关闭
watch(person, (newVal, oldValue) => {
  console.log(newVal, oldValue)
}, {deep: true, immediate: true})

function changeName() {
  person.name = '王五'
}

function changeVal() {
  Object.assign(person, {name: '李四', age: 40})
}

</script>

<template>
  <div>

    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeVal">修改值</button>

  </div>
</template>

<style scoped>

</style>
