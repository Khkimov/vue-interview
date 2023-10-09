import {usersApi} from '@/usersJson'
import store from '@/store'

export default {
    state: {
        users: usersApi,
        loading: false
    },
    getters: {
        getFilterUsers(state) {
            const {country, score} = store.state.filter.variant
            let items = state.users
            if(country){
                items = items.filter(item=> item.country === country)
            }
            if(score){
                items = items.filter(item=> score === 'More 20' ? item.score > 20 : item.score < 10 )
            }
            return items
        }
    },
    mutations: {
        setUser: (state, val)=> state.users.push(val),
        setLoading: (state, val)=> state.loading = val
    },
    actions: {
        async getUsersAction({commit}) {
            commit('setLoading', true)
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/users?limit=5')
                const data = await response.json()

                for (const item of data) {
                    commit('setUser', {
                        to: item.name,
                        avatar: item.avatar,
                        title: item.password,
                        subtitle: item.email,
                        score: Math.floor(Math.random() * 25),
                        country: 'USA',
                        showAddress: false,
                        address: [
                            {
                                city: 'Minneapolis',
                                street: '3887 Lodgeville Road'
                            }
                        ]
                    })
                }
            } catch (error) {
                console.log(error)
            } finally {
                commit('setLoading', false)
            }
        }
    }
}