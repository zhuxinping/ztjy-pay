<template>
	<div class="mui-content" style="background-color: #fff;">

		<div class="al">
			<div class="tips">
				<img src="/static/image/pay/al-ico06.png">
				<p>由于以下原因，您的申请未通过：<br></p>
			</div>
			<ul class="list">
				<li>
					<i></i><em class="c"></em><span>2018-01-23 00:00:00<b>提交申请</b></span>
				</li>
				<li>
					<i></i><em class="c"></em><span>2018-01-22 00:00:01<b>资料已提交支付宝</b></span>
				</li>
				<li>
					<i class="c"></i><span class="c-err"><b>审核不通过</b></span>
				</li>
			</ul>
		</div>
		<div class="page-show-fixed-btn">
			<a href="javascript:;">重新编辑</a>
		</div>
	</div>
</template>
<script>
export default {
	name: 'applyStatus',
	data() {
		return {

		}
	}
}
</script>
<style scoped lang="scss">
	@import '../../../assets/css/my-vant.scss';
	body {
		background: #fff;
	}
	.al {
		padding: 30px 0;
		.tips {
			text-align: center;
			padding-bottom: 30px;
			img {
				height: 270px;
				width: 270px;
			}
			p {
				padding: 0 30px;
				margin-bottom: 0;
				font-size: 28px;
				color: #333;
				line-height: 48px;
			}
		}
		.list {
			margin-top: 30px;
			li {
				position: relative;
				line-height: normal;
				list-style: none;
				padding: 0;
				margin: 0;
				i {
					display: inline-block;
					width: 24px;
					height: 24px;
					position: absolute;
					top: 22%;
					left: 210px;
					background: url(../../../assets/images/al-ico01.png);
					background-size: 100%;
				}
				i.c {
					background: url(../../../assets/images/al-ico03.png);
					background-size: 100%;
				}
				em.c {
					height: 154px;
					width: 4px;
					display: block;
					background-color: #ffb132;
					position: absolute;
					top: 60px;
					left: 220px;
					background-image: linear-gradient(0deg, #00aaff, #00aaff, #00aaff, #00aaff);
				}
				span {
					display: inline-block;
					width: 70%;
					height: 170px;
					margin-left: 230px;
					padding: 30px;
					font-size: 30px;
					line-height: 44px;
					color: #44c1ff;
					b {
						display: block;
						font-weight: normal;
					}
				}
				span.c-err {
					color: #ff6972;
				}
			}
		}
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
