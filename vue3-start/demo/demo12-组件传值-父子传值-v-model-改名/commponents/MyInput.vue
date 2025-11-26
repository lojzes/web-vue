<script setup lang="ts">

defineProps(['username','password']);
const emit = defineEmits(['update:username','update:password']);

</script>

<template>

  <input type="text"
         :value="username"
         @input="emit('update:username', (<HTMLInputElement>$event.target).value)" />

  <input type="text"
         :value="password"
         @input="emit('update:password', (<HTMLInputElement>$event.target).value)" />

</template>

<style scoped>

</style>
