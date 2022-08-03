// import fetch from '../utils/fetch'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import good from './modules/good'
import user from './modules/user'
import cart from './modules/cart'
const store = new Vuex.Store({
    modules: {good,user,cart}
})


export default store