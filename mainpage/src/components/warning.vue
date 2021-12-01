<template>
  <div class="com-container">
    <div class="com-chart" ref="warning_ref"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartInstance: null, // ecahrts 实例对象
      allData: null, // 服务器获取的所有数据
      currentPage: 1,
      totalPage: 0,
      timerId: null // 定时器标识
    }
  },
  mounted () {
    this.getData()
    this.initChart()
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.warning_ref)
      const initOption = {
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
        series: [
          {
            textStyle: {
              fontFamily: 'Times New Roman',
              fontStyle: 'italic'
            },
            type: 'bar',
            label: {
              show: true,
              position: 'right',
              formatter: '{b} : {c}'
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#5052EE' },
                { offset: 1, color: '#AB6EE5' }
              ])
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
    },
    // get Data
    async getData () {
      // http://127.0.0.1:8888/api/Seller
      const { data: ret } = await this.$http.get('seller')
      this.allData = ret
      // 对数据排序
      this.allData.sort((a, b) => {
        return a.value - b.value
      })
      this.totalPage = this.allData.length % 5 === 0 ? this.allData.length / 5 : this.allData.length / 5 + 1
      this.updateChart()
      // 启动定时器
      this.startInterval()
    },
    updateChart () {
      const start = (this.currentPage - 1) * 5
      const end = this.currentPage * 5
      const showData = this.allData.slice(start, end)
      const warningName = showData.map((item) => {
        return item.name
      })
      const warningValue = showData.map((item) => {
        return item.value
      })
      const dataOption = {
        yAxis: {
          data: warningName
        },
        series: [
          {
            data: warningValue
          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      this.timerId = setInterval(() => {
        this.currentPage++
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1
        }
        this.updateChart()
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
