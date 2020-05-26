<template>
	<div class="parent-alipay-add">
		<div>
			<van-cell-group>
				<van-field v-model="alipay.username" label="姓名" placeholder="请输入真实姓名" />
				<van-field v-model="alipay.account" label="支付宝账号" placeholder="请输入支付宝账号" />
				<div class="qr-code">
					<van-field v-model="alipay.qrcode" label="验证码" placeholder="请输入验证码" />
					<van-button type="info" @click.native="getQrCode">获取验证码</van-button>
				</div>
			</van-cell-group>
		</div>
		<div class="info-tips">
			温馨提示
			<p>1.请确保您输入的是您自己的支付宝账号，避免造成不必要的损失</p>
			<p>2.绑定后幼儿园的退款将自动转到此支付宝账户</p>
		</div>

		<van-button type="info" class="page-show-fixed-btn">立即绑定</van-button>
	</div>
</template>

<script>
// import {payApi} from '@/api/index'
// import ClientApi from '@/utils/client'

export default {
	name: 'alipayAdd',
	data () {
		return {
			alipay: {
				username: '',
				account: '',
				qrcode: ''
			}
		}
	},
	methods: {
		getQrCode () {
			if (!this.alipay.qrcode) {
				this.$toast('不能为空')
				return false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/parent.scss';

.parent-alipay-add {
	margin-top: 20px;
	.qr-code {
		display: flex;
		.van-cell {
			width: 100%;
		}
		.van-button {
			width: 268px;
			height: 88px;
		}
	}
	.info-tips {
		font-size: 28px;
		color: #818D9D;
		padding: 30px;
	}
}
</style>

<style lang="scss">
.parent-alipay-add {
	.van-cell__value {
		input {
			text-align: right;
			color: #818D9D;
		}
	}
	.van-field__label span {
		font-size: 34px;
	}
}
</style>
