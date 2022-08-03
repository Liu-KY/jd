<template>
  <van-notice-bar background="#333333" color="#fff" v-if="show">
    <template #left-icon
      ><div class="close" @click="show=false">X</div></template
    >
    <template>
      <div class="noticediv">
        <div class="leftdiv">
          <img
            src="//img11.360buyimg.com/jdphoto/s80x80_jfs/t27847/91/107794072/6854/14716732/5b850ecaN644d2983.png"
            alt=""
            class="NoticeImg"
          />
        </div>
        <div class="Nptocediv">打开京东App,购物更轻松</div>
      </div>
    </template>
    <template #right-icon><div class="open">立即打开</div></template>
  </van-notice-bar>
</template>

<script>
export default {
  data() {
    return {
      show:
        sessionStorage.getItem("closeBar") == null
          ? true
          : JSON.parse(sessionStorage.getItem("closeBar")),
    };
  },
  watch: {
    show() {
      sessionStorage.setItem("closeBar", this.show);
    },
  },
};
</script>

<style lang="scss" >
.van-notice-bar {
  width: 100%;
  height: 1.2rem;
  padding-left: 0;
  padding-right: 0;
}
.van-notice-bar__content {
  width: 100%;
}
</style>

<style lang="scss" scoped>
.close {
  width: 0.8rem;
  text-align: center;
  height: 1.2rem;
  line-height: 1.2rem;
  color: #a0a0a0;
}
.open {
  width: 2.48rem;
  background: #f63515;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
}
.noticediv {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.leftdiv {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1.2rem;
}
.NoticeImg {
  line-height: 0.6rem;
  width: 0.8rem;
  height: 0.8rem;
}
.Nptocediv {
  display: inline-block;
  width: 5.68rem;
  line-height: 1.2rem;
  text-align: center;
}
</style>