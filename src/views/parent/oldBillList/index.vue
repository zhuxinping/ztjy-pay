<template>
	<div class="old-bill-list-wrap">
		<van-tabs v-model="tabId" animated>
			<van-tab title="缴费" name="pay">
				<van-pull-refresh v-model="isLoading" @refresh="onLoadRefresh">
					<van-list v-model="loading" :finished="finished" @load="onLoad" :immediate-check="false">
						<ul class="old-bill-list" v-if="this.list.length > 0">
							<li v-for="(item, index) in this.list" :key="index">
								<div class="bill-list-1">
									<p>{{item.billName}}</p>
									<span>{{item.amount | priceStr | priceFormat}}元</span>
								</div>
								<div class="bill-list-2">
									<p>{{item.pushTime}}</p>
									<span>{{item.payStatus, 1 | payStatusStr}}</span>
								</div>
							</li>
						</ul>
						<div class="loading-no-data" v-if="this.loading !== false">暂无数据</div>
					</van-list>
				</van-pull-refresh>
			</van-tab>
			<van-tab title="退费" name="bill">
				<van-pull-refresh v-model="isBackLoading" @refresh="onBackRefresh">
					<van-list v-model="backLoading" :finished="backFinished" @load="onBackLoad" :immediate-check="false">
						<ul class="old-bill-list" v-if="this.backList.length > 0">
							<li v-for="(item, index) in this.backList" :key="index">
								<div class="bill-list-1">
									<p>{{item.billName}}</p>
									<span>{{item.amount | priceStr | priceFormat}}元</span>
								</div>
								<div class="bill-list-2">
									<p>{{item.pushTime}}</p>
									<span>{{item.payStatus, 1 | payStatusStr}}</span>
								</div>
							</li>
						</ul>
						<div class="loading-no-data" v-if="this.backLoading !== false">暂无数据</div>
					</van-list>
				</van-pull-refresh>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
import {payApi} from '@/api/index'
import ClientApi from '@/utils/client'
import {CURR_HOST} from '@/maps/constants'
import dsbridge from 'dsbridge'

export default {
	data () {
		return {
			list: [],
			backList: [],
			createTime: '',
			tabId: 'pay',
			pageNo: 1,
			backPageNo: 1,
			hasMore: true,
			backHasMore: true,
			loading: false,
			isLoading: false,
			backLoading: false,
			isBackLoading: false,
			finished: false,
			backFinished: false
		}
	},
	name: 'oldBillList',
	created () {
		this.getList(this.createTime, this.pageNo)
		this.getBackList(this.createTime, this.backPageNo)
		this.checkAlipayStatus()
		ClientApi.onStatisticEvent(1, {page_category: '3', page: 'sch_pay'})
	},
	methods: {
		loadMore () {
			this.loading = true
			this.isLoading = true
			this.getList(this.createTime, this.pageNo)
		},
		backLoadMore () {
			this.backLoading = true
			this.isBackLoading = true
			this.getBackList(this.createTime, this.backPageNo)
		},
		onLoad () {
			if (this.isLoading) return false
			this.loadMore()
		},
		onBackLoad () {
			if (this.isBackLoading) return false
			this.backLoadMore()
		},
		onBackRefresh () {
			this.backLoadMore()
		},
		onLoadRefresh () {
			this.loadMore()
		},
		// 获取绑定支付宝相关信息
		checkAlipayStatus () {
			payApi.bindAlipayStatus().then(res => {
				if (!res.isBinding) {
					this.$dialog.confirm({
						title: '温馨提示',
						message: res.tip,
						cancelButtonColor: '#1989fa',
						confirmButtonText: '立即绑定'
					}).then(() => {
						const namespace = dsbridge.call('getNameSpace')
						let linkHref = window.location.href.replace('oldBillList', 'alipayAdd')
						dsbridge.call(namespace + '.jumpTo', JSON.stringify({
							action: 'html',
							data: {
								url: linkHref,
								title: '绑定支付宝账号'
							}
						}), () => {})
					}).catch(() => {})
				}
			})
		},
		pushJson (json) {
			for (let i in json) {
				json[i].features = JSON.parse(json[i].features)
			}
			return json
		},
		// 账单列表
		getList (createTime, pageNo) {
			payApi.parentList({
				createTime,
				pageNo,
				payStatus: 0
			}).then(res => {
				this.hasMore = res.hasMore
				if (this.pageNo === 1) {
					this.list = this.pushJson(res.list)
				} else {
					this.list = [...this.list, ...this.pushJson(res.list)]
				}
				if (this.hasMore === false) {
					this.loading = true
					this.isLoading = true
					return
				}
				this.loading = false
				this.isLoading = false
				this.pageNo++
			})
		},
		// 退费账单列表
		getBackList (createTime, backPageNo) {
			payApi.parentBackList({
				createTime,
				backPageNo,
				payStatus: 0
			}).then(res => {
				this.backHasMore = res.hasMore
				if (this.backPageNo === 1) {
					this.backList = this.pushJson(res.list)
				} else {
					this.backList = [...this.backList, ...this.pushJson(res.list)]
				}
				if (this.backHasMore === false) {
					this.backLoading = true
					this.isBackLoading = true
					return
				}
				this.backLoading = false
				this.isBackLoading = false
				this.backPageNo++
			})
		},
		// 跳转详情
		goToDetail (id) {
			ClientApi.jumpTo(JSON.stringify({
				action: 'html',
				data: {
					url: CURR_HOST + '/questionDetail?billDetailNum=' + id,
					title: '账单详情'
				}
			}))
			ClientApi.onStatisticEvent(2, {event_id: 'sch_pay_item_click'})
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../../assets/css/parent.scss';
</style>

<style lang="scss">
.old-bill-list-wrap {
	.van-tabs--line .van-tabs__wrap {
		height: 96px;
		.van-tab span {
			line-height: 96px;
			font-size: 30px;
		}
	}
	.van-tabs__line {
		width: 64px !important;
		bottom: 50px !important;
		height: 6px;
	}
	.van-list .old-bill-list li {
		margin: 0 0 0 30px;
		p {
			font-size: 28px;
		}
	}
	li div.bill-list-1 span {
		font-size: 36px;
	}
	.bill-list-2 {
		color: #818D9D;
		font-size: 24px;
	}
}
</style>
