<template>
	<div class="mui-content" style="padding-bottom: 1.5px;">
		<form id="form">
		<div class="mui-card-pess">
			<em class="tips-pess-b"></em>
			<em class="tips-pess-line li-line-s d"></em>
			<ul class="tips-pess">
				<li class="lis">
					<i>1</i>
					<p class="on">提交收款账户资料</p>
				</li>
				<li class="lis">
					<i>2</i>
					<p class="on">提交委托收款资料</p>
				</li>
				<li class="lis">
					<i class="c">3</i>
					<p>提交学校资料</p>
				</li>
			</ul>
		</div>
		<imgCard v-for="(item, index) in renderData" :key="index" :title="item.title" :src="item.src" />
		<div class="page-show-fixed-btn">
			<button id="btn">下一步</button>
		</div></form>
	</div>
</template>

<script>
import imgCard from '@/components/imgCard'
export default {
	name: 'applyAddOtPic',
	components: { imgCard },
	data () {
		return {
			renderData: [
				{title: '委托收款协议（彩色扫描件）', src: ['/static/image/pay/openpay06.png?t=20181203']},
				{title: '委托人手持身份证照（照片）', src: ['/static/image/pay/openpay07.png']},
				{title: '委托人身份证（彩色扫描件）', src: ['/static/image/pay/openpay03.png', '/static/image/pay/openpay04.png']}
			]
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../../../assets/css/my-vant.scss';
.mui-card-pess {
    background-color: #fff;
    position: relative;
	.tips-pess-b {
		height: 30px;
		width: 11%;
		display: block;
		position: absolute;
		top: 54px;
		left: 44%;
		background-color: #fff;
		z-index: 2;
	}
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
	.tips-pess-line.li-line-s {
		width: 55%;
		left: 22%;
	}
	.tips-pess-line.li-line-s.d {
		background: -webkit-linear-gradient(90deg, #54c6ff 0%, #54c6ff 50%, #cccccc 51%);
		background: linear-gradient(90deg, #54c6ff 0%, #54c6ff 50%, #cccccc 51%);
	}
	.tips-pess {
		overflow: hidden;
		padding: 48px 0 32px 0;
		position: relative;
		z-index: 3;
		li {
			&.lis {
				float: left;
				width: 33%;
				text-align: center;
			}
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
				&.c {
					background: url(../../../assets/images/no2_gray.png) no-repeat;
					background-size: 100%;
				}
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
.page-show-fixed-btn {
	position: fixed;
	bottom: 0;
	width: 100%;
	#btn {
		@include buttonNext;
		height: 100px;
		border: none;
	}
}
</style>
