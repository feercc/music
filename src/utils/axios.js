import axios from "axios";
// import { message } from "ant-design-vue";
// import router from "../router";

const createAxiosByinterceptors = (config) => {
  const instance = axios.create({
    baseURL: import.meta.env.BASE_API_URL,
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
      if (status >= 200 && status < 300) return data;
      else {
        return Promise.reject(response.data);
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosByinterceptors();
