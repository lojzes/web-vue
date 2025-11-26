<script lang="ts" setup>
import Person from "@/commponents/Person.vue"
import {reactive} from "vue";
import type {Persons} from "@/types";

const ps = reactive<Persons>([
  {id: '1', name: '张三', age: 30},
  {id: '2', name: '李四', age: 40},
])

</script>


<template>
  <Person :perList="ps"/>
</template>

<style scoped></style>
