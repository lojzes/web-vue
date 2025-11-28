<script setup>
import Home from '@/commponents/Home.vue'
</script>

<template>
  <Home>
     <template v-slot={youxi}>
       <ul>
         <li v-for="g in youxi" :key="g.id">{{g.name}}</li>
       </ul>
     </template>
  </Home>
</template>

<style>

</style>
