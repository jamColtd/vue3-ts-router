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