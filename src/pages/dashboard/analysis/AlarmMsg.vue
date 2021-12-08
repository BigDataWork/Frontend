<template>
   <div>
       <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
       </a-table>
   </div>
</template>
<script>
const columns = [
  { title: '报警日期', width: 150, dataIndex: 'date', key: 'name', fixed: 'left' },
  { title: '报警时间', width: 100, dataIndex: 'time', key: 'age', fixed: 'left' },
  { title: '报警类型', dataIndex: 'alarmType', key: '1', width: 150 },
  { title: '报警信息', dataIndex: 'message', key: '2', width: 150 },
  { title: '报警值', dataIndex: 'alarmValue', key: '3', width: 150 },
  { title: '解决时间', dataIndex: 'solvedTime', key: '4', width: 150 },
  { title: '备注', dataIndex: 'remark', key: '5', width: 150 },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    date: "2021年12月9日",
    time: "10:39:04",
    alarmType: "系统-严重",
    message: "西1.6m皮带",
    alarmValue: "20",
    solvedTime: "未解决",
    remark: "备注测试"
  });
}

export default {
    name: "AlarmMsg",
    data() {
        return {
            data,
            columns,
        }
    },
    methods:{
        
    }
}
</script>
<style scoped>

</style>