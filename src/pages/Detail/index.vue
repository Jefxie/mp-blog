<template>
  <div class="detail">
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
    async onLoad(query) {
        const res = await GetArticleDetail(query.id);
        this.detailContent = decodeURIComponent(res.data.content);
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
