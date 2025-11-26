<script setup lang="ts">
// 生命周期函数
// 代替了 vue2 中的 beforeCreate 和 created
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate,
  onMounted, onUnmounted, onUpdated} from "vue";

console.log('setup ....')

onBeforeMount(()=>{
  console.log('挂在之前')
})

onMounted(()=>{
  console.log('挂在之后')

})
onBeforeUpdate(()=>{
  console.log('更新之前')
})

onUpdated(()=>{
  console.log('更新之后')
})

onBeforeUnmount(()=>{
  console.log('卸载之前')

})

onUnmounted(()=>{
  console.log('卸载之后')
})

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
