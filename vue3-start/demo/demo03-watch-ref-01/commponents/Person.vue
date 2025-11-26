<script setup lang="ts">
// watch
import {ref, computed, watch} from "vue";

let count = ref(0)

const watchStop = watch(count, (newVal,oldValue) => {
  console.log(newVal,oldValue)
  if(count.value > 10){
    // 解除监视
    watchStop();
  }
})

function changeVal(){
  count.value += 1
}

</script>

<template>
<div>

   <h2>{{count}}</h2>
  <button @click="changeVal">修改值</button>

</div>
</template>

<style scoped>

</style>
