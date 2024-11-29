<template>
    <div class="app">
        <h1>你好</h1>
        <Person ref="ren"/>
        <button @click="test">测试</button>
    </div>

</template>

<script lang="ts" setup name="App" >
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let ren = ref()

  function test(){
    console.log(ren.value.name)
    console.log(ren.value.age)
  }
    

</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>