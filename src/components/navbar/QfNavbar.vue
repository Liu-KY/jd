<template>
  <div class="QfNavbar">
    <van-nav-bar left-text="返回" right-text="按钮" left-arrow>
      <template #left>
        <van-image src="/icon/right-arr.png" class="leftImg" @click="$router.back()" />
      </template>
      <template #title>
        <slot>
          <van-search disabled placeholder="签字笔" />
        </slot>
      </template>
      <template #right>
        <slot name="NavbarR">
          <van-image src="/icon/dot.png" class="rightImg" />
        </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {};
</script>



<style lang="scss">
.QfNavbar {
  .van-nav-bar__left {
    width: 1.0667rem;
    padding: 0;
    height: 1.1733rem;
    justify-content: center;
    .van-image__img {
      width: 0.5333rem;
      height: 0.5333rem;
    }
  }
  .van-nav-bar__title {
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    max-width: 78%;
    border-radius: 0.8rem;
    height: 0.8rem;

    align-items: center;

    .van-search {
      width: 8.8533rem;
      padding: 0;
      .van-icon {
        color: #bfbfbf;
      }
    }
  }
  .van-nav-bar__right {
    width: 1.0667rem;
    height: 1.1733rem;
    padding: 0;
    justify-content: center;
    .rightImg {
      width: 0.5333rem;
      height: 0.5333rem;
      line-height: 0.5333rem;
      .van-image__img {
        height: 0.16rem;
        display: inline-block;
      }
    }
  }
}
</style>