import {PAY_STATUS, PAY_CHANNEL} from '@/maps/constants'
/**
 * 分转元
 * @param {Number} price  价格
 */
export function priceStr(price) {
	return (price / 100).toFixed(2)
}
/**
 * 千分位
 * @param {Number} s  金额
 * @param {Number} type  判断格式化后的金额是否需要小数位.
 */
export function priceFormat(s, type) {
	if (s === null || s === '') {
		return '0.00'
	}
	s = s.toString().replace(/^(\d*)$/, '$1.')
	s = (s + '00').replace(/(\d*\.\d\d)\d*/, '$1')
	s = s.replace('.', ',')
	let re = /(\d)(\d{3},)/
	while (re.test(s)) {
		s = s.replace(re, '$1,$2')
	}
	s = s.replace(/,(\d\d)$/, '.$1')
	if (type === 0) {
		let a = s.split('.')
		if (a[1] === '00') {
			s = a[0]
		}
	}
	return s
}
/**
 * 支付状态
 * @param {Number} payStatus 支付状态
 * @param {Number} type  类型  1=收费 2=退费
 */
export function payStatusStr(payStatus, type) {
	return PAY_STATUS[type][payStatus]
}
/**
 * 支付渠道
 * @param {Number} payChannel 支付渠道
 */
export function payChannelStr(payChannel) {
	return PAY_CHANNEL[payChannel]
}
