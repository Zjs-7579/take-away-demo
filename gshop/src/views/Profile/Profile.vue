<template>
    <HeaderTop>
        <template  v-slot:left >
            <span class="left"></span>
        </template >

        <template  v-slot:center >
            <span class="center">{{title}}</span>
        </template >

        <template  v-slot:right >
            <span class="right"></span>
        </template >
    </HeaderTop>
    <div class="txt">
        <div class="login">
            <img src="../../assets/icon/yonghu.png" alt="">
            <div class="index">
                <router-link :to="userInfo.phoneID||userInfo.user ? '/user' : '/login'">
                    <div class="left">
                        <p v-if="!userInfo.phoneID">{{userInfo.user||'登录/注册'}}</p>
                        <p v-if="!userInfo.user">{{userInfo.phoneID||'暂无绑定手机号'}}</p>
                    </div>
                    <div class="right"> &gt; </div>
                </router-link>
            </div>
        </div>
        <div class="negative">
            <div class="monetary">
                <p><span>{{(userInfo.phoneID||userInfo.user)?userInfo.monetary:'0.00'}}</span>元</p>
                <p>我的金额</p>
            </div>
            <div class="privilege">
                <p><span>{{(userInfo.phoneID||userInfo.user)?userInfo.privilege:'0'}}</span>个</p>
                <p>我的优惠</p>
            </div>
            <div class="integral">
                <p><span>{{(userInfo.phoneID||userInfo.user)?userInfo.integral:'0'}}</span>分</p>
                <p>我的积分</p>
            </div>
        </div>
        <div class="other">
            <ul>
                <li><img src="../../assets/icon/dingdan.png" alt=""><span>我的订单</span></li>
                <li><img src="../../assets/icon/jif.png" alt=""><span>积分商城</span></li>
                <li><img src="../../assets/icon/huiyuan.png" alt=""><span>外卖会员</span></li>
                <li><img src="../../assets/icon/28.png" alt=""><sapn>服务中心</sapn></li>
            </ul>
        </div>
    </div>
    <div class="foot" v-if="userInfo.phoneID||userInfo.user">
        <button @click="UserOut">退出登录</button>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import {mapState} from  'vuex'
    export default {
        name: "Profile",
        data() {
            return {
                title: '我的',
                //monetary: '0.00',
               //privilege: 0,
                //integral: 0,
            }
        },
        computed: {
          ...mapState(['userInfo'])
        },
        components: {
            HeaderTop
        },
        methods: {
            UserOut() {
                this.$store.commit('UserOut');
            }
        }
    }
</script>

<style scoped lang="less">
    .txt{
        width: 100%;
        height: 100%;
        background-color: #c8cbcf;
    }
    .foot{
        width: 100%;
        height: 250px;
        background-color: #c8cbcf;
        button{
            color: white;
            display: block;
            width: 95%;
            height: 45px;
            margin: 0 auto;
            background-color: red;
            border-radius: 10px;
            outline: none;
            border: none;
        }
    }

    .login{
        width: 100%;
        height: 100px;
        background-color: #138496;
        border-top: 1px solid #fff;
        color: #fff;
        display: flex;
        img{
            display: inline-block;
            width: 80px;
            margin: 10px;
        }
        .index{
            flex: 3;
            .left{
                width: 200px;
                text-indent: 0.5em;
                color:#fff;
                display: inline-block;
                p{
                    text-align: left;
                }
                p:first-child{
                    font-size: 20px;
                    font-weight: bold;
                }
            }
            .right{
                color:#fff;
                display: inline-block;
                width: 20px;
                float: right;
                line-height: 100px;
            }
        }
    }
    .negative{
        width: 100%;
        height: 90px;
        display: flex;
        text-align: center;
        background-color: #fff;
        span{
            font-size: 25px;
            font-weight: bold;
        }
        .monetary{
            flex: 1;
            span{
                color: yellow;
            }
        }
        .privilege{
            flex: 1;
            border-left: 1px solid #fff;
            border-right: 1px solid #fff;
            span{
                color: red;
            }
        }
        .integral{
            flex: 1;
            span{
                color: green;
            }
        }
    }
    .other{
        width: 100%;
        height: 250px;
        margin-top: 20px;
        ul{
            width: 100%;
            height: 220px;
            display: block;
            list-style: none;
            margin: 0;
            padding: 0;
            li{
                background-color: #fff;
                width: 100%;
                height: 50px;
                line-height: 50px;
                display: flex;
                img{
                    display: block;
                    width: 30px;
                    height: 30px;
                    margin: 10px 5px;
                }
                span{
                    display: block;
                }
            }
            li:last-child{
                margin-top: 20px;
            }
        }
    }
</style>