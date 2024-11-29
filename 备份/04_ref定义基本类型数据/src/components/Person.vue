<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script setup lang="ts" name="Person">
import {ref} from 'vue'
    //数据 此时不是响应式
    let name = ref('张三')
    let age = ref(18)
    let tel = '13888888888'
    //方法
    function changeName (){
        name.value = 'zhangsan'
    }
    function changeAge (){
        age.value += 1  
    }
    function showTel (){
        alert(tel)
    }


</script>

<style scoped >
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>