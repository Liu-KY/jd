<template>
  <div>
    <h1>我的</h1>
    <van-button round block type="info" native-type="submit" color="#f81000" @click='quit'
      >退出登录</van-button
    >
    <QfTabbar />
  </div>
</template>

<script>
import { QfTabbar } from "@/components";
import { mapMutations } from 'vuex';
export default {
  methods:{
    ...mapMutations('user',['remToken']),
    quit(){
      sessionStorage.removeItem('token')
      this.remToken()
      this.$router.push('/home')
    }
  },
  components: {
    QfTabbar,
  },
};
</script>

<style lang="scss" scoped>
</style>