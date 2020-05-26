import Mock from 'mockjs'
import * as ApiMaps from '@/api/apiMaps'
const baseUrl = 'http://localhost:8588'
// 帮助中心
export const IndexListMock = () => {
	Mock.mock(ApiMaps.PAY.PAYINFO, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		'body': {
			'data|5': [{
				'id|+1': 1,
				'title|1-5': '什么该怎么办',
				'isHot': '1'
			}],
			'groupName': '热门',
			'pageCount': '1',
			'pageNum': '1',
			'pageSize': '5',
			'total': '5'
		}
	})
	Mock.mock(`/json/pay/teacher/authorityList.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		body: {
			"account_balance": false,
			"account_balance_total": true,
			"charge_bill": true,
			"charge_bill_cancel_offline": true,
			"charge_bill_print": true,
			"account_balance_withdraw": true,
			"charge_bill_remind": true,
			"charge_bill_remind_self": true,
			"refund_bill": true,
			"charge_bill_offline": true,
			"charge_manage": true,
			"charges_statistics": true,
			"receipt_code": true,
			"charge_bill_cancellation": true
		}
	})
	Mock.mock(`/json/pay/parent/bindAlipayStatus.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		body: {
			"tip": "为了确保您能正常收到幼儿园的退款请先绑定收款支付宝账户",
        	"isBinding": false
		}
	})
	Mock.mock(`/json/pay/teacher/applyInfo.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		"body": {
			"body":{
				"auditStatus":0,
				"searchCountryCode":"111",
				"searchCountryName":"厦门",
				"searchCityCode":"111",
				"searchCityName":"厦门市",
				"searchProvinceCode":"111",
				"searchProvinceName":"思明区",
				"schoolAddress":"思明区",
				"schoolId":"123123",
				"schoolName":"思明文婷幼儿园",
				"schoolCreateType":"3",
				"contacts":"陈明",
				"contactMail":"zhuzhi@163.com",
				"contactsPhone":"13860456656",
				"provinceCode":"1",
				"provinceName":"厦门",
				"cityCode":"11",
				"cityName":"厦门市",
				"countryCode":"111",
				"countryName":"思明区",
				"companyAlipayAccount":"1ddd23@163.com",
				"feeAccountType":"1",
				"payAccountType":"0",
				"bankCardAccountName":"东明",
				"bankAccount":"646545646544465645",
				"idCardNo":"356554665446546564",
				"bankName":"工商银行",
				"bankNo":"564564546564",
				"bankBranch":"思明分行",
				"bankBranchNo":"65445",
				"bankBranchNo":"65445",
				"idCardFrontImgUrl":"65445",
				"idCardBackImgUrl":"54654654",
				"legalCertificateUrl":""
			},
			"message":"成功",
			"returncode":10000
		}
	})
	Mock.mock(`/json/pay/teacher/bankCity.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		"body": {
			"body":[{
					"value": "110000",
					"text": "北京市",
					"children": [{
						"value": "110100",
						"text": "北京市",
						"children": [{
							"value": "110101",
							"text": "东城区"
						},
						{
							"value": "110101",
							"text": "东城区"
						}]
					}]
				},
				{
					"value": "110000",
					"text": "北京市",
					"children": [{
						"value": "110100",
						"text": "北京市",
						"children": [{
							"value": "110101",
							"text": "东城区"
						},
						{
							"value": "110101",
							"text": "东城区"
						}]
					}]
				}],
			"message":"成功",
			"returncode":10000
		}
	})
	Mock.mock(`/json/pay/teacher/backBillList.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		"body": {
			"body":{
				"list":[
					{
						"id":1,
						"billDetailNum":1,
						"dataSourceType":1,
						"refundIntoTime":"2016年05月22日 11:24:41",
						"billName":"预收2018餐费",
						"refundStatus":1,
						"gradeName":"上忍班",
						"className":"班级",
						"studentName":"王文城",
						"features":"{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}",
						"refundAmount":500
					},
					{
						"id":2,
						"billDetailNum":2,
						"dataSourceType":1,
						"refundIntoTime":"2016年05月22日 11:24:41",
						"gradeName":"上忍班",
						"className":"班级",
						"studentName":"王文城",
						"billName":"预收2018餐费",
						"refundStatus":1,
						"features":"{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}",
						"refundAmount":500
					}
				],
				"hasMore":true
			},
			"message":"成功",
			"returncode":10000
		}
	})
	Mock.mock(`/json/pay/parent/phoneCode.json`, {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		"body": {
			"body": null,
			"message": "成功",
			"returncode": 10000
		}
	})
	Mock.mock(RegExp(ApiMaps.PAY.parentList), {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		'body': {
			'list|5': [{
				'createTime': '2018-02-02 10:00:00',
				'billDetailNum': 1545654546,
				'dataSourceType': 1,
				'pushTime': '2016年05月22日 11:24:41',
				'billName|1-5': '预收2018餐费',
				'payStatus': 0,
				'payStatusStr': '未缴费',
				'gradeName': '上忍班',
				'className': '班级',
				'stuedntName': '王文城',
				'features': '{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目收费项目收费项目收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}',
				'amount': 400000000
			}],
			'hasMore': true
		}
	})
	Mock.mock(RegExp(ApiMaps.PAY.parentBackList), {
		'returncode': 10000,
		'message': 'success',
		'total': '5',
		'body': {
			'list|5': [{
				'createTime': '2018-02-02 10:00:00',
				'billDetailNum': 1545654546,
				'dataSourceType': 1,
				'pushTime': '2016年05月22日 11:24:41',
				'billName|1-5': '退费预收2020餐费',
				'payStatus': 0,
				'payStatusStr': '未缴费',
				'gradeName': '上忍班',
				'className': '班级',
				'stuedntName': '王文城',
				'features': '{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目收费项目收费项目收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}',
				'amount': 400000000
			}],
			'hasMore': true
		}
	})
	Mock.mock(RegExp(ApiMaps.PAY.parentDetails), {
		'returncode': 10000,
		'message': 'success',
		'body': {
	    	"returnedAlipayNo":"dsfsdf@163.com",
	        "dataSourceType":1,
	        "pushTime":"2016年05月22日 11:24:41",
	        "billName":"预收2018餐费",
	        "billDetailNum":112223333,
	        "schoolName":"思明区文婷小学",
	        "gradeName":"大班",
	        "className":"大一班",
	        "studentName":"王文城",
	        "teacherName":"王明",
	        "backPayInfo":"说明",
	        "payStatus":0,
	        "payChannel":1,
	        "payerName":"13355**5554",
	        "payerId":"18065278271",
	        "payTime":"2018/04/15 15:00:01",
	        "features":"{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}",
	        "amount":500
	    }
	})
	Mock.mock(RegExp(ApiMaps.PAY.parentBackDetails), {
		'returncode': 10000,
		'message': 'success',
		'body': {
	    	"returnedAlipayNo":"dsfsdf@163.com",
	        "pushTime":"2016年05月22日 11:24:41",
	        "billName":"预收2018餐费",
	        "billDetailNum":112223333,
	        "schoolName":"思明区文婷小学",
	        "gradeName":"大班",
	        "className":"大一班",
	        "studentName":"王文城",
	        "teacherName":"王明",
	        "backPayInfo":"说明",
	        "refundStatus":2,
	        "refundChannel":1,
	        "returnTeacherName":"陈老师",
	        "returnRemark":"说明",
	        "features":"{\"payItems\":[{\"id\":1,\"payItem\":\"收费项目\",\"itemPrice\":2},{\"id\":2,\"payItem\":\"收费项目\",\"itemPrice\":2}]}",
	        "totalBalance":500
	    }
	})
}