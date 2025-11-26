<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
    <div>
      <h2>{{route.params.name}}</h2>
      <div>{{route.params.content}}</div>
    </div>
</template>

<style scoped>

</style>
