import { GetArticleList } from '@/api/blog';

export default {
  state: {
    articleList: [],
  },
  mutations: {
    SET_ARTICLELIST(state, data) {
      state.articleList = data;
    },
    PUSH_ARTICLELIST(state, data) {
      state.articleList.push(...data);
    },
  },
  actions: {
    async getArticleList({ commit, state }, data) {
      if (state.articleList.length && !data.flag) return;
      const res = await GetArticleList('', 10, data.page);
      if (data.flag) {
        commit('PUSH_ARTICLELIST', res.data);
      } else {
        commit('SET_ARTICLELIST', res.data);
      }
    },
  },
};
