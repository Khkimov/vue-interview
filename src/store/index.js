import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import filter from '@/store/modules/filter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        filter
    }
})