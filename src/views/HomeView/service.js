import axios from "axios";
const BASE_URL = "http://192.168.10.23:8108";
export const getMusicList = (params = {}) => {
  return axios
    .get("/notion/music_database/list", {
      params: {
        ...params,
        page_size: 10,
      },
      baseURL: BASE_URL,
    })
    .then((res) => {
      console.log(1, res);
      if (res.data) {
        const {
          data: { results = [], next_cursor, has_more },
        } = res;
        return {
          next_cursor,
          has_more,
          list: results.map((item) => {
            const {
              properties: { Files, type, singer, name },
            } = item;
            return {
              name:
                name["title"][0].plain_text + singer.rich_text[0].plain_text,
              // artist: 'artist',
              url: Files.files[0].file.url,
              type: type.select.name,
              // cover: 'cover.jpg',
              // lrc: 'lrc.lrc',
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
