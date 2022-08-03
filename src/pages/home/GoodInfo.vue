<template>
  <div class="goodinfo">
    <NoticeBar />
    <QfNavbar>
      <div></div>
    </QfNavbar>
    <van-image :src="info.img" />
    <div v-if='show'>{{ info.price | Rmb }}</div>
    <div v-if='show'>{{ info.name }}</div>
    <GoodsAction :info='info'/>
  </div>
</template>

<script>
import NoticeBar from "./components/NoticeBar.vue";
import { QfNavbar } from "@/components/index";
import GoodsAction from './components/GoodsAction.vue'
import {fetchGoodInfo} from '@/utils/api'
export default {
  // props:{
  //   img:{type:String,default:''},
  //   name:{type:String,default:''},
  //   price:{type:Number,default:0},
  // },
  data(){
    return{
      info:{},
      show:false
    }
  },
  components: {
    NoticeBar,
    QfNavbar,
    GoodsAction
  },
  computed: {
    // img() {
    //   return this.$router.currentRoute.query.img;
    // },
    // name() {
    //   return this.$router.currentRoute.query.name;
    // },
    // price() {
    //   return this.$router.currentRoute.query.price;
    // },
    id(){ 
      return this.$router.currentRoute.query.id
    }
  },
  mounted() {
    fetchGoodInfo({id:this.id}).then(res=>{
      this.info=res.data.info,
      this.show=true
    })
  },
};
</script>
<style lang="scss">
.goodinfo {
  .QfNavbar {
    position: fixed;
    height: 1.0667rem;
    width: 100%;
    z-index: 10;
    background: transparent;
    .van-nav-bar {
      background: transparent;
    }
  }
}
</style>
<style lang="scss" scoped>
.goodinfo {
  font-size: 0.4rem;
  .van-image {
    width: 100%;
  }
}
</style>