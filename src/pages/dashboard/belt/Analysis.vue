<template>
  <div class="analysis">

    <a-card :loading="loading" style="margin-top: 24px" :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <a-tab-pane loading="true" :tab="$t('curve1')" key="1">
            <a-row>
              <!-- <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :title="$ta('stores|sales|trend', 'p')" />
              </a-col> -->
              <div>
                  <chart-1/>
              </div>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('curve2')" key="2">
            <a-row>
              <chart-2/>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('curve3')" key="3">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <chart-3/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('curve4')" key="4">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <chart-4/>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div> 
    </a-card>
  </div>
</template>

<script>
import Chart1 from './Chart1.vue'
import Chart2 from './Chart2.vue'
import Chart3 from './Chart3.vue'
import Chart4 from './Chart4.vue'


export default {
  name: 'Analysis',
  i18n: require('./i18n'),
  data () {
    return {
      //rankList,
      loading: true
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
  components: {Chart1, Chart2, Chart3, Chart4}
}
</script>

<style lang="less" scoped>
  .extra-wrap{
    .extra-item{
      display: inline-block;
      margin-right: 24px;
      a:not(:first-child){
        margin-left: 24px;
      }
    }
  }
  @media screen and (max-width: 992px){
    .extra-wrap .extra-item{
      display: none;
    }
  }
  @media screen and (max-width: 576px){
    .extra-wrap{
      display: none;
    }
  }

</style>
