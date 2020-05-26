<template>
    <div class="billList-v1">
			<van-tabs v-model="tabId" animated>
				<van-tab title="待缴费账单" name="stay">
					<ul class="pay-list">
						<li v-for="(item, index) in payList" :key="index">
							<div>
								<h4>{{item.billName}}</h4>
								<span>{{item.refundAmount | priceStr | priceFormat}}元</span>
							</div>
							<div>
								<p>
									<span>
										<span>{{item.studentName}}</span>
										<span>{{item.gradeName}}</span>
										<span>{{item.className}}</span>
									</span>
									<span>{{item.refundStatus, 2 | payStatusStr}}</span>
								</p>
							</div>
							<div>
								<i class="circle circle-l"></i>
								<i class="circle circle-r"></i>
								<div class="open-details">
									<a href="javascript:;">账单详情</a>
									<a href="javascript:;">催缴</a>
								</div>
							</div>
						</li>
					</ul>
					<van-submit-bar
						button-text="一键催缴"
						:safe-area-inset-bottom="true"
						@submit="onSubmit"
					>
						<div class="pay-statistic">
							<p>应收：100</p>
							<p>待收：1212</p>
						</div>
					</van-submit-bar>
				</van-tab>
				<van-tab title="已缴费账单" name="end">
					111
				</van-tab>
			</van-tabs>
    </div>
</template>

<script>
import { payApi } from '@/api/index'

export default {
	name: 'billList_v1',
	data () {
		return {
			tabId: '',
			payList: []
		}
	},
	mounted () {
		this.getBackBillList()
	},
	methods: {
		onSubmit () {
		},
		getBackBillList () {
			payApi.backBillList().then(res => {
				if (+res.returncode === 10000) {
					this.payList = res.body.list
				} else {
					this.payList = []
				}
			})
		}
	}
}
</script>

<style lang="scss">
.billList-v1 {
	.pay-statistic {
		display: flex;
		margin-right: 166px;
		p {
			margin-right: 30px;
		}
	}
	.van-button--danger {
		background-color: #00AAFF;
		border-color: #00AAFF;
	}
	.van-submit-bar__price {
		color: #333;
	}
	.van-tabs__line {
		width: 150px !important;
		bottom: 50px !important;
		height: 6px;
	}
	.pay-list {
		.open-details {
			display: flex;
			justify-content: space-around;
		}
		.circle {
			width: 15px;
			height: 30px;
			background-color: #f2f3f5;
			position: absolute;
			bottom: 84px;
			display: inline-block;
		}
		.circle-l {
			border-radius: 0 30px 30px 0;
			left: 0;
		}
		.circle-r {
			border-radius: 30px 0 0 30px;
			right: 0;
		}
		li {
			background: #fff;
			margin: 20px 20px auto 20px;
			border-radius: 10px;
			>div:nth-child(1) {
				display: flex;
				justify-content: space-between;
				border-bottom: 1.5px dashed #eee;
				h4 {
					font-weight: 600;
					font-size: 32px;
					color: #333;
					padding-left: 30px;
					height: 88px;
					line-height: 88px;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					word-wrap: break-word;
					position: relative;
				}
				span {
					color: #ff5e68;
					font-size: 34px;
					font-weight: 600;
					line-height: 88px;
					padding-right: 30px;
				}
			}
			>div:nth-child(2) {
				display: block;
				border-bottom: 1.5px solid #eee;
				padding: 20px 30px 16px 30px;
				p {
					color: #BBBBBD;
					font-size: 28px;
					display: flex;
					justify-content: space-between;
					height: 90px;
					line-height: 90px;
					span:first-child {
						color: #333;
					}
				}
			}
			div:nth-child(3) {
				line-height: 88px;
				text-align: center;
				position: relative;
				a {
					color: #42b8fc;
					font-size: 30px;
					width: 50%;
				}
				a:first-child {
					border-right: 1.5px solid #eee;
				}
			}
		}
	}
}
</style>
