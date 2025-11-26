<script setup lang="ts">
// ts 限制类型
// define 开头的 宏函数，不需要引用
// import {defineProps,withDefaults} from 'vue'
import {type Persons} from "@/types";
// const p = defineProps(['perList'])
// defineProps<{perList:Persons}>()

// 默认值
withDefaults(defineProps<{perList?:Persons}>(),{
  perList:()=>[
    {id: '1', name: '张三', age: 30},
  ]
})

</script>

<template>
  <div>
    <ul>
      <li v-for="item in perList" :key="item.id">
        {{ item.id }}- {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
