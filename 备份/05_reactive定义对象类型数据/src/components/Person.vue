<template>
    <div class="person">
        <h2>一台{{ car.brand }}汽车，价值{{ car.price }}万</h2>
        <ul>
            <li v-for="item in games" :key="item.id" >{{ item.name }}</li>
        </ul>
        <button @click="changePrice">修改汽车价格</button>
        <button @click="changeFirstGame">修改第一游戏</button>
        <button @click="test">测试:{{ obj.a.b.c.d }}</button>
    </div>
</template>

<script setup lang="ts" name="Person">
    import {reactive} from 'vue'
    let car = reactive({brand:'奔驰',price:100})
    let games = reactive([
    { id: 'ahsgdyfa01', name: '英雄联盟' },
    { id: 'ahsgdyfa02', name: '王者荣耀' },
    { id: 'ahsgdyfa03', name: '原神' }
    ])

    let obj = reactive({
        a:{
            b:{
                c:{
                    d:666
                }
            }
        }
    })

    function changePrice() {
        car.price += 10
    }
    function changeFirstGame() {
        games[0].name = '流星蝴蝶剑'
    }
    function test(){
        obj.a.b.c.d = 999
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