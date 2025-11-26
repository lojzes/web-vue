import {defineStore} from 'pinia'
import {nanoid} from "nanoid";
import {reactive} from 'vue'
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
        // 组合式写法
        let content = reactive([
            JSON.parse(localStorage.getItem('content') as string) || []
        ])
        // 省去网络请求，更改数据
        // ...
        return {
            content
        }
    }
})

export default useLoverTalkStore
