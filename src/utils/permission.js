import router from '../router'
import store from '../store'
import {
	isOverdue
} from '../utils/utils'

router.beforeEach((to, from, next) => {
	if (to.path.includes('teacher')) {
		const authority = localStorage.getItem('authority')
		const startDate = localStorage.getItem('startDate')
		if (!authority || isOverdue(startDate)) {
			store.dispatch('authorityList').then(res => {
				localStorage.setItem('authority', JSON.stringify(res))
				localStorage.setItem('startDate', +new Date())
			})
			next()
		} else {
			store.dispatch('saveState', authority)
			next()
		}
	} else {
		next()
	}
	// to and from are both route objects
})
