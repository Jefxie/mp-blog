<template>
    <ul class="xlist">
        <li class="xlist-li" v-for="item in xListData" :key="item.id" @click="emitClick(item.id)">
            <h3 class="xlist-li-title">{{item.title}}</h3>
            <p class="xlist-li-ctx">{{item.abstract}}</p>
            <div class="xlist-li-binfo">
                <div class="xlist-li-leftinfo">
                    <span>#{{item.category.name}}</span>
                    &nbsp;&nbsp;
                    <i>@{{item.author.name}}</i>
                </div>
                <span>Published {{item.create_at}}</span>
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
    computed: {
        xListData() {
            const _list = JSON.parse(JSON.stringify(this.listData));
            for (const iterator of _list) {
                iterator.create_at = this.dateFrom(iterator.create_at);
            }
            return _list;
        },
    },
    methods: {
        emitClick(id) {
            this.$emit('on-click', id);
        },
        dateFrom(time) {
            const _time = dayjs(time).from(dayjs());
            return _time;
        },
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

