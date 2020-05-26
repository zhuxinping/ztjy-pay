import ClientApi from '@/utils/client.js'

const User = {
	// namespaced: true,
	state: {
		userInfo: {}
	},

	getters: {
		getUserInfo (state) {
			return state.userInfo
		}
	},

	mutations: {
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = userInfo
		}
	},

	actions: {
		getUserInfo ({ commit }) {
			return new Promise((resolve, reject) => {
				// 获取用户信息
				ClientApi.getUserInfo(res => {
					let userInfo = JSON.parse(res)
					commit('SET_USERINFO', userInfo)
					resolve(userInfo)
				})
			})
		}
	}
}
export default User
