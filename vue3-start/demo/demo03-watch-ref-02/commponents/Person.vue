<script setup lang="ts">
// watch
import {ref, watch} from "vue";

let person = ref({name: '张三', age: 30})

watch(person, (newVal, oldValue) => {
  console.log(newVal, oldValue)
}, {deep: true, immediate: true})

function changeName() {
  person.value.name = '王五'
}

function changeVal() {
  person.value = {name: '李四', age: 40}
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
