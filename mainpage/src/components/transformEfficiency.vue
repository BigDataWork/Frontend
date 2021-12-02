<template>
  <div class="com-container">
    <div class="title">
      <span>{{ title }}</span>
      <span class="iconfont title-icon" @click="showChoice = !showChoice" :style="comStyle">&#xe6eb;</span>
      <div class="select-con" v-show="showChoice">
        <div class="select-item" v-for="item in selectTypes" :key="item.key" @click="handleSelect(item.key)">
          {{ item.text }}
        </div>
      </div>
    </div>
    <div class="com-chart" ref="efficiency_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null,
      allData: null,
      dataType: 'map',
      showChoice: false, // 控制可选面板的显示或者隐藏
      titleFontSize: 0
    }
  },
  computed: {
    selectTypes () {
      if (!this.allData) {
        return []
      } else {
        return this.allData.type.filter(item => {
          return item.key !== this.dataType
        })
      }
    },
    title () {
      if (!this.allData) {
        return ''
      } else {
        return this.allData[this.dataType].title
      }
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    handleSelect (key) {
      this.dataType = key
      this.updateChart()
      this.showChoice = false
    },
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.efficiency_ref, 'chalk')
      const initOption = {
        grid: {
          top: '12%',
          left: '4%',
          right: '8%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '5%'
        }
      }
      this.chartInstance.setOption(initOption)
    },
    async getData () {
      const { data: ret } = await this.$http.get('trend')
      console.log(ret)
      this.allData = ret
      this.updateChart()
    },
    updateChart () {
      // x 轴数据
      const timerArrs = this.allData.common.month
      // y 轴数据，map 代表地区销量趋势，seller 表示商家销量趋势，commodity 表示商品销量趋势
      const valueArrs = this.allData[this.dataType].data
      const legendArr = valueArrs.map(item => {
        return item.name
      })
      const seriesArr = valueArrs.map((item, index) => {
        return {
          type: 'line',
          name: item.name,
          data: item.data,
          stack: this.dataType,
          areaStyle: { opacity: 0.5 }
        }
      })
      const dataOption = {
        xAxis: { data: timerArrs },
        legend: { data: legendArr },
        series: seriesArr
      }
      this.chartInstance.setOption(dataOption)
      this.chartInstance.resize()
    },
    screenAdapter () {
      this.titleFontSize = this.$refs.efficiency_ref.offsetWidth / 100 * 3.6
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 10;
  color: white;
  .title-icon {
    margin-left: 10px;
    cursor: pointer;
  }
  .select-con {
    background-color: #222733;
  }
}
</style>
