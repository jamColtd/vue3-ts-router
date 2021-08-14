# vue3-2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###### 安装router

```
cnpm install vue-router@4.0.0-beta.13
```

创建touter.ts
```javascript
import { createRouter,createWebHashHistory} from "vue-router";

const home = () => import("../components/Home.vue")
const login = () => import("../components/Login.vue")

const routes  = [
    {path: '/', redirect: "/home"},
    {
        path: "/home",
        name: "home",
        component: home
    },
    {
        path: "/login",
        name: "home",
        component: login
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

```

在main.ts界面引入
```javascript
import {router} from './route/router'

createApp(App).use(router)
```

##### install router

npm install @router4.0.4
or
vue add router

##### install axios

全局引入main.ts中
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'; //引入axios

const app = createApp(App);
app.use(router).mount('#app')
app.use(Antd)
app.config.globalProperties.$axios=axios //挂在到vue上面
```

##### getCurrentInstance使用

```javascript

// 一、关于在ts中使用到类型定义错误问题

// 报错：...类型“ComponentInternalInstance | null”

// 就嗝屁了。。。

// 1. 可以添加ts忽略去解决

// @ts-ignoreconst { proxy } = getCurrentInstance();

// 但是这个方法很无脑，也麻烦。。。

// 2. 考虑到在获取上下文和全局挂载实例的时候会用到这个getCurrentInstance，那我们来新建 hooks\useCurrentInstance.ts

import { ComponentInternalInstance, getCurrentInstance } from 'vue'export defaultfunction useCurrentInstance() {

    const { appContext } = getCurrentInstance() as ComponentInternalInstance

    const globalProperties = appContext.config.globalProperties

    return {

        globalProperties

    }

}

// 组件中使用

// 先引入文件

import useCurrentInstance from "@/hooks/useCurrentInstance";

...// 在setup 中使用处理

const { globalProperties } = useCurrentInstance();



二.不能使用getCurrentInstance的ctx

我们在获取Vue3中全局挂载的方法时会这么写：

这里的ctx不是setup提供的ctx

const { ctx } = getCurrentInstance()

这里ctx打包后在生产环境下是获取不到的，请各位没玩过生产的别不小心误导到别人啊哈，恰好在Vue3的issues中找到的。

正确应该使用

const { proxy } = getCurrentInstance()
```

##### axios统一状态管理