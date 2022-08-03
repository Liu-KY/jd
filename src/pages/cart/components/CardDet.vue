<template>
  <div class="CardDet">
    <van-swipe-cell v-for="(item,index) in cartList" :key="item._id">
      <van-row>
        <van-col span="3">
          <van-checkbox :value="item.checked" @click="sChecked(index)"/>
        </van-col>
        <van-col span="21">
          <van-card
            :num="item.num"
            :price="price(item.good_info.price)"
            :desc="item.good_info.desc"
            :title="item.good_info.name"
            :thumb='`http://localhost:9999${item.good_info.img}`' 
          >
            <template #tags>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag> 
            </template>
            <template #footer>
              <van-button size="mini" @click="changeSum(item,index,-1)">
                <span>-</span>
              </van-button>
              <van-button size="mini" @click="changeSum(item,index,1)">
                <span>+</span>
              </van-button>
            </template>
          </van-card>
        </van-col>
      </van-row>

      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="deleteGood(item,index)"
        />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import { fetchCartDel,fetchCardUpd } from "@/utils/api";
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
  mounted(){
    this.getCartList()
  },
  computed: {
    ...mapState('cart',['cartList']),
    price() {
      return function (price) {
        return `${price}.00`;
      };
    }
  },
  methods: {
    ...mapActions('cart',['getCartList']),
    ...mapMutations('cart',['setChecked','spliceCartList','setGoodNum']),
    deleteGood(item,index) {
      this.$dialog
        .confirm({
          title: "删除提示",
          message: `确认要删除${item.good_info.name}吗？`,
        })
        .then(() => {
          fetchCartDel({ cart_id: item._id }).then((res) => {
            console.log(res);
            this.$toast.success("删除成功");
            this.spliceCartList(index)
          });
        })
    },
    sChecked(index){
      let data ={
        index:index,
        checked:!this.cartList[index].checked
      }
      this.setChecked(data)
    },
    changeSum(item,index,num){
      if(item.num + num < 1) return this.$toast('数量不可小于1')

      let data = {
        cart_id:item._id,
        new_num:item.num + num
      }
      console.log(data);
      fetchCardUpd(data).then(res=>{
        console.log(res);
        if(res.err == 0 ) {
          this.$toast('操作成功')
          this.setGoodNum({index,num:data.new_num})
        }
      })
      console.log(item,index,num,data);
    }
  },
};
</script>

<style lang="scss" scoped>
.CardDet {
  background: #fff;
  .van-card:not(:first-child) {
    margin-top: 0;
  }
  .van-button--square {
    height: 100%;
  }
  .van-row {
    display: flex;
    align-items: center;
    .van-checkbox {
      justify-content: center;
    }
    .van-card {
      background: #fff;
      border-bottom: 1px solid #f5f5f5;
    }
  }
  .van-card__footer{
    span{
      font-size: .5333rem;
      margin: 0 .1333rem;
    }
  }
}
</style>