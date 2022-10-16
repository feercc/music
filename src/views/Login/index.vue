<script setup>
import axios from "../../utils/axios";
import { onMounted, reactive } from "vue";
import router from "../../router";
import { message } from "ant-design-vue";

const formState = reactive({
  user: "",
  pass: "",
});

const onFinish = (values) => {
  axios.post("/music/login", values).then(() => {
    message.success("登录成功");
    router.push("/");
  });
};

onMounted(() => {});
</script>

<template>
  <div class="login_box">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
    >
      <a-form-item
        label="Username"
        name="user"
        :rules="[{ required: true, message: 'Please input your user!' }]"
      >
        <a-input v-model:value="formState.user">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Password"
        name="pass"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.pass">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<style>
.ant-form-item-label > label.ant-form-item-required {
  color: #fff;
}
</style>
<style scoped>
@import url("./index.css");
</style>
