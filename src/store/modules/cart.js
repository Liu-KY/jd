import { fetchCartList} from "@/utils/api";

const state = {
  cartList: [],
};

const getters = {
  cartPrice(state) {
    let arr = state.cartList;
    return arr.reduce((prev, next) => {
      return (prev += next.checked ? next.num * next.good_info.price *100 : 0);
    }, 0);
  },
};

const mutations = {
  setCartList(state, arr) {
    state.cartList = arr;
  },
  setChecked(state, { index, checked }) {
    state.cartList[index].checked = checked;
  },
  spliceCartList(state, index) {
    state.cartList.splice(index, 1);
  },
  setCheckeds(state,checked){
    state.cartList.forEach(item=> item.checked = checked)
  },
  setGoodNum(state,{index,num}){
      state.cartList[index].num = num
  }
};

const actions = {
  getCartList(store) {
    fetchCartList().then((res) => {
      let arr = res.data.list;
      arr.forEach((item) => {
        item.checked = +new Date() - item.create_time < 1000 * 60;
      });
      store.commit("setCartList", arr);
    });
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
