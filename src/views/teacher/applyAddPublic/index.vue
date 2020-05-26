<template>
	<div class="apply-add-private">
		<van-cell-group title="收款账户信息">
			<van-cell title="账户类型" @click="feeAccountTypeHandler" is-link :value="applyPrivate.feeAccountType" />
			<van-cell title="银行卡开户名" :value="applyPrivate.schoolName" />
			<van-cell title="银行卡帐号" :value="applyPrivate.bankAccount" />
			<van-cell title="银行卡开户行" @click="bankNameHandler" is-link :value="applyPrivate.bankName" />
			<van-cell title="开户行所在地" @click="areaListHandler" is-link :value="applyPrivate.address" />
			<van-cell title="开户行支行" @click="bankBranchHandler" is-link :value="applyPrivate.bankBranch" />
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
		<van-cell-group title="事业单位法人证 (彩色扫描件或照片)" class="uploader-content-wrap">
			<van-field v-model="applyPrivate.number" label="事业单位法人证" class="number" :placeholder="`请输入事业单位法人证`" />
			<van-uploader>
				<div class="uploader-content">
					上传事业单位法人证
					<div class="img">
						<img src="/static/image/pay/openpay05.png" />
					</div>
				</div>
			</van-uploader>
		</van-cell-group>
        <van-cell-group title="法人身份证 (彩色扫描件或照片)" class="uploader-content-wrap">
			<van-field v-model="applyPrivate.number" label="法人姓名" class="number" :placeholder="`请输入法人姓名`" />
			<van-field v-model="applyPrivate.number" label="法人身份证号码" class="number" :placeholder="`请输入法人身份证号码`" />
			<van-uploader>
				<div class="uploader-content">
					上传身份证
					<div class="uploader-content-list">
						<div class="img">
							<img src="/static/image/pay/openpay03.png" />
						</div>
						<div class="img">
							<img src="/static/image/pay/openpay04.png" />
						</div>
					</div>
				</div>
			</van-uploader>
		</van-cell-group>
		<van-button type="Private" class="page-show-fixed-btn" @click="submitApply">提交申请</van-button>
	</div>
</template>

<script>
import {payApi} from '@/api/index'
// import ClientApi from '@/utils/client'

export default {
	name: 'applyAddPrivate',
	data () {
		return {
			applyPrivate: {
				feeAccountType: '',
				schoolName: '',
				bankAccount: '',
				bankName: '',
				address: '',
				bankBranch: '',
				number: ''
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
		let cellGroupTitle = document.querySelector('.van-cell-group__title')
		let oSpan = document.createElement('span')
		oSpan.innerHTML = '(仅支持法人银行卡账户/幼儿园对公账户)'
		oSpan.className = 'red'
		cellGroupTitle.appendChild(oSpan)
		this.getDataList()
	},
	methods: {
		getDataList () {
			payApi.teacherApplyInfo().then(res => {
				if (res.message === '成功') {
					for (let key in this.applyPrivate) {
						this.applyPrivate[key] = res.body[key]
					}
					if (+this.applyPrivate.schoolCreateType === 4 || +this.applyPrivate.schoolCreateType === 5 || +this.applyPrivate.schoolCreateType === 6 || +this.applyPrivate.schoolCreateType === 7) {
						this.applyPrivate.feeAccountType = '对公账号'
					} else {
						if (this.applyPrivate.feeAccountType) {
							if (+this.applyPrivate.feeAccountType === 1) {
								this.applyPrivate.feeAccountType = '对公账号'
							} else {
								this.applyPrivate.feeAccountType = '对私账号'
							}
						} else {
							this.applyPrivate.feeAccountType = '对私账号'
						}
					}
				}
			})
		},
		submitApply () {
			let params = Object.assign(this.applyPrivate)
			payApi.phoneCode(params).then(res => {
				if (res.returncode === 10000) {
					alert('提交成功')
				}
			})
		},
		bankBranchConfirm (val) {
			this.applyPrivate.bankBranch = val[0]['name']
			this.isbankBranch = false
		},
		bankBranchCancel () {
			this.applyPrivate.bankBranch = ''
			this.isbankBranch = false
		},
		bankBranchHandler () {
			this.isbankBranch = true
		},
		bankConfirm (val) {
			this.applyPrivate.bankName = val[0]['name']
			this.isBank = false
		},
		bankCancel () {
			this.applyPrivate.bankName = ''
			this.isBank = false
		},
		bankNameHandler () {
			this.isBank = true
		},
		feeAccountTypeConfirm (val) {
			this.applyPrivate.feeAccountType = val[0]['name']
			this.isfeeAccountType = false
		},
		feeAccountTypeCancel () {
			this.applyPrivate.feeAccountType = ''
			this.isfeeAccountType = false
		},
		feeAccountTypeHandler () {
			this.isfeeAccountType = true
		},
		areaConfirm (val) {
			this.applyPrivate.address = val.reduce((acc, curVal, curIndex) => {
				return acc + curVal.name
			}, '')
			this.isAreaList = false
		},
		areaCancel () {
			this.applyPrivate.address = ''
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

.apply-add-private {
	padding-bottom: 97px;
	.download-template {
		position: absolute;
		top: -54px;
		right: 34px;
		color: #42b8fc;
	}
	.uploader-content-list {
		display: flex;
		.img:last-child {
			margin-left: 10px;
		}
	}
	.uploader-content {
		margin: 35px;
		.img {
			width: 240px;
			height: 190px;
			img {
				width: 100%;
			}
		}
	}
}
</style>

<style lang="scss">
.apply-add-private {
	.number {
		.van-field__control {
			text-align: right;
			color: #818D9D;
		}
	}
}
</style>
