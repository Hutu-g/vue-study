<template>
<div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <!-- <input type="text" ref="inpt"> <br><br> -->
    <button @click="showLog">点我打印内容</button>
</div>
</template>

<script setup lang="ts" name="App">
    import {ref,defineExpose} from 'vue'
	
    let title1 = ref()
    let title2 = ref()
    let title3 = ref()
  
    function showLog(){
      // 用在普通`DOM`标签上，获取的是`DOM`节点。通过ref获取元素
      console.log(title1.value)
      console.log(title2.value)
      console.log(title3.value)
    } 
    // //用在组件标签上，获取的是组件实例对象。
    let name = ref('张三')
    let age = ref(18)
    // 使用defineExpose将组件中的数据交给外部
    defineExpose({name,age})
    
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>