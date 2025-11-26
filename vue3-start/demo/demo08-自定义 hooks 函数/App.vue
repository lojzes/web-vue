<script lang="ts" setup>

import useDog from "@/hooks/useDog.ts";
import useSum from "@/hooks/useSum.ts";

const [sum, add] = useSum();
const {dogs, addDog} = useDog();

</script>

<template>

  {{ sum }}

  <button @click="add"></button>

  <hr>

  <ul>
    <li v-for="dog in dogs" :key="dog.id">{{ dog.name }}</li>
  </ul>

  <button @click="addDog">添加狗</button>

</template>

<style scoped></style>
