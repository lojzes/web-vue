import {defineStore} from 'pinia'

const useCounterStore = defineStore('counterStore', {
    actions: {
        increment(value:number) {
            this.count += value
        }
    }
    ,
    state(){
        return {
            count:0,
            name:'北京'
        }
    },
    getters:{

        // 方式 1
        // bigSum:(state)=>{
        //     return state.count * 10
        // },
        // 方式 2
        bigSum():number{
            return this.count * 10
        },
    }
})

export default useCounterStore
