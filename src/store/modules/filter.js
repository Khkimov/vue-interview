export default {
    state: {
        variant: {
            country: '',
            score: ''
        },
        items:{
            country: ['Russia', 'USA'],
            score: ['More 20', 'Less 10']
        },
    },
    getters: {},
    mutations: {
        setVariant: (state, {key, val}) => state.variant[key] = val
    },
    actions: {}
}