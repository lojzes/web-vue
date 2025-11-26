<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();

</script>

<template>
    <div>
      <h2>{{route.query.name}}</h2>
      <div>{{route.query.content}}</div>
    </div>
</template>

<style scoped>

</style>
