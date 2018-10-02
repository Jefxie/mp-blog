import request from '../utils/request';

export function GetArticleList(category = "", total = 10, page = 1) {
    const params = `?total=${total}&page=${page}${
      category ? "&category=" + category : ""
    }`;
    return request.get("/api/article" + params);
  }

  export function GetArticleDetail(id = "") {
    return request.get("/api/article/" + id);
  }