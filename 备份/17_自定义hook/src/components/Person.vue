<!-- <template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="increment">点我+1</button>
  <button @click="decrement">点我-1</button>
  <hr>
  <img v-for="(dog,index) in dogList" :key="index" :src="dog"> 
  <span v-show="dogList">加载中......</span><br>
  <button @click="getDog">再来一只狗</button>
</template>

  
<script setup lang="ts" name="Person">
  import useSum from '@/hooks/useSum'
  import useDog from '@/hooks/useDog'
    
  let {sum,increment,decrement} = useSum()
  let {dogList,getDog} = useDog()
</script>

<style scoped>
  .person {
      background-color: skyblue;
      box-shadow: 0 0 10px;
      border-radius: 10px;
      padding: 20px;
  }
</style> -->