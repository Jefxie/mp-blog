<template>
  <scroll-view scroll-y class="home" @scrolltolower="upPullRefresh">
    <div class="home-swipe">
      <x-swiper @on-change="swiperChange" />
    </div>
    <div class="home-list">
      <x-article-list :listData="articleList" @on-click="bindViewTap" />
    </div>

  </scroll-view>
</template>

<script>
import XArticleList from '@/components/XArticleList';
import XSwiper from '@/components/XSwiper';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            pageIndex: 1,
        };
    },
    components: {
        XArticleList,
        XSwiper,
    },
    computed: {
        ...mapGetters(['articleList']),
    },
    created() {
        // 获取列表数据
        this.getArticleList({
            page: this.pageIndex,
        });
    },
    methods: {
        ...mapActions(['getArticleList']),
        bindViewTap(id) {
            const url = '../Detail/main?id=' + id;
            wx.navigateTo({ url });
        },
        swiperChange(current) {
            // console.log('swiper current',current)
        },
        upPullRefresh(e) {
            console.log('eee', e);
        },
    },
    onReachBottom(e) {
        this.getArticleList({
            page: ++this.pageIndex,
            flag: true,
        });
    },
};
</script>

<style scoped lang="scss">
.home {
    box-sizing: border-box;
    padding: 5px 16px;
    &-swipe {
        width: 100%;
        height: 150px;
        box-sizing: border-box;
    }
    &-list {
        width: 100%;
    }
}
</style>
