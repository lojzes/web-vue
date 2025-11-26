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
                name:'xiang',
                path:'detail/:name/:content?',
                component: NewsDetail,
                // 第一种写法 ： 只能传递 params ,通过 props 传递路由参数
                // props: true
                // 第二种写法
                props(route){
                    // 支持 params 和 query
                    return route.params
                    // return route.query
                }

                // 第三种写法
                // props:{
                //     name:'100',
                //     content:'content'
                // }
            }]
        },
        {
            path:'/about',
            component: About
        },
    ]

})

export default router
