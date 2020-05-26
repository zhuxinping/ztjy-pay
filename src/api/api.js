import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

const instance = axios.create({
	timeout: 15000
})

const API = {
	get (url, params) {
		return new Promise((resolve, reject) => {
			instance.get(url, params).then((response) => {
				// Indicator.close()
				if (response.data.returncode === 10000) {
					resolve(response.data.body)
				} else {
					Toast(response.data.message)
					reject(response)
				}
			}).catch((error) => {
				Toast('服务器异常')
				// Indicator.close()
				reject(error)
			})
		})
	},
	post (url, params) {
		return new Promise((resolve, reject) => {
			instance.post(url, params).then((response) => {
				// Indicator.close()
				if (response.data.returncode === 10000) {
					resolve(response.data.body)
				} else {
					Toast(response.data.message)
					reject(response)
				}
			}).catch((error) => {
				Toast('服务器异常')
				// Indicator.close()
				reject(error)
			})
		})
	}
}

export { API }
