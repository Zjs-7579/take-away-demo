<template>
    <div class="message">
        <p class="title">配送信息</p>
        <p>
            <span class="ys">硅谷专送</span>
            <span>由商家提供配送，约{{shoplist.order_lead_time}}送达，距离{{shoplist.distance}}</span>
        </p>
        <p><span>{{shoplist.piecewise_agent_fee.tips}}</span></p>
    </div>
    <div class="blank"></div>
    <p class="title">活动与服务</p>
    <ReelList :sum="sum"></ReelList>

</template>

<script>
    import ReelList from '../../../components/ShopList/ReelList'
    import {mapState} from 'vuex'
    export default {
        name: "Privilege",
        data() {
            return {
                sum: this.$route.matched[0].instances.default.sum
            }
        },
        computed: {
            ...mapState(['shoplist'])
        },
        components: {
            ReelList
        }
    }
</script>

<style scoped lang="less">
    .blank{
        width: 100%;
        height: 20px;
        background-color: #c8cbcf;
    }
    .message{
        width: 100%;
        height: 100px;
        .ys{
            background-color: #17a2b8;
            padding: 1px 10px;
            border-radius: 5px;
        }
        p{
            margin: 0 10px 0 10px;
            padding: 3px 0;
        }
        span{
            font-size: 13px;
        }
    }
    .title{
        margin-left: 10px;
        font-weight: bold;
        font-size: 18px;
    }
</style>