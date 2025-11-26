<script setup lang="ts">
// ts 限制类型
import {type PersonI, type Persons} from "@/types";

let p: PersonI = {id: '1', name: '张三', age: 30}

let ps: Persons = [
  {id: '1', name: '张三', age: 30},
  {id: '2', name: '李四', age: 20},
]

</script>

<template>
  <div>


  </div>
</template>

<style scoped>

</style>
