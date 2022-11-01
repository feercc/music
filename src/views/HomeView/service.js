import axios from "../../utils/axios";
// const BASE_URL = "https://api.feer.icu";
export const getMusicList = (params = {}) => {
  return axios
    .get("/notion/music_database/list", {
      params: {
        ...params,
        page_size: 100,
      },
    })
    .then((res) => {
      if (res) {
        const { results = [], next_cursor, has_more } = res;
        return {
          next_cursor,
          has_more,
          list: results.map((item) => {
            const {
              properties: { Files, URL, type, singer, name },
            } = item;
            return {
              name:
                name["title"][0].plain_text + singer.rich_text[0].plain_text,
              // artist: 'artist',
              url: URL.url,
              // url: Files?.files[0] ? Files?.files[0].file.url : "",
              // type: type.select.name,
              cover: "",
              lrc: "",
              theme: type.select.color,
            };
          }),
        };
      } else {
        return {
          list: [],
          has_more: false,
        };
      }
    });
};
