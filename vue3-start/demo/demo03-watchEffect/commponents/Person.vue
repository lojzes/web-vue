<script setup lang="ts">
// watch
import {ref, watch, watchEffect} from "vue";

let temp = ref(10)
let height = ref(0)

function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 20
}

//
// watch([temp, height], (newVal) => {
//   const [t, h] = newVal;
//   if (t > 50) {
//     console.log('温度大于 50了')
//   }
//   if (h > 30) {
//     console.log('高度大于 30了')
//   }
// },)

// 不需要显示指定 监听的对象，自动做检查
watchEffect(() => {
  if (temp.value > 50) {
    console.log('温度大于 50了')
  }
  if (height.value > 30) {
    console.log('高度大于 30了')
  }
});


</script>

<template>
  <div>

    <h2>{{ temp }} 摄氏度</h2>
    <h2>{{ height }}Cm</h2>

    <button @click="changeTemp">changeTemp</button>
    <button @click="changeHeight">changeHeight</button>

  </div>
</template>

<style scoped>

</style>
