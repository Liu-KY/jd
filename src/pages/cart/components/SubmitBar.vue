<template>
  <div>
    <van-submit-bar
      :price="cartPrice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import {fetchCartSubmit} from '@/utils/api'
export default {
  computed: {
    ...mapState("cart", ["cartList"]),
    ...mapGetters("cart", ["cartPrice"]),
    checked: {
      get() {
        if( !this.cartList.length ) return false
        return this.cartList.every((item) => {
          return item.checked;
        });
      },
      set(val) {
        this.setCheckeds(val);
      },
    },
    submit() {
      return this.cartList.some(item => item.checked);
    },
    ids(){
      return this.cartList.reduce((prev,next)=>{
        return prev+= next.checked ? `${next._id};` :''
      },'')
    }
  },
  methods: {
    ...mapMutations("cart", ["setCheckeds"]),
    ...mapActions('cart',['getCartList']),
    onSubmit() {
      if(!this.submit) return this.$toast.fail('请选择商品')
      fetchCartSubmit({ids:this.ids}).then(res=>{
        if(res && res.msg == 'success') {
          this.$toast.success('提交成功！')
          this.getCartList()
        }
      })
    },
    onClickEditAddress() {
      console.log("修改地址");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>