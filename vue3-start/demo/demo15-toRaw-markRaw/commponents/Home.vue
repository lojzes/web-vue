<script setup lang="ts">
import {markRaw, reactive, toRaw} from 'vue'

// 原始普通对象
const rawObj = { name: '张三', age: 18 }

// 创建响应式代理
const reactiveObj = reactive(rawObj)

/**
 * 仅对 Vue 创建的响应式代理有效：toRaw
 * 只能获取由 reactive/shallowReactive/ref（对象类型的 .value）创建的代理的原始对象，
 * 对普通对象调用 toRaw 会直接返回自身。
 * 返回的原始对象非响应式：修改通过 toRaw 获取的原始对象，不会触发视图更新，因为绕过了响应式的 Proxy 代理层。
 * 对 ref 的处理：若为对象类型的 ref，需通过 toRaw(ref.value) 获取原始对象；基本类型的 ref 无代理层，
 * toRaw(ref) 会返回 ref 实例本身。
 *
 * import { ref, toRaw } from 'vue'
 * const objRef = ref({ name: '张三' })
 * const raw = toRaw(objRef.value) // 获取 ref 内部对象的原始值
 *
 * 使用场景
 *
 *
 *     性能优化：对大型响应式对象进行批量修改时，先通过 toRaw 获取原始对象，
 *     在原始对象上完成批量修改后，再重新赋值给响应式对象，减少响应式系统的依赖追踪和更新触发次数。
 *     避免响应式代理的副作用：当需要将响应式对象传递给第三方库（如图表库、编辑器库）时，
 *     第三方库可能不兼容 Proxy 代理对象，此时用 toRaw 传递原始对象可避免兼容问题。
 *     调试场景：直接查看原始对象的属性值，排除 Proxy 代理层的干扰。
 *
 */

// 获取响应式代理对应的原始对象
const original = toRaw(reactiveObj)

// 验证：original 就是 rawObj（引用地址相同）
console.log(original === rawObj) // true

// 修改原始对象：不会触发响应式更新（绕过 Proxy 代理）
const modifyRaw = () => {
  original.name = '李四'
  console.log('原始对象已修改：', original.name) // 控制台变，视图不变
}


/**
 *
 * 永久标记：被 markRaw 标记的对象是不可撤销的，后续任何尝试将其转为响应式的操作都会失效。
 * 深层标记：若标记的是嵌套对象，其内部的所有子对象也会被间接标记为非响应式
 * （因为父对象无法被代理，子对象自然也不会被响应式处理）。
 * 不影响只读代理：被 markRaw 标记的对象仍可传入 readonly/shallowReadonly 创建只读代理，
 * 但只读代理的底层仍是原始对象。
 *
 * import { markRaw, readonly } from 'vue'
 * const rawObj = markRaw({ name: '张三' })
 * const readOnlyObj = readonly(rawObj) // 只读代理有效，但非响应式
 *
 *  使用场景
 *
 *     第三方库实例：如 echarts 实例、moment 时间对象、axios 实例等，这些库的实例本身不需要响应式，
 *     标记为原始对象可避免 Vue 对其进行不必要的 Proxy 代理，减少性能开销。
 *     不可变的静态数据：如全局的配置常量、字典数据等，这些数据不会被修改，标记为原始对象可跳过响应式处理，
 *     提升初始化性能。
 *     避免响应式循环引用：当对象存在循环引用时，Vue 的响应式代理可能出现性能问题，用 markRaw
 *     标记后可避免代理，解决循环引用的副作用。
 *
 *
 *     toRaw：是 “事后获取”，用于从已有的响应式代理中拿到原始对象，
 *     绕过响应式修改以优化性能或解决第三方库兼容问题。
 *     markRaw：是 “事前标记”，用于提前标记对象，阻止其被 Vue 响应式系统代理，
 *     避免不必要的性能开销，适用于静态数据和第三方库实例。
 *     二者都是 Vue3 响应式系统的 “逃逸舱”，让开发者能更灵活地控制数据的响应式行为，
 *     核心目标是性能优化和解决响应式代理的副作用。
 *
 * */

// 标记原始对象，使其无法被响应式代理
const rawObj2 = markRaw({
  name: '张三',
  age: 18
})

// 尝试创建响应式代理：返回的仍是原始对象（非响应式）
const obj = reactive(rawObj2)

// 验证：obj 就是 rawObj（无 Proxy 代理层）
console.log(obj === rawObj2) // true

// 修改属性：不会触发视图更新（因为对象非响应式）
const modifyObj = () => {
  obj.name = '李四'
  console.log('对象已修改：', obj.name) // 控制台变，视图不变
}
</script>

<template>
  <div>
    <h3>toRaw 示例</h3>
    <p>响应式数据：{{ reactiveObj.name }}</p>
    <button @click="modifyRaw">修改原始对象</button>
  </div>

  <div>
    <h3>markRaw 示例</h3>
    <p>尝试修改数据：{{ obj.name }}</p>
    <button @click="modifyObj">修改属性</button>
  </div>
</template>

<style scoped>

</style>
