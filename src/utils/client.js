import dsbridge from 'dsbridge'
const namespace = dsbridge.call('getNameSpace')
export default {
	/**
	 * 获取URL参数
	 * @param {String} name  参数值
	 * @param {Boolean} notDecoded  是否URL解码
	 */
	getUrl (name, notDecoded) {
		let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
		let	results = regex.exec(location.search)
		let	encoded = null
		if (results === null) {
			return ''
		} else {
			encoded = results[1].replace(/\+/g, ' ')
			if (notDecoded) {
				return encoded
			}
			return decodeURIComponent(encoded)
		}
	},
	// 用户信息
	getUserInfo (callback) {
		dsbridge.call(namespace + '.getUserInfo', val => {
			callback && callback(val)
		})
	},
	// 跳转
	jumpTo (params, callback) {
		dsbridge.call(namespace + '.jumpTo', params, val => {
			callback && callback(val)
		})
	},
	/**
	 * 埋点统计
	 * @param {Number} type   1=页面埋点  2=事件埋点
	 * @param {Object} params   参数对象
	 */
	onStatisticEvent (type, params) {
		let arr = {
			event: 'sdo_bfn_pv',
			um: {}
		}
		if (type === 2) {
			arr.event = 'sdo_bfn_event'
			arr.um.eventid = params.event_id
		} else {
			arr.um.eventid = params.page
		}
		dsbridge.call(namespace + '.onStatisticEvent', JSON.stringify({
			event: arr.event,
			data: params
		}), () => {})
		if (params.parm) {
			arr.um.para = params.parm
		}
		dsbridge.call(namespace + '.onUmengEvent', JSON.stringify(arr.um), () => {})
	},
	// 后退回调
	autoRefreshCallback (callback) {
		dsbridge.register(namespace + '.autoRefreshCallback', val => {
			callback && callback(val)
		})
	},
	// 切换班级回调
	changeClass (callback) {
		dsbridge.register(namespace + '.changeClass', val => {
			callback && callback(val)
		})
	},
	// 筛选回调
	openFilter (callback) {
		dsbridge.register(namespace + '.openFilter', val => {
			callback && callback(val)
		})
	},
	namespaces: namespace
}
