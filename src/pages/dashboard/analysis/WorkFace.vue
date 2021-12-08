<template>
  <div class="work-face">
    <a-space>
      <a-icon type="control" style="font-size:20px" />
      <span>工作面信息：</span>
      <span :key="index" v-for="(i, index) in states">
        {{ i.name }}：
        <a-tooltip>
            <template slot="title">
            <span v-if="!i.state"><a-icon type="sync" style="color: green; font-size: 21px" spin/>正常运行中</span>
            <span v-else><a-icon type="stop" style="color:red;font-size: 22px" />该部分已停止</span>
            </template>
            <a-tag :color="getColorString(i.state)" style="font-size:15px">{{
            getStateString(i.state)
            }}</a-tag>
        </a-tooltip>

      </span>
    </a-space>
  </div>
</template>
<script>
const states = [
  {
    name: "破碎机",
    state: 0,
  },
  {
    name: "转载机",
    state: 0,
  },
  {
    name: "顺槽皮带",
    state: 1,
  },
  {
    name: "前刮板",
    state: 0,
  },
  {
    name: "后刮板",
    state: 1,
  },
];
export default {
  name: "WorkFace",
  data() {
    return {
      states,
    };
  },
  methods: {
    getStateString(state) {
      if ((state === 0) | (state === "0")) {
        return "运行中";
      } else if (state === 1 || state === "1") {
        return "已停止";
      }
    },
    getColorString(state) {
      if ((state === 0) | (state === "0")) {
        return "green";
      } else if (state === 1 || state === "1") {
        return "#ef0200";
      }
    },
  },
};
</script>
<style>
.work-face {
  font-size: 16px;
}
</style>