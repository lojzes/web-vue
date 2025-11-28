<script setup lang="ts">
import {readonly, reactive, shallowReadonly} from 'vue'

// 原响应式数据
const original = reactive({
  name: '张三',
  age: {
    info: 18
  }
})

/**
 *
 *     深度只读：数据的所有层级属性都无法被直接修改，强行修改会在控制台抛出警告（开发环境），且修改不生效。
 *     响应式追踪：若原数据是响应式的，readonly 生成的只读代理会同步原数据的变化，视图会随之更新。
 *     支持所有数据类型：可对 reactive 对象、ref（需通过 .value）、普通对象 / 数组创建只读代理。
 *
 *     使用场景
 *
 *     保护全局状态 / 配置数据不被意外修改（如 Vuex/Pinia 的 state 只读副本）。
 *     传递数据给子组件时，限制子组件修改父组件的响应式数据，仅允许通过事件回调修改原数据。
 *
 */


// 创建深度只读代理
const obj = readonly(original)

// 修改原数据：只读代理的视图会更新（保留响应式追踪）
const changeOriginal = () => {
  original.name = '李四'
  original.age.info = 20
}

// 尝试修改只读数据：控制台报错，修改无效
const changeReadonly = () => {
  // 第一层修改：禁止
  obj.name = '王五'
  // 深层修改：禁止
  obj.age.info = 25
}

// 原响应式数据
const original = reactive({
  name: '张三',
  age: {
    info: 18
  }
})

/**
 *     浅层只读：仅数据的第一层属性被禁止修改，深层属性可自由修改，且修改会触发响应式更新（若原数据是响应式的）。
 *     响应式追踪：与 readonly 一致，同步原响应式数据的变化。
 *     无 .value 语法：和 reactive 一致，
 *     直接操作对象属性（若为 shallowReadonly 包裹的 ref，则 .value 是第一层，禁止修改）。
 *
 *     使用场景
 *     保护对象的顶层结构不被修改，但允许修改深层数据（如表单的整体配置只读，而表单内部的字段值可修改）。
 *     处理大型层级对象时，仅限制第一层属性的修改，减少只读代理的性能开销。
 */
// 创建浅层只读代理
const shallowReadonlyObj = shallowReadonly(original)

// 修改深层属性：允许，视图会更新（深层非只读）
const changeDeep = () => {
  shallowReadonlyObj.age.info = 20
}

// 尝试修改第一层属性：控制台报错，修改无效
const changeFirst = () => {
  shallowReadonlyObj.name = '李四'
}

</script>

<template>
  <div>
    <h3>readonly 示例</h3>
    <p>第一层值：{{ obj.name }}</p>
    <p>深层值：{{ obj.age.info }}</p>
    <button @click="changeOriginal">修改原响应式数据</button>
    <button @click="changeReadonly">尝试修改只读数据</button>
  </div>

  <div>
    <h3>shallowReadonly 示例</h3>
    <p>第一层值：{{ shallowReadonlyObj.name }}</p>
    <p>深层值：{{ shallowReadonlyObj.age.info }}</p>
    <button @click="changeDeep">修改深层属性</button>
    <button @click="changeFirst">尝试修改第一层属性</button>
  </div>
</template>

<style scoped>

</style>
