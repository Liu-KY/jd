import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant';
Vue.config.productionTip = false;
import 'vant/lib/index.css';
import {Lazyload} from 'vant';
Vue.use(Vant);
Vue.use(Lazyload)

Vue.directive('login',(el)=>{
  el.style.position='realative'
  const oDiv = document.createElement('div')
  oDiv.style.position = 'absolute'
  oDiv.style.top = 0
  oDiv.style.bottom = 0
  oDiv.style.left = 0
  oDiv.style.right = 0
  oDiv.style.zIndex = 9999
  oDiv.addEventListener('click',()=> router.push('/login'))
  if(!store.getters['user/isToken']) el.appendChild(oDiv)
})
Vue.filter('Rmb',val=>`￥${val}元` )
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
