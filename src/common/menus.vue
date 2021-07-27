/* eslint-disable @typescript-eslint/no-empty-function */
/**导航菜单 */
<template>
    <a-menu theme="dark" 
      :selectedKeys="selectedKeys" 
      mode="inline"
      :openKeys="openKeys"
      @openChange='openChange'
    >
        <a-sub-menu v-for="item in mnusList" :key="item.title" :index="item.title">
          <template #title>
            <span>
              <user-outlined /> 
              <span>{{item.title}}</span>
            </span>
          </template>
          <a-menu-item 
            v-for="childItem in item.child"  
            :key="childItem.title" 
            :index="childItem.title"
            @click='MenuItem(childItem)'
          >{{childItem.title}}</a-menu-item>
          <!-- <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item> -->
        </a-sub-menu>
      </a-menu>
</template>

<script lang="ts">
import {defineComponent, ref, getCurrentInstance} from 'vue'
import useCurrentInstance from "../hook/useCurrentInstance";
import axios from 'axios'
export default defineComponent({
  name:'menus',
  setup(){
    const { globalProperties } = useCurrentInstance();
    
    /*点击标签跳转的页面*/
    const MenuItem = (item:any) => {
      globalProperties.$router.push(item.href)
    }

    /**点击父标签 */
    const openChange = () => {
      return
    }

    /**点击时触发的事件 */
    const select = () => {
      console.log("select")
    }

    let mnusList = ref<string>('');
    // 获取菜单
    const getMenusList = axios.get('http://localhost:3000/menus')
      .then((res) => {
          // 因为层级比较深，匿名函数会导致this指向发生改变
          // 这个时候使用箭头函数解决
          mnusList.value = res.data.mnusData;
          globalProperties.$message.success('数据获取成功！！！')
      }).catch( (error) => {
        console.log(error)
            alert('网络超时, 请重新加载!')
      });
      

    return{
      MenuItem,
      openChange,
      mnusList,
      select
    }
  }
})

</script>