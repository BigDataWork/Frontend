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
            data: [],
            path:"ws://124.71.174.198:8080/ws/runningmsg",
            socket:"",
        }
    },
    mounted () {
        // 初始化
        this.init()
    },
    methods:{
        handleInfiniteOnLoad() {
            const data = this.data;
            if (data.length > 5) {
                this.busy = true;
                return;
            }
        },
        init() {
            if(typeof(WebSocket) === "undefined"){
                alert("您的浏览器不支持socket")
            }else{
                // 实例化socket
                this.socket = new WebSocket(this.path)
                // 监听socket连接
                this.socket.onopen = this.open
                // 监听socket错误信息
                this.socket.onerror = this.error
                // 监听socket消息
                this.socket.onmessage = this.getMessage
            }
        },
        open() {
            console.log("socket连接成功");
        },
        error() {
            console.log("连接错误");
        },
        getMessage(msg) {
            let item = JSON.parse(msg.data);
            this.data.unshift(item.data);
            console.log(msg.data)
        },
        send() {
        },
        close() {
            console.log("socket已经关闭")
        }
    },
    destroyed () {
        // 销毁监听
        this.socket.onclose = this.close
    },
    created(){
        fetch("http://124.71.174.198:8080/api/runningmsg")
        .then(response => response.json())
        .then(result => this.data = result.data)
        .catch(error => console.log('error', error));    
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