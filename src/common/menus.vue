/* eslint-disable @typescript-eslint/no-empty-function */
<template>
    <a-menu theme="dark" 
      :selectedKeys="selectedKeys" 
      mode="inline"
      :openKeys="openKeys"
      @click='select'
      @openChange='openChange'
    >
        <a-sub-menu v-for="item in mnusList" :key="item.title" :index="item.title">
          <template #title>
            <span>
              <user-outlined /> 
              <span>{{item.title}}</span>
            </span>
          </template>
          <a-menu-item v-for="childItem in item.child" :key="childItem.href" :index="childItem.title">{{childItem.title}}</a-menu-item>
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
    const select = () => {
      return
    }

    const openChange = () => {
      return 
    }

    const { globalProperties } = useCurrentInstance();
    let mnusList = ref<string>('');
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
      select,
      openChange,
      mnusList,
    }
  }
})

</script>