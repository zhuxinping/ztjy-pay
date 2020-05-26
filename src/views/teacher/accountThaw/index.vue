<template>
	<div class="teacher-account-thaw">
		<div>
			<van-cell-group>
				<van-field v-model="account.username" label="财务人员姓名" placeholder="请输入完整的朱**的姓名" />
				<van-field v-model="account.tel" label="手机号码" :placeholder="`请输入完整的手机号码`" />
				<div class="qr-code">
					<van-field v-model="account.qrcode" label="验证码" placeholder="请输入验证码" />
					<van-button type="info" @click.native="getQrCode">获取验证码</van-button>
				</div>
			</van-cell-group>
		</div>

		<van-button type="info" class="page-show-fixed-btn" @click="accountNext">下一步</van-button>
	</div>
</template>

<script>
// import {payApi} from '@/api/index'
// import ClientApi from '@/utils/client'

export default {
	name: 'accountThaw',
	data () {
		return {
			account: {
				username: '',
				account: '',
				qrcode: ''
			}
		}
	},
	methods: {
		getQrCode () {
			if (!this.account.tel) {
				this.$toast('请输入手机号')
				return false
			}
			if (!/^1\d{10}$/.test(this.account.tel)) {
				this.$toast('请输入正确手机号')
				return false
			}
			if (this.account.qrcode < 4) {
				this.$toast('验证码不正确，请重新输入')
				return false
			}
		},
		accountNext () {
			if (!this.account.username) {
				this.$toast('请输入财务人员姓名')
				return false
			}
			if (!this.account.tel) {
				this.$toast('请输入手机号')
				return false
			}
			if (!/^1\d{10}$/.test(this.account.tel)) {
				this.$toast('手机号码不正确，请重新输入')
				return false
			}
			if (!this.account.qrcode) {
				this.$toast('请输入验证码')
				return false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/parent.scss';

.teacher-account-thaw {
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
		font-size: 21px;
		color: #818D9D;
		padding: 23px;
	}
}
</style>

<style lang="scss">
.teacher-account-thaw {
	.van-cell__value input {
		text-align: right;
		padding-right: 4px;
		color: #818D9D;
		font-size: 28px;
	}
}
</style>
