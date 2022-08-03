import { fetchGoodList } from "@/utils/api";

const state = {
  goodlist: {},
  activeKey:0
};

const mutations = {
  setGood(state,{activeKey,good}){
    state.goodlist[activeKey] = good
    state.goodlist = JSON.parse(JSON.stringify(state.goodlist))
  },
  setActiveKey(state,num){  
    state.activeKey=num
  }
};

const actions = {
  getGood(store,{cate,activeKey}) {
    fetchGoodList({cate}).then(res=>{
      const data = {activeKey,good:res.data.list}
      store.commit('setGood',data)
    })
  },
};

export default {
  namespaced: true,
  state,
  mutations,  
  actions,
};
