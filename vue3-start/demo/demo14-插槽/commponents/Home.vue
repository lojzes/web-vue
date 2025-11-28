<script setup lang="ts">

</script>

<template>
     <h2>home</h2>
     <div>
       <slot name="title"></slot>
     </div>
     <div>
       <slot>默认插槽</slot>
     </div>
     <div>
       <slot name="foot"></slot>
     </div>
</template>

<style scoped>

</style>
