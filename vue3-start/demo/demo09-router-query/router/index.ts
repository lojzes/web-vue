import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component: Home
        },
        {
            path:'/news',
            component: News,
            children:[{
                path:'detail',
                component: NewsDetail
            }]
        },
        {
            path:'/about',
            component: About
        },
    ]

})

export default router
