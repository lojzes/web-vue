<script lang="ts" setup>
import Person from "@/commponents/Person.vue"
import {ref} from "vue";

// 获取组件的实例
const ren = ref()

function getPerson(){
  console.log(ren.value)

}

</script>


<template>

  <Person ref="ren"/>

  <button @click="getPerson">获取人 Person </button>

</template>

<style scoped></style>
