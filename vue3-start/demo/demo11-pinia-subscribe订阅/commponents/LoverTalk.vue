<script setup lang="ts">

import {ref,reactive} from "vue";
import {nanoid} from "nanoid";
import useLoverTalkStore from "@/store/LoverTalk.ts";
import {storeToRefs}from 'pinia'

let selectVal = ref(1)

const loverTalkStore = useLoverTalkStore()

function add(){
  loverTalkStore.getTalk()
}

const {content} = storeToRefs(loverTalkStore)

// store 中的数据变化时，此方法调用
loverTalkStore.$subscribe((mutation, state)=>{
  console.log('-------------------',state.content)
  // 存在浏览器本地，刷新时，数据不丢失，store中的数据刷新数据丢失
  localStorage.setItem('content', JSON.stringify(state.content))
});

</script>

<template>
  <div class="talk">
    <h2 v-for="c in content">{{c.content}}</h2>

    <select v-model.number="selectVal">
      <option value="1">1</option>/
      <option value="2">2</option>/
      <option value="3">3</option>/
    </select>

    <button @click="add">加</button>

  </div>

</template>

<style scoped>

.talk{
  padding: 10px;
  border: 1px bisque solid;
  background: aquamarine;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
}

</style>
