<template>
    <ul class="xlist">
        <li class="xlist-li" v-for="item in listData" :key="item.id" @click="emitClick(item.id)">
            <h3 class="xlist-li-title">{{item.title}}</h3>
            <p class="xlist-li-ctx">{{item.abstract}}</p>
            <div class="xlist-li-binfo">
                <div class="xlist-li-leftinfo">
                    <span>分类：{{item.category.name}}</span>
                    &nbsp;&nbsp;
                    <i>作者：{{item.author.name}}</i>
                </div>
                <span>日期：{{ item.create_at | dateFrom}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
import dayjs from '@/utils/day';
export default {
    name: 'xlist',
    props: {
        listData: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        dateFrom(time) {
            const _time = dayjs(time).from(dayjs());
            return _time;
        },
        emitClick(id){
            this.$emit('on-click',id)
        }
    },
};
</script>
<style scoped lang="scss">
.xlist {
    width: 100%;
    &-li {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px 0;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #f1f1f1;
        &-title {
            margin-bottom: 10px;
            font-size: 18px;
            color: #333;
            font-weight: bold;
        }
        &-binfo {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            font-size: 14px;
        }
        &-leftinfo {
            display: flex;
        }
    }
}
</style>

