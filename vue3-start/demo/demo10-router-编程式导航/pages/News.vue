<script setup lang="ts">

import {reactive} from "vue";
import {useRouter} from 'vue-router'

const news = reactive([
  {name: '新闻 1', content: '新闻 1详情'},
  {name: '新闻 2', content: '新闻 2详情'},
  {name: '新闻 3', content: '新闻 3详情'},
])

const router = useRouter()

interface News{
  name: string
  content: string
}

function viewDetail(news:News){
  router.push({
    name:'xiang',
    params:{
      name:news.name,
      content:news.content
    }
  })
}

</script>

<template>
  <div>
    <!--    第一种写法-->
    <!--        <RouterLink v-for="n in news"-->
    <!--                    :to="`/news/detail/${n.name}/content=${n.content}`"-->
    <!--                    :key="n.name">{{ n.name }}</RouterLink>-->

    <!--    第二种写法-->
    <RouterLink v-for="n in news"
                :to="{
                  name:'xiang',
                  params:{
                    name:n.name,
                    content:n.content
                  }
                }"
                :key="n.name">{{ n.name }}

      <button @click="viewDetail(n)">查看详情</button>

    </RouterLink>

  </div>

  <div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
