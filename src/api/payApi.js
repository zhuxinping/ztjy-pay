import { API } from './api'
import { PAY } from './apiMaps'
export default {
	payInfo (params, callback) {
		return API.post(PAY.PAYINFO, params)
	},
	parentList (params, callback) {
		return API.get(PAY.parentList, params)
	},
	parentBackList (params, callback) {
		return API.get(PAY.parentBackList, params)
	},
	parentDetails (params, callback) {
		return API.get(PAY.parentDetails, params)
	},
	parentBackDetails (params, callback) {
		return API.get(PAY.parentBackDetails, params)
	},
	isAuthority (callback) {
		return API.get(PAY.authorityList, {})
	},
	bindAlipayStatus (params = {}, callback) {
		return API.get(PAY.bindAlipayStatus, params)
	},
	teacherApplyInfo (params = {}, callback) {
		return API.get(PAY.teacherApplyInfo, params)
	},
	applyAddInfoBankCity (params = {}, callback) {
		return API.get(PAY.applyAddInfoBankCity, params)
	},
	phoneCode (params = {}, callback) {
		return API.get(PAY.phoneCode, params)
	},
	backBillList (params = {}, callback) {
		return API.get(PAY.backBillList, params)
	}
}
