const _import = require('./_import_' + process.env.NODE_ENV)
const Index = _import('Index')

export default [
	{
		path: '/',
		name: 'index',
		component: Index,
		meta: '首页'
	}, {
		path: '/teacher/applyIndex',
		name: 'applyIndex',
		component: _import('teacher/applyIndex/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAdd',
		name: 'applyAdd',
		component: _import('teacher/applyAdd/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAddPic',
		name: 'applyAddPic',
		component: _import('teacher/applyAddPic/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAddOtPic',
		name: 'applyAddOtPic',
		component: _import('teacher/applyAddOtPic/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyStatus',
		name: 'applyStatus',
		component: _import('teacher/applyStatus/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAddInfo',
		name: 'applyAddInfo',
		component: _import('teacher/applyAddInfo/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAddPrivate',
		name: 'applyAddPrivate',
		component: _import('teacher/applyAddPrivate/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/applyAddPublic',
		name: 'applyAddPublic',
		component: _import('teacher/applyAddPublic/index'),
		meta: '申请开通收费管理'
	}, {
		path: '/teacher/backBillDetails',
		name: 'backBillDetails',
		component: _import('teacher/backBillDetails/index'),
		meta: '退费账单记录'
	}, {
		path: '/teacher/backBillList',
		name: 'backBillList',
		component: _import('teacher/backBillList/index'),
		meta: '退费管理'
	}, {
		path: '/teacher/billDetails',
		name: 'billDetails',
		component: _import('teacher/billDetails/index'),
		meta: '账单详情'
	}, {
		path: '/teacher/bankList',
		name: 'bankList',
		component: _import('teacher/bankList/index'),
		meta: '收费账单'
	}, {
		path: '/teacher/aliOauthSur',
		name: 'aliOauthSur',
		component: _import('teacher/aliOauthSur/index'),
		meta: '授权成功'
	}, {
		path: '/teacher/accountThaw',
		name: 'accountThaw',
		component: _import('teacher/accountThaw/index'),
		meta: '账户解冻'
	}, {
		path: '/teacher/agreement',
		name: 'agreement',
		component: _import('teacher/agreement/index'),
		meta: '掌通家园学费代缴服务协议'
	}, {
		path: '/teacher/billList_v1',
		name: 'billList_v1',
		component: _import('teacher/billList_v1/index'),
		meta: '查看账单'
	}, {
		path: '/parent/billList',
		name: 'parentBillList',
		component: _import('parent/billList/index'),
		meta: 'parent - 园所缴费'
	}, {
		path: '/parent/billDetails',
		name: 'parentBillDetails',
		component: _import('parent/billDetails/index'),
		meta: 'parent - 账单详情'
	}, {
		path: '/parent/backBillDetails',
		name: 'parentBackBillDetails',
		component: _import('parent/backBillDetails/index'),
		meta: 'parent - 退费账单记录'
	}, {
		path: '/parent/oldBillList',
		name: 'parentOldBillList',
		component: _import('parent/oldBillList/index'),
		meta: 'parent - 缴退费记录'
	}, {
		path: '/parent/alipayAdd',
		name: 'parentAlipayAdd',
		component: _import('parent/alipayAdd/index'),
		meta: 'parent - 绑定支付宝账号'
	}
]
