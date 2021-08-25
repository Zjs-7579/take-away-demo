<template>
    <HeaderTop>
        <template v-slot:left>
            <span class="left" @click="$router.go(-1)">&lt;</span>
        </template>
        <template v-slot:center>
            <span class="center">{{shoplist.name}}</span>
        </template>
    </HeaderTop>
    <div class="shoplist">
        <img class="img" src="../../assets/images/shop.jpeg" alt="">
        <div>
            <img src="../../assets/icon/pinpai.png" alt="">
            <span>{{shoplist.name}}</span>
        </div>
        <p>
            <span>硅谷专送</span>
            <span>约{{shoplist.order_lead_time}}</span>
            <span>距离{{shoplist.distance}}</span>
        </p>
        <p style="display: flex;width: 70%;margin: 0 auto">
            <img src="../../assets/icon/zhekouquan.png" alt="">
            <span>新用户首单立减17 <span>{{sum}}个优惠卷</span></span>
        </p>
    </div>
    <div class="btn">
        <div>
            <router-link to="/shoplist/ordered" :class="{on: $route.path === '/shoplist/ordered'}">
                点餐
            </router-link>
        </div>
        <div>
            <router-link to="/shoplist/discuss" :class="{on: $route.path === '/shoplist/discuss'}" @click="Discuss">
                评论
            </router-link>
        </div>
        <div>
            <router-link to="/shoplist/privilege" :class="{on: $route.path === '/shoplist/privilege'}">
                优惠
            </router-link>
        </div>
    </div>
    <keep-alive>
        <router-view/>
    </keep-alive>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import {mapState} from 'vuex'

    export default {
        name: "ShopList",
        data() {
            return {
                title: '',
                sum: Math.floor(Math.random()*7),
            }
        },
        computed: {
            ...mapState(['shoplist'])
        },
        methods: {

            //...mapActions(['get_ShopList']
            Discuss() {
                this.$store.dispatch('get_Discuss', this.shoplist.id);

            }
        },
        mounted() {
            //this.$store.dispatch('get_Ordered', this.shoplist.id)
            //this.$store.dispatch('get_ShopList', this.$route.params.id)
        },
        components: {
            HeaderTop
        },
    }
</script>

<style scoped lang="less">
    .left {
        line-height: 35px;
        text-align: left;
        text-indent: 0.5em;
        color: #fff;
    }

    .center {
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .shoplist {
        width: 100%;
        height: 220px;
        background-image: url("../../assets/images/bg.jpeg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .img {
            width: 80px;
            display: block;
            margin: 0 auto;
            padding: 10px 0;
            border-radius: 50%;
        }
        div{
            text-align: center;
            margin: 0 auto;
            width: 50%;
            height: 30px;
            display: flex;
            font-size: 20px;
            font-weight: bold;
            img{
                width: 8px;
                display: inline-block;
                margin: 6px 10px;
                background-color: #d39e00;
                flex: 1;
            }
            span {
                display: inline-block;
                flex: 9;
                line-height: 30px;
                overflow-wrap: normal;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

            }
        }
        p{
            display: block;
            text-align: center;
            width: 100%;
         //   background-color: red;
            span{
                display: inline-block;
                margin: 0 5px;
                font-size: 14px;
                line-height: 18px;
            }
            img{
                width: 18px;
                padding: 0;
                margin-right: 3px;
                display: inline-block;
            }
        }
    }

    .btn{
        width: 100%;
        height: 35px;
        display: flex;
        border-bottom: 1px solid #ccc;
        div{
            flex: 1;
            text-align: center;
            line-height: 35px;
        }
    }
    .on{
        color: #17a2b8;
    }
</style>