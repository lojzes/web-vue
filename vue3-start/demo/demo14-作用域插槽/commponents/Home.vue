<script setup lang="ts">

import {reactive} from "vue";

const games = reactive([
  {id:1,name:'王者荣耀'},
  {id:2,name:'拳王'},
  {id:3,name:'CS枪战'},
])

</script>

<template>
  <slot :youxi="games"></slot>
</template>

<style scoped>

</style>
