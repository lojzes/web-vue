<script lang="ts">
export default {
  name: 'Person',
  beforeCreate(){
    console.log('beforeCreate');
  },
  setup() {
    console.log('setup');
    //
    let name = '张三'
    let age = 30
    let tel = '1999999999'
    //
    function changeName() {
      name = '李四'
    }
    function changeAge() {
      age = 40
    }
    function showTel() {
      alert(tel)
    }
    return {
      name, age, tel,
      changeName,changeAge,showTel
    }

    // 也可以返回渲染函数：此时页面，只显示渲染的内容
    // return ()=>'test'
  },
}
</script>

<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>

  <div>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">显示手机号码</button>
  </div>

</template>

<style scoped>

</style>
