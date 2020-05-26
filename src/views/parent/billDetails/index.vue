<template>
	<div>
		<div class="page-show-hd">
			<h3>{{detail.billName}}</h3>
			<p>{{detail.amount | priceStr | priceFormat}}元</p>
			<em :class="detail.payStatus == 0 ? 'c' : ''" >{{detail.payStatus, 1 | payStatusStr}}</em>
		</div>
		<div :class="detail.payStatus == 0 ? 'input-group page-show-bd mb' : 'input-group page-show-bd'">
			<div v-show="detail.features.payItems.length > 0">
				<div class="input-row">
					<label class="tit">收费明细</label>
					<span class="r">
					</span>
				</div>
				<div class="line">
				</div>
				<div class="input-row" v-for="(item, index) in detail.features.payItems" :key="index">
					<label class="l">{{item.payItem}}</label>
					<span class="r s">
						{{item.itemPrice | priceStr | priceFormat}}元
					</span>
				</div>
				<div class="line">
				</div>
			</div>
			<div class="input-row">
				<label class="s">账单编号</label>
				<span class="r l">{{detail.billDetailNum}}</span>
			</div>
			<div class="input-row">
				<label>账单推送时间</label>
				<span class="r">{{detail.pushTime}}</span>
			</div>
			<div class="input-row">
				<label>学校名称</label>
				<span class="r">{{detail.schoolName}}</span>
			</div>
			<div class="input-row">
				<label>班级</label>
				<span class="r">
					{{detail.gradeName}}-{{detail.className}}
				</span>
			</div>
			<div class="input-row">
				<label>学生姓名</label>
				<span class="r">
					{{detail.studentName}}
				</span>
			</div>
			<div v-if="detail.payStatus == 1">
				<div class="input-row">
					<label>缴费方式</label>
					<span class="r">
						{{detail.payChannel | payChannelStr}}
					</span>
				</div>
				<div v-show="detail.payChannel == 1" class="input-row">
					<label>缴费账号</label>
					<span class="r">
						{{detail.payerName}}
					</span>
				</div>
				<div class="input-row">
					<label>缴费时间</label>
					<span class="r">
						{{detail.payTime}}
					</span>
				</div>
			</div>
			<div v-else-if="detail.payStatus == 2">
				<div class="input-row">
					<label>缴费方式</label>
					<span class="r">
						线下-{{detail.payChannel | payChannelStr}}
					</span>
				</div>
				<div class="input-row">
					<label>收费老师</label>
					<span class="r">
						{{detail.payerName}}
					</span>
				</div>
				<div class="input-row">
					<label>收费时间</label>
					<span class="r">
						{{detail.payTime}}
					</span>
				</div>
			</div>
		</div>
		<div v-show="detail.payStatus == 0" class="page-show-fixed-btn">
			<a href="javascript:;" @click="goToPay(detail.billDetailNum)">立即缴费</a>
		</div>
		<span v-show="detail.payStatus == 1 || detail.payStatus == 2" class="ico-pay"></span>
	</div>
</template>
<script>
import {payApi} from '@/api/index'
import ClientApi from '@/utils/client'
export default {
	data () {
		return {
			detail: {
				features: {
					payItems: []
				}
			}
		}
	},
	name: 'billDetails',
	created () {
		//
		this.billDetails(ClientApi.getUrl('billDetailNum'))
		ClientApi.onStatisticEvent(1, {page_category: '4', page: 'bill_detail'})
	},
	methods: {
		pushJson (json) {
			return JSON.parse(json)
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
		},
		// 账单详情
		billDetails (billDetailNum) {
			payApi.parentDetails({
				billDetailNum
			}).then(res => {
				this.detail = res
				this.detail.features = this.pushJson(this.detail.features)
			})
		}
	}
}
</script>
<style scoped lang="scss">
@import '../../../assets/css/parent.scss';
</style>
