<template>
    <div class="app">
        <Person :list="persons"/>
    </div>

</template>

<script lang="ts" setup name="App" >
import Person from './components/Person.vue'
import {reactive} from 'vue'
import {type Persons} from './types'

 let persons = reactive<Persons>([
    {id:'e98219e12',name:'张三',age:18},
    {id:'e98219e13',name:'李四',age:19},
    {id:'e98219e14',name:'王五',age:20}
])
</script>

<style>
    .app {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>