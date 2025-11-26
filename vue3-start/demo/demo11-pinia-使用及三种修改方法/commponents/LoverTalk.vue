<script setup lang="ts">

import {ref,reactive} from "vue";
import {nanoid} from "nanoid";
import useLoverTalkStore from "@/store/LoverTalk.ts";

let selectVal = ref(1)

 const loverTalkStore = useLoverTalkStore()

function add(){
  loverTalkStore.content.push({
    id:nanoid(),
    content: '南瓜'+ nanoid(),
  })
}

</script>

<template>
  <div class="talk">
    <h2 v-for="c in loverTalkStore.content">{{c.content}}</h2>

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
