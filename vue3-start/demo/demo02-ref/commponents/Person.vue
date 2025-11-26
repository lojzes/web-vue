<script setup lang="ts">
// ref 基本类型
import {ref} from "vue";

let name = ref('张三')
let age = ref(30)
let tel = '1999999999'

//
function changeName() {
  name.value = '李四'
}

function changeAge() {
  age.value = 40
}

function showTel() {
  alert(tel)
}
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>

  <div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示手机号码</button>
  </div>

  <hr>
</template>

<style scoped>

</style>
