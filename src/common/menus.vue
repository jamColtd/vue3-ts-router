/* eslint-disable @typescript-eslint/no-empty-function */
<template>
    <a-menu theme="dark" 
      :selectedKeys="selectedKeys" 
      mode="inline"
      :openKeys="openKeys"
      @click='select'
      @openChange='openChange'
    >
        <a-sub-menu v-for="item in menu" :key="item.name" :index="item.title">
          <template #title>
            <span>
              <user-outlined /> 
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
      </a-menu>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'menus',
  async setup(){
    const select = () => {
      return
    }

    const openChange = () => {
      return 
    }

    

    return{
      select,
      openChange
    }
  }
})
</script>