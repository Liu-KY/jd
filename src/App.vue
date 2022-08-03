<template>
  <div class="app">

    <keep-alive :include="['HomePage']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
val
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>


<style >
[v-cloak] {
  display: none;
}
</style>
<style lang="scss" >
html,
body {
  height: 100%;
  width: 100%;
}
.app {
  height: 100%;
}
</style>
