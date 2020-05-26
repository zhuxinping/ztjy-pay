<template>
	<div>
		<div class="mui-content">
			<div class="pay-tips-info">特别提示：为了确保幼儿园的资金安全，暂时我们仅能支持幼儿园的委托收款人账户或者幼儿园对公账户作为收款账户</div>
			<div class="pay-type-info">
				<img src="/static/image/pay/ico-alipay.png">支付宝-教育缴费
				<p>家长可以直接使用支付宝进行缴费，缴费资金可提现至银行卡，无需手续费，流程更简单，资金更安全</p>
			</div>
			<div class="pay-type-radio"><ul class="mui-table-view mui-table-view-radio">
					<li class="mui-table-view-cell" data-type="2">
						<a class="mui-navigate-right">
							对私账户
						</a>
					</li>
					<li class="mui-table-view-cell mui-selected" data-type="1">
						<a class="mui-navigate-right">
							对公账户
						</a>
					</li>
			</ul>
			<div class="page-show-fixed-btn">
				<a href="javascript:;" id="next">下一步</a>
			</div></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'applyAddPic',
	data () {
		return {

		}
	},
	methods: {

	}
}
</script>
<style scoped lang="scss">
@import '../../../assets/css/my-vant.scss';
body {
	background-color: #f2f3f5;
}
.pay-tips-info {
    font-size: 26px;
    padding: 20px 30px;
    background-color: #fee7e2;
    color: #91390e;
    line-height: 36px;
    margin-bottom: 20px;
}
.pay-type-info {
    font-size: 32px;
    padding: 20px 30px;
    background-color: #fff;
    line-height: 44px;
    margin-bottom: 20px;
	img {
		width: 40px;
		height: 40px;
		vertical-align: middle;
		margin-right: 10px;
	}
	p {
		color: #818d9d;
		padding-top: 15px;
		font-size: 28px;
		margin-bottom: 0;
	}
}
.mui-table-view {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
	.mui-table-view-cell {
		position: relative;
		overflow: hidden;
		&:after {
			position: absolute;
			right: 0;
			bottom: 0;
			left: 15px;
			height: 2px;
			content: '';
			// height: 4px;
			background-color: #eee;
			left: 30px;
			-webkit-transform: scaleY(.5);
			transform: scaleY(.5);
			// background-color: #c8c7cc;
		}
		a {
			height: 88px;
			line-height: 88px;
			font-size: 34px;
			padding: 0 30px;
			margin: 0;
			position: relative;
			display: block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			color: inherit;
			box-sizing:border-box;
			&:after {
				// background: url(../../../assets/images/icon_select.png) no-repeat;
				background-size: 100%;
				height: 40px;
				width: 40px;
				content: '';
				border: none;font-family: Muiicons;
				background-color: #fff;
				border: 2px solid #eee;
				border-radius: 50%;
				right: 30px;
				font-size: inherit;
				line-height: 1;
				position: absolute;
				top: 50%;
				display: inline-block;
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
				text-decoration: none;
				color: #bbb;
				-webkit-font-smoothing: antialiased;
			}
		}
	}
}
.mui-selected a:after {
	background: url(../../../assets/images/icon_select.png) no-repeat;
}
.page-show-fixed-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
	a {
		@include buttonNext
	}
}
</style>
