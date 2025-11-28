<script setup lang="ts">
import { ref } from 'vue'
const showModal = ref(false)

</script>

<template>
  <div class="parent">
    <h3>父组件</h3>
    <button @click="showModal = true">打开弹窗</button>

    <!-- 传送模态框到 body 下 -->
    <teleport to="body">
      <div class="modal-mask" v-if="showModal">
        <div class="modal-content">
          <h4>这是一个弹窗</h4>
          <p>我被传送到 body 下了！</p>
          <button @click="showModal = false">关闭</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.parent {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  /* 模拟父组件的溢出隐藏，若不传送弹窗，弹窗会被截断 */
  overflow: hidden;
  position: relative;
}

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  width: 300px;
  padding: 20px;
  background: white;
  border-radius: 8px;
}
</style>
