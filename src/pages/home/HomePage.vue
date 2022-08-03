<template>
  <div class="home" @scroll="homeScroll" ref='home'>
    <NoticeBar />
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <div class="a-slider-bg">
          <div class="slider-bg"></div>
          <GoodSearch />
          <AdSwipe :list="imgList" />
        </div>
        <CateGrid />
        <GoodList :lis="GdList" />
      </van-list>
    </van-pull-refresh>

    <QfTabbar />
  </div>
</template>

<script>
import { QfTabbar } from "@/components";
import NoticeBar from "./components/NoticeBar.vue";
import AdSwipe from "./components/AdSwipe.vue";
import GoodSearch from "./components/GoodSearch.vue";
import CateGrid from "./components/CateGrid.vue";
import GoodList from "./components/GoodList.vue";
import { fetchGoodList } from "@/utils/api";

export default {
  name:'HomePage',
  components: {
    QfTabbar,
    NoticeBar,
    AdSwipe,
    GoodSearch,
    CateGrid,
    GoodList,
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          src: "//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/212225/6/11238/61871/61e50ff9E7f02c060/8d0f3065b0c27182.jpg!cr_1053x420_4_0!q70.jpg",
        },
        {
          id: 2,
          src: "//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/209189/18/12905/162980/61bbf501E2d49c634/29452e71e84c0e39.png!cr_1053x420_4_0!q70.jpg",
        },
        {
          id: 3,
          src: "//m15.360buyimg.com/mobilecms/jfs/t1/106763/22/30593/138017/62d164efEd7be8955/b8666eade05dbe1b.jpg!cr_1053x420_4_0!q70.jpg",
        },
        {
          id: 4,
          src: "//m15.360buyimg.com/mobilecms/s1062x420_jfs/t1/102522/29/23302/471300/621f1a74Ee5eb33e3/6b996cd7a38e97f5.png!cr_1053x420_4_0!q70.jpg",
        },
      ],
      loading: false,
      finished: false,
      refreshing: false,
      GdList: [],
      page: 1,
      num: 1,
      top:0
    };
  },
  mounted() {
    this.getGoodList();
  },
  watch: {
    num() {
      this.getGoodList();
    },
  },
  methods: {

    getGoodList() {
      const params = { page: this.page};
      fetchGoodList(params).then((res) => {
        if (!this.GdList.length) {
          this.GdList = res.data.list;
        }

        if (this.loading) {
          this.GdList = [...this.GdList, ...res.data.list];
          this.loading = false;
          if (this.GdList.length >= res.data.total) {
            this.finished = true;
          }
        }

        if (this.refreshing) {
          this.GdList = [];
          this.GdList = res.data.list;
          this.refreshing = false;
        }
      });
    },
    //下拉刷新
    onRefresh() {
      this.finished = false;
      this.page = 1;
      this.num++;
    },
    //触底加载
    onLoad() {
      if (this.refreshing) {
        this.refreshing = false;
      }
      this.page++;
      this.num++;
    },

    homeScroll(ev){
      this.top = ev.srcElement.scrollTop
    }
  },
  activated(){
    this.$refs.home.scrollTop = this.top
  }
};
</script>
<style lang="scss">
.home {
  .van-list__finished-text {
    background: #f6f6f6;
  }
}
</style>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow-y: scroll;
}
.van-list {
  padding-bottom: 1.3333rem;
}
.a-slider-bg {
  position: relative;
  overflow: hidden;
  width: 100%;
  .slider-bg {
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#f1503b),
      color-stop(50%, #c82519)
    );
    background-image: -webkit-linear-gradient(bottom, #f1503b, #c82519 50%);
    background-image: linear-gradient(0deg, #f1503b, #c82519 50%);
    position: absolute;
    top: 0;
    left: -25%;
    height: 4rem;
    width: 150%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    z-index: -5;
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>