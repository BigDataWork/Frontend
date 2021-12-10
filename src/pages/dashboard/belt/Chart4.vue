<template>
	<div ref="testLine" id="testLine" style="width:600px; height:300px"></div>
</template>


<script>
	export default {
		name: 'DisplayDraw',
		data() {
			return {
				path: "url", //修改地址
				ws: {}, //保存websocket对象
				ydata: [110, 120, 130, 110, 45, 34, 12, 82, 16, 40, 130, 142, 106, 108, 51, 19, 45, 18, 65, 142, 143, 129,
					110, 142, 52, 16, 27, 121, 106, 45
				],
				xdata: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
					28, 29, 30
				],
				i: 31,
				myChart: null,
				option: {
					title:{
						text:"皮带变频器电流曲线",
						textAlign:"left",
						padding:[5,250]
					},
					xAxis: {
						type: 'category',
						data: this.xdata,
						name: '时间'
					},
					yAxis: {
						type: 'value',
						name: '电流/A'
					},
					series: [{
						data: this.ydata,
						showSysbol: false,
						type: 'line'
					}],
				}
			}
		},
		methods: {
			addData: function() {
				this.xdata.shift();
				this.xdata.push(this.i++);
				this.ydata.shift();
				this.ydata.push(Math.random(1) * 150);
				this.option.xAxis.data = this.xdata;
				this.option.series[0].data = this.ydata;
				this.myChart.setOption(this.option);
			},
			//websocket连接后端数据
			addData_websocket:function() {
				this.ws = new WebSocket(this.path);
				//监听是否连接成功
				this.ws.onopen = () => {
					console.log("ws连接状态：" + this.ws.readyState);
				};
				//接听服务器发回的信息并处理展示
				this.ws.onmessage = (res) => {
					console.log("接收到来自服务器的消息：");
					console.log(res.data)
					this.xdata.shift();
					this.xdata.push(this.i++);
					this.ydata.shift();
					this.wsData = eval("(" + res.data + ")");
					this.ydata.push(this.wsData.data[0]);
					this.option.xAxis.data = this.xdata;
					this.option.series[0].data = this.ydata;
					this.myChart.setOption(this.option);
					console.log(this.ydata);
				};
				//监听连接关闭事件
				this.ws.onclose = () => {
					//监听整个过程中websocket的状态
					console.log("ws连接状态：" + this.ws.readyState);
				};
				//监听并处理error事件
				this.ws.onerror = function(error) {
					console.log(error);
				};
			},
		},
		mounted() {
			this.myChart = this.$echarts.init(this.$refs.testLine)
			this.myChart.setOption(this.option)
			setInterval(this.addData, 1000)
		},

	}
</script>

<style>
</style>
