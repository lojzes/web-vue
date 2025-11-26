<script setup lang="ts">
import {ref} from 'vue'
import MyInput from "@/commponents/MyInput.vue";

const username = ref('')
const password = ref('')

</script>

<template>
  <div>
<!--    <input type="text" v-model="username"/>-->
<!-- v-model 的本质是 :value 与 @input 的组合实现-->
<!--    <input :value="username" @input="username = (<HTMLInputElement>$event.target).value">-->

<!--    自定义组件-->
<!--    <MyInput v-model="username"></MyInput>-->
<!-- 自定义组件 v-model 的本质-->
<!--    <MyInput :modelValue="username" @update:modelValue="username = $event"></MyInput>-->

    <MyInput v-model:username="username" v-model:password="password"></MyInput>

    {{username}}- {{password}}
  </div>
</template>

<style scoped>

</style>
