<script setup lang="ts">

import {reactive} from "vue";

const news = reactive([
  {name: '新闻 1', content: '新闻 1详情'},
  {name: '新闻 2', content: '新闻 2详情'},
  {name: '新闻 3', content: '新闻 3详情'},
])

</script>

<template>
  <div>
    <!--    第一种写法-->
    <!--    <RouterLink v-for="n in news"-->
    <!--                :to="`/news/detail?name=${n.name}&content=${n.content}`"-->
    <!--                :key="n.name">{{ n.name }}</RouterLink>-->

    <!--    第二种写法-->
    <RouterLink v-for="n in news"
                :to="{
                   path:'/news/detail',
                   query:{
                     name:n.name,
                     content:n.content
                     },
                }"
                :key="n.name">{{ n.name }}
    </RouterLink>

  </div>

  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
