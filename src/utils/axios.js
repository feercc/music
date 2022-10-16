import axios from "axios";
import { message } from "ant-design-vue";
import router from "../router";

const createAxiosByinterceptors = (config) => {
  const instance = axios.create({
    baseURL: import.meta.env.DEV ? "/" : "http://47.104.85.7:8108",
    timeout: 1000, //超时配置
    withCredentials: true, //跨域携带cookie
    ...config, // 自定义配置覆盖基本配置
  });

  instance.interceptors.request.use(
    (config) => {
      // 请求之前
      // console.log("config:", config);
      // config.headers.Authorization = vm.$Cookies.get("vue_admin_token");
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    function (response) {
      // 对响应数据做点什么
      const { data, status } = response;
      if (status === 200 || status === 201) return data;
      else {
        message.error(message);
        return Promise.reject(response.data);
      }
    },
    function (error) {
      // 对响应错误做点什么
      if (error.response.status === 403) {
        // 跳转到登录页面
        // message.success("登录");
        router.replace("/login");
      }
      message.error(error?.response?.data?.message || "服务端异常");
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosByinterceptors();
