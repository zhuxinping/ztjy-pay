<template>
	<div class="wrapper">
		<template v-if="dataList && dataList.length > 0">
			<div class="title">缴费管理</div>
			<div class="list">
				<div class="list-item" v-show="item.title" v-for="item in dataList" :key="item.index">
				</div>
			</div>
			<div style="font-size: 16px; padding-left: 10px;">
				<p v-for="(item, index) in routes" :key="index">
					<a :href="item.path">{{item.meta}} - {{item.name}}</a>
				</p>
			</div>
		</template>
	</div>
</template>
<script>
import {payApi} from '@/api/index'
// import {payMock} from '@/mock/index'
export default {
	data () {
		return {
			dataList: [],
			routes: []
		}
	},
	name: 'Index',
	created () {
		this.routes = this.$router.options.routes
		//
		this.getInfo()
	},
	methods: {
		//
		getInfo () {
			// 组装参数
			// payMock.IndexListMock()
			payApi.payInfo(JSON.stringify({
				query: {
					limit: 5,
					page: 1
				}
			})).then(res => {
				this.dataList = res.data || []
			}).catch((errorType, error) => {
			})
		}
	}
}
</script>
<style scoped>
.title {
	padding-left: 30px;
	font-size: 28px;
	line-height: 80px;
	font-family: PingFangSC-Regular;
	text-align: left;
	height: 80px;
}
.em-tit {
	display: block;
	float: left;
	max-width: 600px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-style: normal;
	font-weight: 400;
	text-align: left;
}
.list{
	margin-bottom: 20px;
}
.list a{
	padding: 0px 30px 0px 30px;
	border-bottom: 1px solid #eee;
}
.alllist {
	font-family: PingFangSC-Regular;
	font-size: 28px;
	color: #00BAFF;
	text-align: center;
	vertical-align: middle;
	line-height: 62px;
	position: relative;
}
</style>
