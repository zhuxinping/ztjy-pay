import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import permission from './modules/permission'
// import CopyUser from './modules/help'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		// CopyUser,
		User,
		permission
	}
})
