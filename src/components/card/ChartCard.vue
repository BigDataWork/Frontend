<template>
  <a-card :="lloadingoading" :body-style="{padding: '20px 24px 8px'}" :bordered="false">
    <div class="chart-card-header">
      <div class="meta">
        <span class="chart-card-title">{{title}}</span>
        <span class="chart-card-action">
        <slot name="action"></slot>
      </span>
      </div>
      <div class="total"><span>{{total}}</span></div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <slot></slot>
      </div>
    </div>
    <div class="chart-card-footer">
      <slot name="footer"></slot>
    </div>
  </a-card>
</template>

<script>
export default {
  name: 'ChartCard',
  props: ['title', 'total', 'loading']
}
</script>

<style scoped lang="less">
  .chart-card-header{
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .chart-card-header .meta{
    position: relative;
    overflow: hidden;
    width: 100%;
    color: '#F56F53';
    font-size: 16px;
    line-height: 16px;
  }
  .chart-card-action{
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
  .total {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    margin-top: 0px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    height: 80px;
  }
  .chart-card-footer{
    border-top: 1px solid @border-color-base;
    padding-top: 0px;
    margin-top: 0px;
  }
  .chart-card-content{
    margin-bottom: 20px;
    position: relative;
    height: 200px;
    width: 100%;
  }
  .chart-card-content .content-fix{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
