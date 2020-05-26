export function isOverdue(startDate) {
	let returnV = false
	const startTime = new Date(startDate).getTime() // 开始时间
	const nowTime = new Date().getTime() // 结束时间
	const timeNum = (nowTime - startTime) / 1000 // 时间差的秒数

	if (timeNum > 300) {
		returnV = true
	}
	return returnV
}

// 过滤一维对象中值为空
export function filterObjValNil (objParams) {
	if (objParams) return Object.create({})

	/* eslint-disable */
	const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]])
	const objectFromPairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {})
	/* eslint-enable */

	let t = objectToPairs(objParams)
	t = t.filter(item => {
		if (`${item[1]}` === '0' || item[1]) return item
	})
	return objectFromPairs(t)
}

// [], {} // 空数组，空对象
export function isNone (val) {
	return val !== null && typeof val === 'object' && Object.keys(val).length === 0
}

// 0, -0, '', false, null, undefined, 0.00 // 否定
export function isNot (val) {
	return (val === null && typeof val === 'object') || !val
}

// UID
export function uid () {
	return Date.parse(new Date()).toString() + Math.random() * Math.pow(10, 16)
}
