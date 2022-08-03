<template>
  <div class="Topadd">
    <van-notice-bar color="#262626" background="#fff">
      <template #left-icon>
        <van-image
          class="land"
          src="https://jstatic.3.cn/static/icon_location_jd@2x.9ca2376c.png"
        />
      </template>
      <template>
        <div v-text="add"></div>
      </template>
      <template #right-icon>
        <div class="rightCart">编辑商品</div>
      </template>
    </van-notice-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add: "朝阳区三环到四环之间",
    };
  },
};
</script>

<style lang="scss" scoped >
.Topadd {
  margin-bottom: 0.3467rem;
  .van-notice-bar {
    height: 1.4667rem;
    padding: 0 0.5333rem;
      box-sizing: border-box;
    border-radius: 0 0 0.2667rem 0.2667rem;
    .van-notice-bar__wrap::after {
      background: #bfbfbf;
      content: "";
      height: 0.3rem;
      margin-top: -0.25rem;
      position: absolute;
      right: 0;
      top: 56%;
      width: 1px;
    }
    .land {
      margin-right: 0.2133rem;
      width: 0.32rem;
      height: 0.32rem;
    }
    .rightCart {
      margin-left: 0.5333rem;
    }
  }
}
</style>