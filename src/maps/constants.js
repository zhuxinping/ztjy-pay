// 全局常量
export const USER_TOKEN = 'Admin-Token'

// 支付状态
export const PAY_STATUS = {
	1: ['未缴费', '已缴费'],
	2: ['未退费', '退费中', '已退费', '退费失败']
}

// 支付渠道
export const PAY_CHANNEL = {
	1: '支付宝',
	2: '微信',
	3: '银行转账',
	4: '现金支付',
	5: 'POS机支付',
	6: '支付宝转账',
	7: '微信转账'
}

export const NAMESPACE_MAPS = {
	parent: '1',
	gardener: '2'
}
// 域名
export const CURR_HOST = window.location.origin
