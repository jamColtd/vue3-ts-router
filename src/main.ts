import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios';
// import api from "../src/axios/api";

const app = createApp(App);
app.use(router).mount('#app')
app.use(Antd)
// app.use(api)
app.config.globalProperties.$axios=axios


// // 前置钩子
// router.beforeEach((to, from, next) => {
//     // if(to.path !== '/') next('/404')
//   })
  
//   // 后置钩子
//   router.afterEach((to, from) => {
//     console.log("to---", to.fullPath)
//     console.log("from---"+from.fullPath)
//   })