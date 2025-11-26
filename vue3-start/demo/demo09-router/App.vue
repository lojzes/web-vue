<script lang="ts" setup>
import Header from "@/commponents/Header.vue";
</script>

<template>
  <div>
    <Header/>
    <div>
      <RouterLink to="/home" style="margin-right: 5px">Home</RouterLink>
      <RouterLink to="/news" style="margin-right: 5px">new</RouterLink>
      <RouterLink to="/about" style="margin-right: 5px">about</RouterLink>

    </div>

    <RouterView></RouterView>
  </div>

</template>

<style scoped></style>
