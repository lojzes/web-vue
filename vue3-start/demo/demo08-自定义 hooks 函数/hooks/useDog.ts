import {reactive,onMounted} from "vue";

export default function () {

    let dogs = reactive([
        {id: 1, name: '小狗'}
    ])

    function addDog() {
        dogs.push({id: 2, name: "大狗"})
    }

    onMounted(()=>{
        console.log('dog 已经挂载')
    })

    return {dogs, addDog}
}
