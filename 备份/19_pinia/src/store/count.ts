// 引入defineStore用于创建store
import {defineStore} from 'pinia'

// 定义并暴露一个store
export const useCountStore = defineStore('count',{
  // 动作
  actions:{
    increment(value:number){
      if (this.sum < 10) {
        //操作countStore中的sum
        this.sum += value
      }
    },
    decrement(value:number){
      if(this.sum > 1){
        this.sum -= value
      }
    },
  },
  // 状态
  state(){
    return {
      sum:6
    }
  },
  // 计算
  getters:{}
})