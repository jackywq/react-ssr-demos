import axios from "axios";

// 获取电影列表
export const getFilmsList = async () => {
  const res = await axios({
    method: "GET",
    url: "https://m.maizuo.com/gateway",
    params: {
      cityId: 310100,
      pageNum: 1,
      pageSize: 10,
      type: 2,
      k: 9091390,
    },
    headers: {
      "X-Host": "mall.film-ticket.film.list",
    },
  });
  return res.data.data.films;
};
