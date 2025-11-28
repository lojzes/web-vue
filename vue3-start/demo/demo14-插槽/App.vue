<script setup>
import Home from '@/commponents/Home.vue'
</script>

<template>
  <Home>
    默认插槽覆盖
    <template #title> 标题</template>
    <template v-slot:foot> www.lojzes.com</template>
  </Home>
</template>

<style>

</style>
