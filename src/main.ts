import { createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd, { message } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios';
import api from "../src/axios/api";


const app = createApp(App);
app.use(router).mount('#app')
app.use(Antd)
// app.use(api)
app.config.globalProperties.$axios=axios;
app.config.globalProperties.$message = message;
message.config({
    duration: 2,// 持续时间
    top:`100px`, // 到页面顶部距离
    maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
});


// // 前置钩子
// router.beforeEach((to, from, next) => {
//     // if(to.path !== '/') next('/404')
//   })
  
//   // 后置钩子
//   router.afterEach((to, from) => {
//     console.log("to---", to.fullPath)
//     console.log("from---"+from.fullPath)
//   })