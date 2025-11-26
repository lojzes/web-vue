<script setup lang="ts">
// watch
import {reactive, watch} from "vue";

let person = reactive({name: '张三',
  age: 30,
  hobby:{c1:'宝马',c2:'奔驰'}
})

// 默认开启深层层次响应 deep:true ,而且 deep 无法关闭
// watch(person, (newVal, oldValue) => {
//   console.log(newVal, oldValue)
// }, {deep: true, immediate: true})

// 检测单个属性值:建议写函数返回 方式
// watch(()=>person.hobby, (newVal, oldValue) => {
//   console.log(newVal, oldValue)
// }, {deep: true, immediate: true})

// 检测多个属性，使用数组
watch([()=>person.hobby], (newVal, oldValue) => {
  console.log(newVal, oldValue)
}, {deep: true, immediate: true})


function changeName() {
  person.name = '王五'
}
function changeC1() {
  person.hobby.c1 = '奥迪'
}
function changeC2() {
  person.hobby.c1 = '奥拓'
}

function changeVal() {
  Object.assign(person, {name: '李四', age: 40})
}

</script>

<template>
  <div>

    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <h2>{{ person.hobby.c1 }}</h2>
    <h2>{{ person.hobby.c2 }}</h2>
    <button @click="changeName">修改名称</button>
    <button @click="changeVal">changeVal</button>
    <button @click="changeC1">修改C1</button>
    <button @click="changeC2">修改C2</button>

  </div>
</template>

<style scoped>

</style>
