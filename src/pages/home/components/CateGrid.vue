<template>
  <div class="wm9-CateGrid">
    <van-swipe class="my-swipe" indicator-color="#c82519">
      <van-swipe-item v-for="(item, index) in category" :key="index">
        <van-grid square :column-num="5" :border="false">
          <van-grid-item v-for="i in item" :key="i.id">
            <div class="cateflex">
              <van-image :src="i.src" class="cateImg" />
              <span v-text="i.text" class="catespan"></span>
            </div>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        [
          {
            id: 1,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 2,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 3,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 4,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 5,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 6,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 7,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 8,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 9,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 10,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
        ],
        [
          {
            id: 1,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 2,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 3,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 4,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 5,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 6,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 7,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 8,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 9,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
          {
            id: 10,
            text: "京东超市",
            src: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png!q70.jpg",
          },
        ],
      ],
    };
  },
};
</script>

<style lang="scss"  >
.wm9-CateGrid {
  .catespan {
    margin-top: 0.16rem;
    width: 100%;
    text-align: center;
    display: block;
    font-size: 0.16rem;
  }
  .van-grid-item__content {
    padding: 0;
    background: #f6f6f6;
  }
  .van-swipe {
    height: 4.32rem;
    .van-swipe__indicators {
      bottom: 0;
    }
  }
}
</style>

<style lang="scss" scoped>
.wm9-CateGrid {
  background: #f6f6f6;
  .van-grid-item__content {
    .cateflex {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .cateImg {
        margin-top: 0.2667rem;
        width: 1.0667rem;
        height: 1.0667rem;
      }
    }
    .van-grid-item__content {
      .cateflex {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .cateImg {
          margin-top: 0.2667rem;
          width: 1.0667rem;
          height: 1.0667rem;
        }
      }
    }
  }
}
</style>