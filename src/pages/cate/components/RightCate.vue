<template>
  <div class="rightcate">
    <van-grid :column-num="3">
      <van-grid-item
        :key="item._id"
        :icon='`http://localhost:9999${item.img}`'
        :text="item.name"
        v-for="item in list"
      />
    </van-grid> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
    };
  },
  computed:{
    ...mapState('good',['goodlist','activeKey']),
    list(){
      return this.goodlist[this.activeKey]
    }
  }
};
</script>

<style lang="scss" scoped>
.rightcate {
  position: absolute;
  left: 2.1333rem;
  height: calc(100% - 2.56rem);
  overflow-y: scroll;
  width: calc(100% - 2.1333rem);
}
::-webkit-scrollbar{
    display:none;
}
</style>