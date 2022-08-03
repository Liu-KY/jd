<template>
  <div class="swipe">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img v-lazy="item.src" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.swipe {
  width: 100%;
  .van-swipe {
    height: 3.7333rem;
    width: 9.3333rem;
    margin: 0 auto; 
    img{
      width: 100%;
      height: 100%;
      border-radius: .1333rem;
    }
  }
}
</style>