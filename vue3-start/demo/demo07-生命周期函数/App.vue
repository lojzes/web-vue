<script lang="ts" setup>

import Person from "@/commponents/Person.vue";
import {ref} from "vue";

let show = ref(true)

</script>

<template>

  <Person v-if="show"/>
</template>

<style scoped></style>
