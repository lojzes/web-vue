<script setup lang="ts">
import {ref} from "vue";

let username = ref("");
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

</script>

<template>

  <input type="text"
         :value="modelValue"
         @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)" />

</template>

<style scoped>

</style>
