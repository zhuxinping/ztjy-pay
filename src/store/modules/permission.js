import payApi from '@/api/payApi'

const permission = {
	// namespaced: true,
	state: {
		authority: { // 权限管控
			charges_statistics: false, // 收费统计
			account_balance: false, // 账户余额
			account_balance_withdraw: false, // 提现
			receipt_code: false, // 收款码
			charge_bill: false, // 收费账单
			charge_bill_remind: false, // 催缴
			charge_bill_cancellation: false, // 作废
			charge_bill_offline: false, // 线下收费
			charge_bill_cancel_offline: false, // 取消线下收费
			charge_bill_print: false, // 打印
			refund_bill: false // 退费账单
		}
	},

	mutations: {
		SET_STATE: (state, data) => {
			Object.assign(state, data)
		}
	},

	actions: {
		authorityList({commit}) {
			return new Promise((resolve, reject) => {
				// 获取用户信息
				payApi.isAuthority().then(res => {
					let userInfo = JSON.parse(JSON.stringify(res))
					commit('SET_STATE', userInfo)
					resolve(userInfo)
				})
			})
		},
		saveState({ commit }, data) {
			commit('SET_STATE', data)
		}
	}
}
export default permission
