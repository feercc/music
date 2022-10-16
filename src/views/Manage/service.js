import axios from "../../utils/axios";

export const getMusicList = (params) => {
  return axios.get("/music/list", {
    params,
  });
};

export const delMusic = (params) => {
  return axios.get("/music/del", {
    params,
  });
};
