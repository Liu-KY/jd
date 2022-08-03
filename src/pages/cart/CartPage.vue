<template>
  <div class="CartPage">
    <QfNavbar>
      <template> <div class="gwc">购物车</div> </template></QfNavbar
    >
    <TopAdd />
    <EmptyCart v-if='!cartList.length'/>
    <CardDet/>
    <SubmitBar />
  </div>
</template>

<script>
import { QfNavbar } from "@/components";
import TopAdd from "./components/TopAdd.vue";
import CardDet from './components/CardDet.vue'
import SubmitBar from './components/SubmitBar.vue'
import EmptyCart from './components/EmptyCart.vue'
import { mapState } from 'vuex';
export default {
  components: {
    QfNavbar,
    TopAdd,
    CardDet,
    SubmitBar,
    EmptyCart
  },
  computed:{
    ...mapState('cart',['cartList'])
  }
};
</script>

<style lang="scss" scoped>
.CartPage {
  background: #f2f2f2;
  .CardDet{
    padding-bottom: 2.1067rem
  }
  .gwc {
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>