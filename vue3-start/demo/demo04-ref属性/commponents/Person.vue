<script setup lang="ts">
// ref 属性
import {ref,defineExpose} from "vue";

const name = ref('lojzes')
const age = ref(30)

//
const h22 = ref()
function getH2(){
  console.log(h22.value)
}

// 通过 ref 想父组件暴露属性
defineExpose({
  name,age
})

</script>

<template>
  <div>

    <h2>test</h2>
    {{name}}-{{age}}
    <button ref="h22" @click="getH2">获取 h2</button>

  </div>
</template>

<style scoped>

</style>
