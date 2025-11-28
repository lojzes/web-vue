<script setup lang="ts">
import { customRef } from 'vue'

/**
 *
 * track 和 trigger 的调用时机
 *
 *     track 必须在 get 方法中调用（或取值的逻辑中），否则响应式系统无法追踪该 ref 的依赖，
 *     视图不会随值变化更新。
 *     trigger 需在值真正发生变化并需要更新视图时调用，若在防抖 / 节流的延迟期内暂不更新，
 *     可延迟调用 trigger。
 *
 * */


// 自定义防抖 ref 的工厂函数
const debouncedRef = (initialValue:string, delay = 300) => {
  let timer:number = 0 // 防抖定时器
  return customRef((track, trigger) => {
    return {
      get() {
        track() // 追踪依赖
        return initialValue
      },
      set(newValue) {
        // 清除上一个定时器
        clearTimeout(timer)
        // 延迟执行赋值和触发更新
        timer = setTimeout(() => {
          initialValue = newValue
          trigger() // 触发视图更新
        }, delay)
      }
    }
  })
}

// 创建防抖 ref，延迟 500ms
const keyword = debouncedRef('', 500)

// 自定义持久化 ref 的工厂函数
const storageRef = (key:string, initialValue:string) => {
  return customRef((track, trigger) => {
    // 初始化时从本地存储取值，若无则用初始值
    let value = localStorage.getItem(key) || initialValue

    return {
      get() {
        track() // 追踪依赖
        return value
      },
      set(newValue) {
        value = newValue
        // 同步到本地存储
        localStorage.setItem(key, newValue)
        trigger() // 触发视图更新
      }
    }
  })
}

// 创建持久化 ref，key 为 "username"，初始值为空
const username = storageRef('username', '')


// 自定义节流 ref 的工厂函数
const throttledRef = (initialValue:number, interval = 1000) => {
  let timer = 0
  let isPending = false // 是否处于节流等待中
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return initialValue
      },
      set(newValue) {
        if (!isPending) {
          isPending = true
          timer = setTimeout(() => {
            initialValue = newValue
            trigger()
            isPending = false
            clearTimeout(timer)
          }, interval)
        }
      }
    }
  })
}

// 创建节流 ref，间隔 1000ms
const count = throttledRef(0, 1000)
const addCount = () => {
  count.value++
}

</script>

<template>
  <div>
    <h3>防抖输入示例</h3>
    <input v-model="keyword" placeholder="请输入关键词" />
    <p>防抖后的结果：{{ keyword }}</p>
  </div>

  <div>
    <h3>本地存储持久化示例</h3>
    <input v-model="username" placeholder="请输入用户名" />
    <p>持久化的用户名：{{ username }}</p>
  </div>

  <div>
    <h3>节流计数示例</h3>
    <button @click="addCount">点击计数（节流 1s）</button>
    <p>节流后的计数：{{ count }}</p>
  </div>
</template>

<style scoped>

</style>
