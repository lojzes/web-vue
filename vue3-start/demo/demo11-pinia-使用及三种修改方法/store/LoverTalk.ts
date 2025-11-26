import {defineStore} from 'pinia'

const useLoverTalkStore = defineStore('loverTalkStore', {
    state() {
        return {
            content: [
                {id: '1', content: '今天天气很好'},
                {id: '2', content: '回家吧'},
            ]
        }
    }
})

export default useLoverTalkStore
