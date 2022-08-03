const state = {
    token:sessionStorage.getItem('token')
}

const mutations = {
    setToken(state,token){
        state.token=token
    },
    remToken(state){
        state.token=''
    }
}

const getters = {
    isToken(state){
        return Boolean(state.token)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    getters,
}