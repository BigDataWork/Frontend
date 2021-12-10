<template>
  <div class="analysis">
    <a-card :loading="loading" :bordered="true" bodyStyle="padding:0">
      <a-row style="margin: 0 -12px">
        <a-col
          style="padding: 0 12px"
          :xl="16"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24"
        >
          <a-card
            :loading="loading"
            :bordered="false"
            style="margin-top: 24px"
            title="皮带状态"
          >
            <a-space slot="extra">
              <span
                ><a-icon
                  type="sync"
                  style="color: green; font-size: 21px"
                  spin
                />运行中</span
              >
              <span
                ><a-icon
                  type="alert"
                  style="color: red; font-size: 20px"
                />警告</span
              >
              <span
                ><a-icon
                  type="question-circle"
                  style="color: #ffd700; font-size: 22px"
                />故障</span
              >
              <span><a-icon type="stop" style="font-size: 22px" />已停止</span>
            </a-space>
            <belt-overview></belt-overview>
            <work-face></work-face>
          </a-card>
        </a-col>
        <a-col
          style="padding: 0 12px"
          :xl="8"
          :lg="24"
          :md="24"
          :sm="24"
          :xs="24"
        >
          <chart-card :loading="loading" :title="'故障统计(10天)'">
            <a-tooltip :title="$t('introduce')" slot="action">
              <a-icon type="info-circle-o" />
            </a-tooltip>
            <div>
              <my-bar />
            </div>
          </chart-card>
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
    </a-card>
    <a-card
      :loading="loading"
      :bordered="true"
      style="margin-top: 24px"
      title="运行提示"
      bodyStyle="padding:0"
      headStyle="background-color:#1890ff;color:white"
    >
      <running-msg></running-msg>
    </a-card>
    <a-card
      :loading="loading"
      :bordered="true"
      style="margin-top: 24px"
      title="报警统计"
      bodyStyle="padding:0"
      headStyle="background-color:#1890ff;color:white"
    >
      <alarm-msg> </alarm-msg>
    </a-card>
  </div>
</template>

<script>
import ChartCard from "../../../components/card/ChartCard";
import myBar from "../../../components/chart/myBar";
import myLine from "../../../components/chart/myLine";
import BeltOverview from "./BeltOverview";
import RunningMsg from "./RunningMsg.vue";
import AlarmMsg from "./AlarmMsg.vue";
import WorkFace from "./WorkFace.vue";

export default {
  name: "Analysis",
  i18n: require("./i18n"),
  data() {
    return {
      loading: true,
    };
  },
  created() {
    setTimeout(() => (this.loading = !this.loading), 1000);
  },
  components: {
    WorkFace,
    AlarmMsg,
    RunningMsg,
    BeltOverview,
    ChartCard,
    myBar,
    myLine,
  },
};
</script>

<style lang="less" scoped>
.extra-wrap {
  .extra-item {
    display: inline-block;
    margin-right: 24px;
    a:not(:first-child) {
      margin-left: 24px;
    }
  }
}
@media screen and (max-width: 992px) {
  .extra-wrap .extra-item {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .extra-wrap {
    display: none;
  }
}
</style>
