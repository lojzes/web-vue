import {defineStore} from 'pinia'
import {nanoid} from "nanoid";

const useLoverTalkStore = defineStore('loverTalkStore', {
    actions: {
        // 获取数据
        getTalk() {
            this.content.push({
                id: nanoid(),
                content: '南瓜' + nanoid(),
            })
        }
    }
    , state() {
        return {
            content: JSON.parse(localStorage.getItem('content') as string) || []
        }
    }
})

export default useLoverTalkStore
