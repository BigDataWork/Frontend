<template>
  <div class="analysis">
    <a-row style="margin-top: 0" :gutter="[24, 24]">
      <a-col :sm="24" :md="12" :xl="12">
        <chart-card :loading="loading" :title="'故障统计(10天)'">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <my-bar/>
          </div>
        </chart-card>
      </a-col>
      <a-col :sm="24" :md="12" :xl="12">
        <chart-card :loading="loading" :title="'单皮带传送效率(10天)'">
          <a-tooltip :title="$t('introduce')" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <my-line />
          </div>
        </chart-card>
      </a-col>
    </a-row>

    <a-card :loading="loading" style="margin-top: 48px" :bordered="false" :body-style="{padding: '24px'}">
      <div class="salesCard">
        <a-tabs default-active-key="1" size="large" :tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
          <div class="extra-wrap" slot="tabBarExtraContent">

            <a-range-picker :style="{width: '256px'}"></a-range-picker>
          </div>
          <a-tab-pane loading="true" :tab="$t('sales')" key="1">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :title="$ta('stores|sales|trend', 'p')" />
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <ranking-list :title="$ta('stores|sales|ranking', 'p')" :list="rankList"/>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane :tab="$t('visits')" key="2"><a-row>
            <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
              <bar :title="$ta('visits|trend', 'p')" />
            </a-col>
            <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
              <ranking-list :title="$ta('stores|visits|ranking', 'p')" :list="rankList"/>
            </a-col>
          </a-row></a-tab-pane>
        </a-tabs>
      </div>
    </a-card>
    <a-row style="margin: 0 -12px">
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" style="margin-top: 24px" :title="$t('search')">
          <hot-search />
        </a-card>
      </a-col>
      <a-col style="padding: 0 12px" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card :loading="loading" :bordered="false" style="margin-top: 24px;" :title="$t('proportion')">
          <sales-data />
          <a-radio-group slot="extra" style="margin: -12px 0">
            <a-radio-button value="a">{{$t('all')}}</a-radio-button>
            <a-radio-button value="b">{{$t('online')}}</a-radio-button>
            <a-radio-button value="c">{{$t('stores')}}</a-radio-button>
          </a-radio-group>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChartCard from '../../../components/card/ChartCard'
import Bar from '../../../components/chart/Bar'
import RankingList from '../../../components/chart/RankingList'
import HotSearch from './HotSearch'
import SalesData from './SalesData'
import myBar from '../../../components/chart/myBar'
import myLine from '../../../components/chart/myLine'

const rankList = []

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'Analysis',
  i18n: require('./i18n'),
  data () {
    return {
      rankList,
      loading: true
    }
  },
  created() {
    setTimeout(() => this.loading = !this.loading, 1000)
  },
  components: {SalesData, HotSearch, RankingList, Bar, ChartCard, myBar, myLine}
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
