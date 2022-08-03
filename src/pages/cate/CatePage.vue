<template>
  <div class="CatePge">
    <QfNavbar />
    <LeftCate />
    <RightCate />
    <QfTabbar />
  </div>
</template>

<script>
import { QfTabbar,QfNavbar } from "@/components";
import LeftCate from './components/LeftCate.vue';
import RightCate from './components/RightCate.vue';
export default {
  components: {
    QfTabbar,
    QfNavbar,
    LeftCate,
    RightCate
  },
};
</script>

<style lang="scss" scoped>
.CatePge{
  height: 100%;
}
</style>