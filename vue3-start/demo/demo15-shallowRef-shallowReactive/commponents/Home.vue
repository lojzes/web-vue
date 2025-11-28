<script setup lang="ts">
import {shallowReactive, shallowRef, triggerRef} from 'vue'

// 定义shallowRef，值为对象
const obj = shallowRef({
  name: '张三',
  age: {
    info: 18
  }
})

/*

仅追踪 .value 的引用变化：只有当 obj.value 被重新赋值（引用地址改变）时，才会触发响应式更新。
深层修改无响应：直接修改 .value 内部的属性（无论第一层还是深层），都不会触发视图更新。
手动触发更新：若想修改 .value 内部属性后触发更新，可使用 triggerRef API：

使用场景
存储大型不可变数据（如纯展示的大对象、第三方库的实例），仅在整体替换时需要响应式。

*/

// 修改深层属性：非响应式，视图不更新
const changeDeepLayer = () => {
  obj.value.age.info = 20
  console.log('深层属性已修改：', obj.value.age.info) // 控制台会变，视图不变
  //triggerRef(obj) // 手动触发shallowRef的更新，视图会刷新
}

// 修改第一层属性：非响应式，视图不更新
const changeFirstLayer = () => {
  obj.value.name = '李四'
  console.log('第一层属性已修改：', obj.value.name) // 控制台会变，视图不变
}

// 替换整个.value：响应式，视图更新（因为引用地址变了）
const replaceWholeValue = () => {
  obj.value = {
    name: '王五',
    age: {
      info: 25
    }
  }
}

/*
*
    仅第一层属性响应式：对象的第一层属性被 Proxy 代理，修改会触发视图更新；深层属性是普通对象，修改无响应式。
    无 .value 语法：和 reactive 一致，直接操作对象属性，无需 .value。
    手动触发更新：若想修改深层属性后触发更新，可结合 markRaw 或重新赋值第一层属性，或使用 ref 包裹深层数据。

使用场景
处理层级较深但仅需第一层响应式的对象（如表单的临时状态、第三方库的配置对象）。
优化性能，避免对大型对象的所有层级做响应式代理

* */


// 定义shallowReactive对象
const objShallowReactive = shallowReactive({
  name: '张三',
  age: {
    info: 18
  }
})

// 修改第一层属性：响应式，视图更新（第一层是响应式的）
const changeFirstLayerShallowReactive = () => {
  objShallowReactive.name = '李四'
}

// 修改深层属性：非响应式，视图不更新
const changeDeepLayerShallowReactive = () => {
  objShallowReactive.age.info = 20
  console.log('深层属性已修改：', objShallowReactive.age.info) // 控制台会变，视图不变
}
</script>

<template>
  <div>
    <h3>shallowRef 示例</h3>
    <p>第一层值：{{ obj.name }}</p>
    <p>深层值：{{ obj.age.info }}</p>
    <button @click="changeFirstLayer">修改第一层属性</button>
    <button @click="changeDeepLayer">修改深层属性</button>
    <button @click="replaceWholeValue">替换整个.value</button>
  </div>

    <div>
      <h3>shallowReactive 示例</h3>
      <p>第一层值：{{ objShallowReactive.name }}</p>
      <p>深层值：{{ objShallowReactive.age.info }}</p>
      <button @click="changeFirstLayerShallowReactive">修改第一层属性</button>
      <button @click="changeDeepLayerShallowReactive">修改深层属性</button>
    </div>
</template>

<style scoped>

</style>
