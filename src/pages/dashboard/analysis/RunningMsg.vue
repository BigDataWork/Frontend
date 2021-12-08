<template>
   <div
    v-infinite-scroll="handleInfiniteOnLoad"
    :infinite-scroll-distance="5"
    class="demo-infinite-container"
  >
    <a-list size="small" :data-source="data" item-layout="vertical">
      <a-list-item slot="renderItem" slot-scope="item" style>
        <a-list-item-meta :description="item.time"> 
        </a-list-item-meta>
        <div>{{item.message}}</div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import infiniteScroll from 'vue-infinite-scroll';
export default {
    name: "RunningMsg",
    directives: { infiniteScroll },
    data() {
        return {
            loading: false,
            busy: false,
            data: [
                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },
                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },
                                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },                {
                    "time": "09:04:35",
                    "message": "西大五1.0m 皮带启动"
                },
            ]
        }
    },
    methods:{
        handleInfiniteOnLoad() {
            const data = this.data;
            if (data.length > 5) {
                this.busy = true;
                return;
            }
        },
    }
}
</script>
<style scoped>
.demo-infinite-container{
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
}
</style>