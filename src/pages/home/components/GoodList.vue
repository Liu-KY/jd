<template>
  <div class="goodFlex">
    <div v-for="i in goodSum" :key="i" class="goodBrief">
      <GoodItem :item="lis[i * 2 - 2]" />
      <GoodItem :item="lis[i * 2 - 1]" />
    </div>
  </div>
</template>

<script>
import GoodItem from "./GoodItem.vue";
export default {
  props: {
    lis: { type: Array, default: () => [] },
  },
  computed: {
    goodSum() {
      return Math.floor(this.lis.length / 2);
    },
  },
  components: {
    GoodItem,
  },
};
</script>
<style lang="scss" >
.van-swipe__indicator {
  background-color: #cccccc;
}
</style>


<style lang="scss" scoped>
.goodFlex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0.1333rem;
  background: #f6f6f6;

  .goodBrief {
    box-sizing: border-box;
    display: flex;
    padding: 0.0667rem;
    align-content: center;
    padding: 0.0667rem;
    width: 100%;
    height: 7.7067rem;
  }
}
</style>