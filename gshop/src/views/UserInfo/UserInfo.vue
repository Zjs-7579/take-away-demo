<template>
    <HeaderTop>
        <template  v-slot:left >
            <span class="left" @click="$router.go(-1)">&lt;</span>
        </template >
        <template  v-slot:center >
            <span class="center">{{title}}</span>
        </template >
    </HeaderTop>
    <div>
        <span class="name">头像</span>
        <span >
            <img src="../../assets/icon/yonghu.png" alt="">
        </span>
        <span>&gt;</span>
    </div>
    <div>
        <span class="name">账号</span>
        <span class="data">{{userInfo.user||userInfo.phoneID}}</span>
        <span>&gt;</span>
    </div>
    <div>
        <span class="name">金额</span>
        <span class="data">{{userInfo.monetary}}元</span>
        <span>&gt;</span>
    </div>
    <div>
        <span class="name">优惠卷</span>
        <span class="data">{{userInfo.privilege}}张</span>
        <span>&gt;</span>
    </div>
    <div>
        <span class="name">积分</span>
        <span class="data">{{userInfo.integral}}分</span>
        <span>&gt;</span>
    </div>
    <div>
        <span class="name">更多</span>
        <span class="data"></span>
        <span>&gt;</span>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import {mapState} from 'vuex'
    export default {
        name: "UserInfo",
        data() {
            return {
                title: '个人中心'
            }
        },
        computed: {
            ...mapState(['userInfo'])
        },
        components: {
            HeaderTop,
        }
    }
</script>

<style scoped lang="less">
    .left{
        line-height: 35px;
        text-align: left;
        text-indent: 0.5em;
        color: #fff;
    }
    div{
        color: white;
        width: 100%;
        height: 45px;
        margin-bottom: 10px;
        background-color: #4e555b;
        line-height: 45px;
        display: flex;
        .name{
            flex: 1;
            text-indent: 1em;
        }
        .data{
            flex: 3;
            text-align: right;
            color: red;
        }
        span:last-child{
            padding: 0 10px;
        }
    }
    img{
        display: block;
        margin: 6px auto;
    }
</style>