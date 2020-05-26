<template>
	<div class="apply-add-info">
		<div class="tips-pres-wrap">
			<div class="tips-pess">
				<div class="tips-pess-l">
					<i>1</i>
					<p>学校信息</p>
				</div>
				<div class="tips-pess-r">
					<i>2</i>
					<p>结算账户信息</p>
				</div>
			</div>
			<em class="info-line"></em>
		</div>
		<van-cell-group title="收款账户信息">
			<van-cell title="账户类型" @click="feeAccountTypeHandler" is-link :value="applyInfo.feeAccountType" />
			<van-cell title="银行卡开户名" :value="applyInfo.schoolName" />
			<van-cell title="银行卡帐号" :value="applyInfo.bankAccount" />
			<van-cell title="银行卡开户行" @click="bankNameHandler" is-link :value="applyInfo.bankName" />
			<van-cell title="开户行所在地" @click="areaListHandler" is-link :value="applyInfo.address" />
			<van-cell title="开户行支行" @click="bankBranchHandler" is-link :value="applyInfo.bankBranch" />
		</van-cell-group>
		<van-popup v-model="isfeeAccountType" position="bottom">
			<van-area :area-list="feeAccountTypeList" columns-num="1" @cancel="feeAccountTypeCancel" @confirm="feeAccountTypeConfirm" />
		</van-popup>
		<van-popup v-model="isBank" position="bottom">
			<van-area :area-list="bankList" columns-num="1" @cancel="bankCancel" @confirm="bankConfirm" />
		</van-popup>
		<van-popup v-model="isAreaList" position="bottom">
			<van-area :area-list="areaList" @cancel="areaCancel" @confirm="areaConfirm" />
		</van-popup>
		<van-popup v-model="isbankBranch" position="bottom">
			<van-area :area-list="bankBranchList" columns-num="1" @cancel="bankBranchCancel" @confirm="bankBranchConfirm" />
		</van-popup>
		<van-button type="info" class="page-show-fixed-btn" @click="submitApply">提交申请</van-button>
	</div>
</template>

<script>
import {payApi} from '@/api/index'
// import ClientApi from '@/utils/client'

export default {
	name: 'applyAddInfo',
	data () {
		return {
			applyInfo: {
				feeAccountType: '',
				schoolName: '',
				bankAccount: '',
				bankName: '',
				address: '',
				bankBranch: ''
			},
			isAreaList: false,
			isfeeAccountType: false,
			isBank: false,
			isbankBranch: false,
			feeAccountTypeList: {
				province_list: {
					110000: '对公账号',
					120000: '对私账号'
				}
			},
			bankList: {
				province_list: {
					110000: '工商银行',
					120000: '招商银行'
				}
			},
			areaList: {
				province_list: {
					110000: '北京市',
					120000: '天津市'
				},
				city_list: {
					110100: '北京市',
					110200: '县',
					120100: '天津市',
					120200: '县'
				},
				county_list: {
					110101: '东城区',
					110102: '西城区',
					110105: '朝阳区',
					110106: '丰台区',
					120101: '和平区',
					120102: '河东区',
					120103: '河西区',
					120104: '南开区',
					120105: '河北区'
				}
			},
			bankBranchList: {
				province_list: {
					110000: '思明分行',
					120000: '湖里支行'
				}
			}
		}
	},
	mounted () {
		this.getDataList()
	},
	methods: {
		getDataList () {
			payApi.teacherApplyInfo().then(res => {
				if (res.message === '成功') {
					for (let key in this.applyInfo) {
						this.applyInfo[key] = res.body[key]
					}
					if (+this.applyInfo.schoolCreateType === 4 || +this.applyInfo.schoolCreateType === 5 || +this.applyInfo.schoolCreateType === 6 || +this.applyInfo.schoolCreateType === 7) {
						this.applyInfo.feeAccountType = '对公账号'
					} else {
						if (this.applyInfo.feeAccountType) {
							if (+this.applyInfo.feeAccountType === 1) {
								this.applyInfo.feeAccountType = '对公账号'
							} else {
								this.applyInfo.feeAccountType = '对私账号'
							}
						} else {
							this.applyInfo.feeAccountType = '对私账号'
						}
					}
				}
			})
		},
		submitApply () {
			let params = Object.assign(this.applyInfo)
			payApi.phoneCode(params).then(res => {
				if (res.returncode === 10000) {
					alert('提交成功')
				}
			})
		},
		bankBranchConfirm (val) {
			this.applyInfo.bankBranch = val[0]['name']
			this.isbankBranch = false
		},
		bankBranchCancel () {
			this.applyInfo.bankBranch = ''
			this.isbankBranch = false
		},
		bankBranchHandler () {
			this.isbankBranch = true
		},
		bankConfirm (val) {
			this.applyInfo.bankName = val[0]['name']
			this.isBank = false
		},
		bankCancel () {
			this.applyInfo.bankName = ''
			this.isBank = false
		},
		bankNameHandler () {
			this.isBank = true
		},
		feeAccountTypeConfirm (val) {
			this.applyInfo.feeAccountType = val[0]['name']
			this.isfeeAccountType = false
		},
		feeAccountTypeCancel () {
			this.applyInfo.feeAccountType = ''
			this.isfeeAccountType = false
		},
		feeAccountTypeHandler () {
			this.isfeeAccountType = true
		},
		areaConfirm (val) {
			this.applyInfo.address = val.reduce((acc, curVal, curIndex) => {
				return acc + curVal.name
			}, '')
			this.isAreaList = false
		},
		areaCancel () {
			this.applyInfo.address = ''
			this.isAreaList = false
		},
		areaListHandler () {
			this.isAreaList = true
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/parent.scss';

.apply-add-info {
	.tips-pres-wrap {
		position: relative;
		.info-line {
			display: inline-block;
			width: 280px;
			height: 2px;
			background: #00AAFF;
			position: absolute;
			left: 50%;
			top: 70px;
			transform: translate(-50%);
		}
	}
	.tips-pess {
		background: #fff;
		display: flex;
		padding: 32px 0;
		justify-content: space-around;
		text-align: center;
		> div {
			text-align: center;
		}
		p {
			color: #00AAFF;
		}
		i {
			display: inline-block;
			width: 50px;
			height: 50px;
			font-style: normal;
			background: url('../../../assets/images/no1_blue.png');
			background-size: cover;
			color: #fff;
		}
	}
}
</style>
