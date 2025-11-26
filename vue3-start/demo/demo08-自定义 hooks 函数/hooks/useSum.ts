import {ref, onMounted} from "vue";

export default function () {
    let sum = ref(1)

    function add() {
        sum.value++
    }

    onMounted(()=>{
        console.log('sum 已经挂载')
    })
    return [sum, add]
}

