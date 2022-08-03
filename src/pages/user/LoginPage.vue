<template>
  <div>
    <QfNavbar> 登录界面 </QfNavbar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#f81000"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- <van-button color="#7232dd" plain to='/regist'>快速注册</van-button> -->
    <router-link to="/regist" class="regist" replace>手机快速注册</router-link>
  </div>
</template>

<script>
import { QfNavbar } from "@/components";
import { fetchLogin } from "@/utils/api";
import { mapMutations } from "vuex";
export default {
  components: {
    QfNavbar,
  }, 
  methods: {
    ...mapMutations("user", ["setToken"]),
    onSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };

      fetchLogin(data).then((res) => {
        if (res && res.err === 0) {
          this.$toast.success(res.msg);
          sessionStorage.setItem("token", res.data.token);
          this.setToken(res.data.token);
          this.$router.back()
        }
      });
    },
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.regist {
  margin-left: 0.6667rem;
  display: block;
  width: 2.24rem;
  height: 0.5333rem;
  font-size: 0.14rem;
  line-height: 0.5333rem;
  color: #999999;
}
</style>