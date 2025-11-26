import {defineStore} from 'pinia'
import {nanoid} from "nanoid";

const useLoverTalkStore = defineStore('loverTalkStore', {
    actions:{
        // 获取数据
        getTalk(){
            this.content.push({
                id:nanoid(),
                content: '南瓜'+ nanoid(),
            })
        }
    }
    ,state() {
        return {
            content: [
                {id: '1', content: '今天天气很好'},
                {id: '2', content: '回家吧'},
            ]
        }
    }
})

export default useLoverTalkStore
