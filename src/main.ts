import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).use(router).mount('#app')
createApp(App).use(router).use(router).use(router)


// // 前置钩子
// router.beforeEach((to, from, next) => {
//     // if(to.path !== '/') next('/404')
//   })
  
//   // 后置钩子
//   router.afterEach((to, from) => {
//     console.log("to---", to.fullPath)
//     console.log("from---"+from.fullPath)
//   })