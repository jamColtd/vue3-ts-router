<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <menuHome /> <!-- 菜单-->
    </a-layout-sider>
    <a-layout>
      <a-layout-header 
        style="
          background: #fff; 
          padding: 0;
          height: 48px;
          line-height:48px"
        >
        <headerV />
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>mbuil</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang = "ts">
// @ is an alias to /src
import { defineComponent, ref } from 'vue';
import menuHome from '../common/menus.vue'
import headerV from '../common/header.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Home',
  components:{
    menuHome,
    headerV
  },
  setup() {

      
    return{
      collapsed: ref<boolean>(false),
      selectedKeys: ref<string[]>(['1']),
    }
  }
})
</script>

<style >

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
.logo{
  height: 60px;
  width: 100%;
}
</style>
