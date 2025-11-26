<script setup lang="ts">
import {ref} from "vue";

const toy = ref('奥特曼')
const book = ref(3)

function subHouse(parent:any){
  parent.house -= 1
}

// 向外暴露
defineExpose({toy,book})
</script>

<template>
  <h2>sun</h2>
  <h2>toy {{toy}}</h2>
  <h2>book {{book}}</h2>

  <button @click="subHouse($parent)">减父亲的房产</button>
</template>

<style scoped>

</style>
