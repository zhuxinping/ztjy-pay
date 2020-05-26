import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
import {payMock} from '@/mock/index'
import * as filters from './filters' // global filters
import './assets/css/my-vant.scss'
import './utils/permission'
import './components/useElement'

payMock.IndexListMock()
FastClick.attach(document.body)

Vue.use(VueRouter)
Vue.use(Vuex)

const loadingImg = require('./assets/images/lazyload/default.jpg')
const errorImg = require('./assets/images/lazyload/error.png')
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: errorImg,
	loading: loadingImg,
	try: 3
})

Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
