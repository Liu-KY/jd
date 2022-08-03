<template>
  <div class="GoodSearch">
    <van-search
      shape="round"
      background="#c82519"
      :placeholder="Text"
      show-action
      disabled
    >
      <template #left>
        <van-image src="/icon/GSearchleft.png" class="letfimg" />
      </template>
      <template #action>
        <div v-if='!isToken'>登录</div>
        <div v-if='isToken'>我的</div>
      </template>
      <template #left-icon
        ><van-image src="/icon/JD.png" class="leftimg" /><i></i
        ><van-image src="/icon/magnify.png" class="rightimg"
      /></template>
    </van-search>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('user',['isToken']),
    Text() {
      const text = ["苹果手机", "小米手机", "华为手机"];

      return text[Math.floor(Math.random() * text.length)];
    },
  },
};
</script>
<style lang="scss" scoped>
.van-search {
  height: 1.1733rem;
  padding: 0;
  color: #757575;
  font-size: 0.16rem;
  .letfimg {
    width: 0.5333rem;
    height: 0.48rem;
    margin-right: 0.48rem;
    text-align: center;
    margin: 0 0.4rem 0 0.3333rem;
  }
  .van-search__action {
    color: #fff;
    margin-left: 0.1333rem;
    height: 1.1733rem;
    line-height: 1.1733rem;
  }
  .van-search__content {
    padding-left: 0;
  }
  .van-cell {
    height: 0.8rem;
    padding: 0;
    width: 7.28rem;
    line-height: 0.8rem;
  }
  .van-field__body {
    height: 100%;
    .van-field__control {
      height: 100%;
      line-height: 0.8rem;
    }
  }
  i {
    content: "";
    border-right: 1px solid #ddd;
    height: 0.4rem;
    position: absolute;
    top: 0.2rem;
  }
}
</style>

<style lang="scss" >
.GoodSearch {
  .van-field__control {
    font-size: 12px;
  }
  .van-field__left-icon {
    .leftimg {
      margin: 0.2133rem 0.2133rem 0 0.4rem;
    }
    .van-image__img {
      width: 0.5333rem;
      height: 0.4rem;
    }
    .rightimg {
      margin: 0 0 0 0.2133rem;
      width: 0.48rem;
      height: 0.4rem img {
        margin-top: 0.0667rem;
      }
    }
  }
}
</style>