<template>
  <div class="detail">
    <!-- <h1 class="detail-title">{{detailData.title || ''}}</h1> -->
    <div class="detail-content OneDark">
      <wxParse :content="detailContent||''" />
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index';
import { GetArticleDetail } from '@/api/blog';
import wxParse from 'mpvue-wxparse';

export default {
    data() {
        return {
            detailContent: '',
        };
    },
    components: {
        wxParse,
    },

    data() {
        return {
            logs: [],
        };
    },
    async onLoad(query) {
        console.log('haha90', query);
        const res = await GetArticleDetail(query.id);
        console.log('res', res.data);
        this.detailContent = decodeURIComponent(res.data.content);
        console.log(this.detailContent)
        wx.setNavigationBarTitle({
            title: res.data.title,
        });
    },
};
</script>

<style lang="scss" scoped>
@import '~mpvue-wxparse/src/wxParse.css';
@import './oneDark.scss';

.detail {
    box-sizing: border-box;
    padding: 10px 20px;
}
</style>
