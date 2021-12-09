<template>
	<div class="analysis">

		<a-row>
			<a-col :sm="24" :md="12" :xl="12">
				<img src="https://gitee.com/PaulWey/image/raw/master/img/20211209164229.png">
			</a-col>

			<a-col :sm="24" :md="12" :xl="12">
				<div class="contour">
					<div style="height: 80px;">
						<span class="info">
							<div>撕裂</div>
							<div class="waring1" v-if="circle1==1"></div>
							<div class="waring" v-if="circle1==0"></div>
						</span>
						<span class="info">
							<div>闭锁</div>
							<div class="waring" v-if="circle2==1"></div>
							<div class="waring1" v-if="circle2==0"></div>
						</span>
						<span class="info">
							<div>跑偏</div>
							<div class="waring" v-if="circle3==1"></div>
							<div class="waring1" v-if="circle3==0"></div>
						</span>
						<span class="info">
							<div>烟雾</div>
							<div class="waring" v-if="circle4==1"></div>
							<div class="waring1" v-if="circle4==0"></div>
						</span>
						<span class="info">
							<div>堆煤</div>
							<div class="waring" v-if="circle5==1"></div>
							<div class="waring1" v-if="circle5==0"></div>
						</span>
					</div>
					<div style="height: 200px;">
						<span class="info">
							<div>速度</div>
							<div class="waring" v-if="circle6==1"></div>
							<div class="waring1" v-if="circle6==0"></div>
						</span>
						<span class="info">
							<div>温度</div>
							<div class="waring" v-if="circle7==1"></div>
							<div class="waring1" v-if="circle7==0"></div>
						</span>
						<span class="info">
							<div>打滑</div>
							<div class="waring" v-if="circle8==1"></div>
							<div class="waring1" v-if="circle8==0"></div>
						</span>
						<span class="info">
							<div>纵撕</div>
							<div class="waring" v-if="circle9==1"></div>
							<div class="waring1" v-if="circle9==0"></div>
						</span>
						<span class="info">
							<div>断带</div>
							<div class="waring" v-if="circle10==1"></div>
							<div class="waring1" v-if="circle10==0"></div>
						</span>
					</div>
				</div>
			</a-col>
		</a-row>

		<a-card :loading="loading" style="margin-top: 24px" :bordered="false" :body-style="{padding: '24px'}">
			<div class="salesCard">
				<a-tabs default-active-key="1" size="large"
					:tab-bar-style="{marginBottom: '24px', paddingLeft: '16px'}">
					<a-tab-pane loading="true" :tab="$t('curve1')" key="1">
						<a-row>
							<!-- <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <bar :title="$ta('stores|sales|trend', 'p')" />
              </a-col> -->
							<div>
								<chart-1 />
							</div>
						</a-row>
					</a-tab-pane>
					<a-tab-pane :tab="$t('curve2')" key="2">
						<a-row>
							<chart-2 />
						</a-row>
					</a-tab-pane>
					<a-tab-pane :tab="$t('curve3')" key="3">
						<a-row>
							<a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
								<chart-3 />
							</a-col>
						</a-row>
					</a-tab-pane>
					<a-tab-pane :tab="$t('curve4')" key="4">
						<a-row>
							<a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
								<chart-4 />
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
		data() {
			return {
				circle1: 1,
				circle2: 1,
				circle3: 1,
				circle4: 1,
				circle5: 1,
				circle6: 1,
				circle7: 1,
				circle8: 1,
				circle9: 1,
				circle10: 1,
				//rankList,
				loading: true
			}
		},
		methods: {
			change_color: function() {
				this.circle1 = Math.round(Math.random() * 2) % 2
				this.circle2 = Math.round(Math.random() * 2) % 2
				this.circle3 = Math.round(Math.random() * 2) % 2
				this.circle4 = Math.round(Math.random() * 2) % 2
				this.circle5 = Math.round(Math.random() * 2) % 2
				this.circle6 = Math.round(Math.random() * 2) % 2
				this.circle7 = Math.round(Math.random() * 2) % 2
				this.circle8 = Math.round(Math.random() * 2) % 2
				this.circle9 = Math.round(Math.random() * 2) % 2
				this.circle10 = Math.round(Math.random() * 2) % 2
			},
		},
		created() {
			setTimeout(() => this.loading = !this.loading, 1000)
			setInterval(this.change_color, 5000)
		},
		components: {
			Chart1,
			Chart2,
			Chart3,
			Chart4
		}
	}
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

	.info {
		float: left;
		margin: 10px;
	}

	.contour {
		outline-style: dotted;
		outline-color: gray;
		height: 200px;
		width: 400px;
		margin: 20px 0px 50px 60px;
	}

	.waring {
		width: 60px;
		height: 60px;
		background-color: #009966;
		border-radius: 50%;
		float: left;
	}

	.waring1 {
		width: 60px;
		height: 60px;
		background-color: #ff0000;
		border-radius: 50%;
		float: left;
	}
</style>
