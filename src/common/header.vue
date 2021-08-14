<template>
    <a-row>
        <a-col :span="24">
            <ul style="min-width:400px">
                <li>
                    <a-input-search
                        v-model:value="value"
                        placeholder="全局搜索"
                        style="width: 200px"
                        @search="onSearch"
                    />
                </li>
                <li><span>用户名</span></li>
                <li><router-link to="/">退出系统</router-link></li>
            </ul>
        </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');

    const onSearch = (searchValue: string) => {
      console.log('use value', searchValue);
      console.log('or use this.value', value.value);
    };

    return {
      value,
      onSearch,
    };
  },
});
</script>

<style scoped>
ul{
    display: hidden;
    padding: 0 10px;
    float: right;
}
ul >li{
    float: left;
    margin-right:10px
}

</style>