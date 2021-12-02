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
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    clearInterval(this.timerId)
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.warning_ref, 'chalk')
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
      const initOption = {
        title: {
          text: '🚥 故障统计',
          top: 20,
          borderWidth: 2,
          borderRadius: 50,
          borderColor: '#ccc'
        },
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            label: {
              position: 'top',
              color: '#fff'
            },
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#5052EE' },
                { offset: 1, color: '#AB6EE5' }
              ])
            },
            grid: {
              top: '20%',
              right: '20%',
              left: '10%',
              bottom: '10%',
              containLabel: true
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            z: 0,
            lineStyle: {
              color: '#2D3443'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {},
            dataView: {},
            dataZoom: {},
            magicType: {
              type: ['bar', 'line']
            }
          }
        }
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
        xAxis: {
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
    },
    screenAdapter () {
      const titleFontSize = this.$refs.warning_ref.offsetWidth / 100 * 3.6
      const adapterOption = {
        title: {
          left: titleFontSize * 12.5,
          titleStyle: {
            fontSize: titleFontSize
          }
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize * 3.6
            }
          }
        },
        series: [
          {
            barwidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [titleFontSize / 2, titleFontSize / 2, 0, 0]
            }
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
