<template>
  <div>
    <QfNavbar> 注册界面 </QfNavbar>
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
      <van-field
        v-model="cfPassword"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" color="#f81000"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { fetchRegist } from "@/utils/api";
import { QfNavbar } from "@/components";
export default {
  components: {
    QfNavbar,
  },
  methods: {
    onSubmit() {
      if (this.password !== this.cfPassword)
        return this.$toast.fail("两次输入的密码不正确");
      const data = {
        username: this.username,
        password: this.password,
      };

      fetchRegist(data).then((res) => {
        if (res && res.err === 0) {
          this.$toast.success(res.msg);
          this.$router.replace('/login')
        }
      });
    },
  },
  data() {
    return {
      username: "",
      password: "",
      cfPassword: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>