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
    }
})

export default useCounterStore
