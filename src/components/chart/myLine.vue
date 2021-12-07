<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 25}">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[276, 18, 65, 29.3]">
        <v-tooltip />
        <v-legend />
        <v-axis />
        <v-smooth-line position="month*temperature" color="city" shape="smooth" />
        <v-point position="month*temperature" color="city" shape="circle" />
      </v-chart>
    </div>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const sourceData = [
  { month: '7/1', '西大五-1.0m': 0.94, '3701': 0.96, '2501': 0.82, '西大五-1.6m': 0.87, '西17-1.6m': 0.85, '西1.6m': 0.87 },
  { month: '7/2', '西大五-1.0m': 0.91, '3701': 0.81, '2501': 0.75, '西大五-1.6m': 0.86, '西17-1.6m': 0.90, '西1.6m': 0.93 },
  { month: '7/3', '西大五-1.0m': 0.52, '3701': 0.75, '2501': 0.52, '西大五-1.6m': 0.89, '西17-1.6m': 0.89, '西1.6m': 0.92 },
  { month: '7/4', '西大五-1.0m': 0.45, '3701': 0.53, '2501': 0.78, '西大五-1.6m': 0.99, '西17-1.6m': 0.84, '西1.6m': 0.95 },
  { month: '7/5', '西大五-1.0m': 0.43, '3701': 0.95, '2501': 0.97, '西大五-1.6m': 0.65, '西17-1.6m': 0.97, '西1.6m': 0.91 },
  { month: '7/6', '西大五-1.0m': 0.55, '3701': 0.84, '2501': 0.91, '西大五-1.6m': 0.76, '西17-1.6m': 0.85, '西1.6m': 0.90 },
  { month: '7/7', '西大五-1.0m': 0.29, '3701': 0.93, '2501': 0.83, '西大五-1.6m': 0.78, '西17-1.6m': 0.98, '西1.6m': 0.94 },
  { month: '7/8', '西大五-1.0m': 0.53, '3701': 0.62, '2501': 0.96, '西大五-1.6m': 0.89, '西17-1.6m': 0.96, '西1.6m': 0.83 },
  { month: '7/9', '西大五-1.0m': 0.37, '3701': 0.81, '2501': 0.94, '西大五-1.6m': 0.95, '西17-1.6m': 0.91, '西1.6m': 0.81 },
  { month: '7/10', '西大五-1.0m': 0.45, '3701': 0.39, '2501': 0.85, '西大五-1.6m': 0.92, '西17-1.6m': 0.84, '西1.6m': 0.88 }
];
// , Tokyo: 0.94, London: 0.96, Tokyo: 0.94, London: 0.96, Tokyo: 0.94
const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['西大五-1.0m', '3701', '2501', '西大五-1.6m', '西17-1.6m', '西1.6m'],
  key: 'city',
  value: 'temperature',
});
const data = dv.rows;

const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];

export default {
  data() {
    return {
      data,
      scale,
      height: 400,
    };
  }
};
</script>

<style lang="less" scoped>
@import "index.less";
</style>
