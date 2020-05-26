<template>
	<div>
		<ul class="bill-list" v-if="this.list.length > 0">
			<li v-for="(item, index) in this.list" :key="index">
				<span class="time">{{item.pushTime}}</span>
				<div class="item">
					<div @click="goToDetail(item.billDetailNum)">
						<h1>
							{{item.billName}}
							<span>{{item.payStatus, 1 | payStatusStr}}</span>
						</h1>
						<div class="bd">
							<i class="ico"></i><i class="ico r"></i>
							<p v-for="(subitem, key) in item.features.payItems" :key="key">{{subitem.payItem}}<em>{{subitem.itemPrice | priceStr | priceFormat}}元</em></p>
							<p class="ptb"><em class="txt"><s>合计：</s>{{item.amount | priceStr | priceFormat}}元</em></p>
						</div>
					</div>
					<div class="btn"><span @click="goToPay(item.billDetailNum)">立即缴费</span></div>
				</div>
			</li>
		</ul>
		<div class="loading-no-data" v-show="this.hasMore === false">暂无数据</div>
	</div>
</template>
<script>
import {payApi} from '@/api/index'
import ClientApi from '@/utils/client'
import {CURR_HOST} from '@/maps/constants'
export default {
	data () {
		return {
			list: [],
			createTime: '',
			pageNo: 1,
			hasMore: true,
			loading: false
		}
	},
	name: 'billList',
	created () {
		//
		this.getList(this.createTime, this.pageNo)
		ClientApi.onStatisticEvent(1, {page_category: '3', page: 'sch_pay'})
	},
	methods: {
		loadMore () {
			this.loading = true
			this.getList(this.createTime, this.pageNo)
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
					return
				}
				this.loading = false
				this.pageNo++
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
		},
		// 支付
		goToPay (id) {
			ClientApi.jumpTo(JSON.stringify({
				action: 'openPay',
				data: {
					billNo: id
				}
			}))
			ClientApi.onStatisticEvent(2, {event_id: 'pay_now_click', obj_id: id})
		}
	}
}
</script>
<style scoped lang="scss">
@import '../../../assets/css/parent.scss'
</style>
