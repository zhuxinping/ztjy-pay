<template>
	<div>
		<div class="page-show-hd">
			<h3>{{detail.billName}}</h3>
			<p>{{detail.totalBalance | priceStr | priceFormat}}元</p>
			<em>{{detail.refundStatus, 2 | payStatusStr}}</em>
		</div>
		<div :class="detail.payStatus == 0 ? 'input-group page-show-bd mb' : 'input-group page-show-bd'">
			<div v-show="detail.features.payItems.length > 0">
				<div class="input-row">
					<label class="tit">退费明细</label>
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
				<label class="s">退费编号</label>
				<span class="r l">{{detail.billDetailNum}}</span>
			</div>
			<div v-if="detail.refundStatus == 2">
				<div class="input-row">
					<label>退费时间</label>
					<span class="r">
						{{detail.refundIntoTime}}
					</span>
				</div>
				<div class="input-row">
					<label>退费方式</label>
					<span class="r">
						{{detail.refundChannel | payChannelStr}}
					</span>
				</div>
				<div v-show="detail.refundChannel == 1" class="input-row">
					<label>退费到账号</label>
					<span class="r">
						{{detail.returnedAlipayNo}}
					</span>
				</div>
			</div>
			<div v-else-if="detail.refundStatus == 1 || detail.refundStatus == 3">
				<div class="input-row">
					<label>退费方式</label>
					<span class="r">
						{{detail.refundChannel | payChannelStr}}
					</span>
				</div>
			</div>
			<div class="input-row">
				<label>学校名称</label>
				<span class="r">{{detail.schoolName}}</span>
			</div>
			<div class="input-row">
				<label>年级班级</label>
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
			<div class="input-row">
				<label>退费老师</label>
				<span class="r">
					{{detail.returnTeacherName}}
				</span>
			</div>
			<div class="input-row">
				<label>退费说明</label>
				<span class="r">
					{{detail.returnRemark}}
				</span>
			</div>
		</div>
		<span v-show="detail.refundStatus == 2" class="ico-pay back"></span>
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
	name: 'backBillDetails',
	created () {
		this.billDetails(ClientApi.getUrl('billDetailNum'))
		ClientApi.onStatisticEvent(1, {page_category: '4', page: 'refunded_bill_detail'})
	},
	methods: {
		pushJson (json) {
			return JSON.parse(json)
		},
		// 退费详情
		billDetails (billDetailNum) {
			payApi.parentBackDetails({
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
