<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item v-for="item in newTabRoutes" :key="item.id" :to="item.path">
      <template #icon="{ active }">
        <img
          :src="`${item.src}${active ? '-on' : ''}.png`"
          alt=""
          class="tabbarImg"
        />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { tabRoutes } from "@/router";
import { mapGetters } from 'vuex';
export default {
  mounted(){
    console.log(this.active);
  },
  computed:{
    ...mapGetters('user',['isToken']),
    newTabRoutes(){
      let length = this.tabRoutes.length-1
      let arr = this.tabRoutes
      if(this.isToken) arr[length].src = "/icon/userTo"
      else arr[length].src = "/icon/user"
      return arr
    }
  },
  watch:{
    Token(){
      console.log('改变了');
    }
  },
  data() {
    return {
      active: 0,
      tabRoutes,
    };
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  box-shadow: -1px -1px 3px #888888;
}
.tabbarImg {
  width: 1.6rem;
  height: 1.2rem;
}
</style>