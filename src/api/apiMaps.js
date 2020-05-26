const path = _path => _path

export const PAY = {
	PAYINFO: path('/index'), // 首页
	parentList: path('/fms/h5/parent/tuitionbillcharge/billList'), // 家长端-列表页
	parentBackList: path('/fms/h5/parent/tuitionbillcharge/list'), // 家长端-列表页
	parentDetails: path('/fms/h5/parent/tuitionbillcharge/detail'), // 家长端-详情页
	parentBackDetails: path('/fms/h5/parent/refund/detail'), // 家长端-退费详情页
	authorityList: path('/json/pay/teacher/authorityList.json'),
	bindAlipayStatus: path('/json/pay/parent/bindAlipayStatus.json'), // 检测绑定收款支付宝
	teacherApplyInfo: path('/json/pay/teacher/applyInfo.json'), // 掌通家园学费代缴服务协议
	applyAddInfoBankCity: path('/json/pay/teacher/bankCity.json'), // 省级联动
	phoneCode: path('/json/pay/parent/phoneCode.json'),
	backBillList: path('/json/pay/teacher/backBillList.json')
}
