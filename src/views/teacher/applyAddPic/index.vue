<template>
	<div class="mui-content" style="padding-bottom: 2.5rem;">
		<form id="form">

		<input type="hidden" name="feeAccountType" value="1">
		<input type="hidden" name="schoolCreateType" value="3">
		<div class="mui-card-pess">
			<em class="tips-pess-line"></em>
			<ul class="tips-pess">
				<li>
					<i>1</i>
					<p class="on">提交收款账户资料</p>
				</li>
				<li>
					<i>2</i>
					<p class="on">提交学校资料</p>
				</li>
			</ul>
		</div>
		<imgCard v-for="(item, index) in renderData" :key="index" :title="item.title" :src="item.src" />
		<div class="page-show-fixed-btn">
			<span class="checkbox"><i id="checkbox-link"></i><input type="checkbox" style="display: none;" id="checkbox"><em id="agreement">同意《掌通家园学费代缴服务协议》</em></span>
			<button id="btn">提交申请</button>
		</div></form>
	</div>
</template>

<script>
import imgCard from '@/components/imgCard'
export default {
	name: 'applyAddPic',
	components: {
		imgCard
	},
	data () {
		return {
			renderData: [
				{title: '事业单位法人登记证（彩色扫描件）', src: ['/static/image/pay/openpay05.png']},
				{title: '法人身份证（彩色扫描件）', src: ['/static/image/pay/openpay05.png', '/static/image/pay/openpay05.png']}
			]
		}
	},
	methods: {

	}
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/my-vant.scss';
body, .mui-content {
    background-color: #f2f3f5;
	.mui-card-pess {
		background-color: #fff;
		position: relative;
		.tips-pess-line {
			height: 2px;
			width: 40%;
			display: block;
			position: absolute;
			top: 70px;
			left: 30%;
			background-color: #54c6ff;
			z-index: 1;
		}
		.tips-pess {
			overflow: hidden;
			padding: 48px 0 32px 0;
			position: relative;
			z-index: 3;
			li {
				float: left;
				width: 50%;
				text-align: center;
				i {
					display: inline-block;
					width: 50px;
					height: 50px;
					border-radius: 50%;
					line-height: 50px;
					text-align: center;
					font-size: 24px;
					background: url(../../../assets/images/no1_blue.png) no-repeat;
					background-size: 100%;
					color: #fff;
					font-style: normal;
				}
				p {
					text-align: center;
					margin-bottom: 0px;
					padding-top: 10px;
					color: #bbbbbd;
					font-size: 24px;
					&.on {
						color: #00AAFF;
					}
				}
			}
		}
	}
	h5 {
		&.title {
			padding: 20px 30px 6px 30px;
			font-size: 28px;
			line-height: 44px;
			color: #818D9D;
			margin-top: 10px;
			margin-bottom: 10px;
			font-weight: 400;
		}
	}
	.add-pic {
		padding: 35px;
		background-color: #fff;
		text-align: center;
		img {
			width: 240px;
			height: 170px;
			margin: 0 20px;
		}
	}
	.page-show-fixed-btn {
		position: fixed;
		bottom: 0;
		width: 100%;
		.checkbox {
			padding: 0 30px;
			display: block;
			background-color: #f2f3f5;
			height: 80px;
			line-height: 80px;
			i {
				background: url(../../../assets/images/icon_weixuanzhong.png) no-repeat;
				width: 24px;
				height: 24px;
				background-size: 24px 24px;
				vertical-align: middle;
				display: inline-block;
				margin-right: 16px;
				border-radius: 50%;
				vertical-align: text-top;
			}
			em {
				color: #00aaff;
				font-style: normal;
				font-size: 28px;
			}
		}
		#btn {
			@include buttonNext;
			height: 100px;
			border: none;
		}
	}
}

</style>
