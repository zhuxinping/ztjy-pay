<template>
    <div class="back-bill-list-wrap">
        <ul class="pay-list">
					<li v-for="(item, index) in payList" :key="index">
						<div>
							<h4>{{item.billName}}</h4>
							<span>{{item.refundAmount | priceStr | priceFormat}}元</span>
						</div>
						<div>
							<p>
								<span>{{item.studentName}}</span>
								<span>{{item.gradeName}}</span>
								<span>{{item.className}}</span>
							</p>
							<p>
								<span>{{item.refundIntoTime}}</span>
								<span>{{item.refundStatus, 2 | payStatusStr}}</span>
							</p>
						</div>
						<div>
							<i class="circle circle-l"></i>
							<i class="circle circle-r"></i>
							<a href="javascript:;">账单详情</a>
						</div>
					</li>
        </ul>
    </div>
</template>

<script>
import { payApi } from '@/api/index'

export default {
	name: 'backBillList',
	data() {
		return {
			payList: []
		}
	},
	mounted () {
		this.getBackBillList()
	},
	methods: {
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

<style lang="scss" scoped>
@import '../../../assets/css/parent.scss';

.back-bill-list-wrap {
	.pay-list {
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
			div:nth-child(1) {
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
			div:nth-child(2) {
				display: block;
				border-bottom: 1.5px solid #eee;
				padding: 20px 30px 16px 30px;
				p:first-child {
					span {
						margin-right: 20px;
						font-size: 30px;
					}
				}
				p:last-child {
					color: #BBBBBD;
					font-size: 28px;
					display: flex;
					justify-content: space-between;
				}
			}
			div:nth-child(3) {
				line-height: 88px;
				margin-top: 10px;
				text-align: center;
				position: relative;
				a {
					color: #42b8fc;
					font-size: 30px;
				}
			}
		}
	}
}
</style>
