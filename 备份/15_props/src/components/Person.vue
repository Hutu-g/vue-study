<!-- <template>
    <div class="person">
        <ul>
            <li v-for="item in list" :key="item.id">
                {{item.name}}--{{item.age}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="person">
import {defineProps} from 'vue'
import {type PersonInter,type Persons} from '@/types'

// 第一种写法：仅接收
// const props = defineProps(['list'])

// 第二种写法：接收+限制类型
// defineProps<{list:Persons}>()

// 第三种写法：接收+限制类型+指定默认值+限制必要性
let props = withDefaults(defineProps<{list?:Persons}>(),{
  list:()=>[{id:'asdasg01',name:'小猪佩奇',age:18}]
})
console.log(props)

</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style> -->