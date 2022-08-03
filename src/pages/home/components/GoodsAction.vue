<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        v-login
        @click="goodAdd(info)"
      />
      <van-goods-action-button type="danger" text="立即购买" v-login />
    </van-goods-action>
  </div>
</template>

<script>
import { fetchCartAdd } from "@/utils/api";
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    goodAdd(item) {
      let data = {
        good_id: item._id,
        num: 1,
      };
      fetchCartAdd(data).then((res) => {
        console.log(res);
        if (res && res.err == 0) {
          this.$toast.success('添加购物车成功')
          this.$router.push("/cart");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>