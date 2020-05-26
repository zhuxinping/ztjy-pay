import Vue from 'vue'
import Router from 'vue-router'
import pay from './pay'
const routes = [...pay]

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		...routes
	]
})
