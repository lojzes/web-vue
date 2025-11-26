import mitt from 'mitt'

const emitter = mitt()

// demo 示例

// 绑定事件
// emitter.on('test1', () => {
//     console.log('test1')
// })
//
// emitter.on('test2', () => {
//     console.log('test2')
// })
// // 触发事件
// setTimeout(() => {
//         emitter.emit('test1')
//         emitter.emit('test2')
//     },
//     2000)
// //  解绑事件
// emitter.off('test1')
// emitter.off('test2')
// // 解绑所有
// emitter.all.clear()

export default emitter





