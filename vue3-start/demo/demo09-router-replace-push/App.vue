<script lang="ts" setup>
import Header from "@/commponents/Header.vue";
</script>

<template>
  <div>
    <Header/>
    <div>
<!--      路由：默认是 push ，可以改为 replace：无法使用浏览器后退-->
      <RouterLink replace to="/home" style="margin-right: 5px">Home</RouterLink>
      <RouterLink replace to="/news" style="margin-right: 5px">new</RouterLink>
      <RouterLink replace to="/about" style="margin-right: 5px">about</RouterLink>

    </div>

    <RouterView></RouterView>
  </div>

</template>

<style scoped></style>
