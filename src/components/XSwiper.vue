<template>
    <div class="xswiper">
        <swiper class="xswiper-box" @change="onBindChange" :indicator-dots="indicatorDots" autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular">
            <block :wx:for="imgUrls">
                <swiper-item class="xswiper-wrap">
                    <image class="xswiper-img" :src="item" />
                </swiper-item>
            </block>
        </swiper>
    </div>
</template>
<script>
export default {
    name: 'xswiper',
    props: {
        imgUrls: {
            type: Array,
            default: () => [
                'http://hbfile.b0.upaiyun.com/img/home/banner/1bc004d49cb173857cf75507141a33a0070e7a831040a6',
                'http://hbfile.b0.upaiyun.com/img/home/banner/cdf0a6ab627bc33af759533af558a118be5a1b1dd2d93',
                'http://img.hb.aicdn.com/85a73d8b40798b16d18a560fe60a0dfb2b00ad334f9c6-t3oGRG_fw658',
            ],
        },
        indicatorDots: {
            type: Boolean,
            default: true,
        },
        autoplay: {
            type: Boolean,
            default: true,
        },
        interval: {
            type: Number,
            default: 5000,
        },
        duration: {
            type: Number,
            default: 1000,
        },
        circular: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        onBindChange(event) {
            this.$emit('on-change', event.target.current);
        },
    },
};
</script>

<style lang="scss" scoped>
.xswiper {
    width: 100%;
    height: 100%;
    &-box {
        height: 100%;
        border-radius: 6px;
        overflow: hidden;
    }
    &-img {
        width: 100%;
    }
}
</style>

