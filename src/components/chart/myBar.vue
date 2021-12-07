<template>
  <div class="mini-chart">
    <div class="chart-content" :style="{height: 25}">
      <v-chart :force-fit="true" :height="height" :data="data" :padding="[8, 0, 65, 22.3]">
        <v-tooltip />
        <v-legend />
        <v-axis />
        <v-bar position="x*y" color="name" :adjust="adjust" />
      </v-chart>
    </div>
  </div>
</template>

<script>
/*
import {format} from 'date-fns'

const data = []
const beginDay = new Date().getTime()

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5]
for (let i = 0; i < fakeY.length; i += 1) {
  data.push({
    x: format(new Date(beginDay + 1000 * 60 * 60 * 24 * i), 'yyyy-MM-dd'),
    y: fakeY[i]
  })
}

const tooltip = [
  'x*y',
  (x, y) => ({
    name: x,
    value: y
  })
]

const scale = [{
  dataKey: 'x',
  min: 2
}, {
  dataKey: 'y',
  title: '时间',
  min: 1,
  max: 22
}]

export default {
  name: 'MiniBar',
  data () {
    return {
      data,
      scale,
      tooltip,
      height: 100
    }
  }
}*/
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { name: '闲置状态', '西大五-1.0m': 11, '3701': 21, '2501': 22, '西大五-1.6m': 23, '西17-1.6m': 22, '西1.6m': 25, '主斜井': 17 },
    { name: '通讯故障', '西大五-1.0m': 20, '3701': 23, '2501': 29, '西大五-1.6m': 27, '西17-1.6m': 29, '西1.6m': 21, '主斜井': 27 },
    { name: '其他故障', '西大五-1.0m': 18, '3701': 28, '2501': 15, '西大五-1.6m': 21, '西17-1.6m': 24, '西1.6m': 28, '主斜井': 24 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'fold',
    fields: ['西大五-1.0m', '3701', '2501', '西大五-1.6m', '西17-1.6m', '西1.6m', '主斜井'],
    key: 'x',
    value: 'y',
  });
  const data = dv.rows;

  export default {
    data() {
      return {
        data,
        height: 110,
        adjust: [{
          type: 'dodge',
          marginRatio: 1 / 32,
        }],
      };
    }
  }
</script>

<style lang="less" scoped>
@import "index.less";
</style>
