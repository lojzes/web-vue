import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import emitter  from '@/utils/emitter.ts'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
