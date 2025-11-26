<script setup lang="ts">
// computed
import {ref, computed} from "vue";

let name = ref('宝马')
let price = ref(100)

// getter 只读属性
// let namePrice = computed(() =>{
//   return name.value + price.value
// })

let namePrice = computed({
  get() {
    return name.value + price.value
  },
  set(val) {
    // 结构指定默认值
    const [n='', p=100] = val.split('-')
    name.value = n
    price.value = p
  }
})

function changeVal(){
  namePrice.value = '奥迪-100'
}

</script>

<template>
  <input type="text" v-model="name"/>
  <input type="text" v-model="price"/>

  <h2>{{ namePrice }}</h2>

  <button @click="changeVal">修改计算属性</button>

</template>

<style scoped>

</style>
