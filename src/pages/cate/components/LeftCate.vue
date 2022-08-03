<template>
  <div class="leftcate">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="item in LClist"
        :title="item.cate_zh"
        :key="item._id"
      />
    </van-sidebar>
  </div>
</template>

<script>
import { fetchCates } from "@/utils/api";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: 0,
      LClist: [],
    };
  },
  computed: {
    ...mapState("good", ["goodlist"]),
    params() {
      return {
        activeKey: this.activeKey,
        cate: this.LClist[this.activeKey].cate,
      };
    },
  },
  mounted() {
    fetchCates().then((res) => {
      this.LClist = res.data.list;
      this.getGood(this.params);
    });
  },
  watch: {
    activeKey() {
      if (!this.goodlist[this.activeKey]) this.getGood(this.params);
      this.setActiveKey(this.activeKey);
    },
  },
  methods: {
    ...mapActions("good", ["getGood"]),
    ...mapMutations("good", ["setActiveKey"]),
  },
};
</script>

<style lang="scss" scoped>
.leftcate {
  position: absolute;
  top: 1.1733rem;
  left: 0;
  height: calc(100% - 2.56rem);
  overflow: scroll;
  .van-sidebar-item--select::before {
    width: 0;
    height: 0;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>