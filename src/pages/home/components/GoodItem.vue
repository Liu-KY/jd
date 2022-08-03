<template>
  <div class="gooditem" @click="jump(item)">
    <div>
      <van-image :src="`http://localhost:9999${item.img}`" />
      <div v-text="item.name"></div>
      <div>{{ item.price | Rmb }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object, default: () => {} },
  },
  methods: {
    jump(item) {
      // const {name,img,price} = item
      const id = item._id;
      this.$router.push({ name: "info", query: { id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.gooditem {
  box-sizing: border-box;
  padding: 0.1333rem;
  align-content: center;
  width: 5.36rem;
  height: 7.7067rem;
  //   border: 1px solid red;
  font-size: 0.4rem;
  & > div {
    overflow: hidden;
    height: 100%;
    background: #fff;
    border-radius: 0.2667rem;
  }
  .van-image {
    width: 4.5333rem;
    height: 4.5333rem;
    img {
      width: 100%;
    }
  }
}
</style>