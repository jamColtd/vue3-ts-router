
<template>
  <a-card>
    <div>
    <a-tabs v-model:activeKey="activeKey" @tabClick='clickChange'>
      <a-tab-pane key="1" tab="菜单编辑" style="min-height: 200px">
        <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
           <template v-slot="{ record }">
                    <a @click="handleEdit(record)">编辑</a>
            </template>
        </a-table>
      </a-tab-pane>
      <!-- <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane> -->
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component
          :is="DefaultTabBar"
          v-bind="props"
          :style="{ zIndex: 1, background: '#fff', textAlign: 'left' }"
        />
      </template>
    </a-tabs>
  </div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    slots: { customRender: 'action' },
  },
];

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default defineComponent({
  setup() {

    const activeKey = ref<string>('1')
    const clickChange = () =>{
        activeKey.value = "1";
    }

    const handleEdit = (item:any) => {
        console.log(item)
    }

    return {
        activeKey,
        clickChange,
        data,
        columns,
        handleEdit
    };
  },
});
</script>

<style>
</style>