<template>
    <HeaderTop>
        <template  v-slot:left >
            <router-link to="/search">
                <span class="left iconfont icon-sousuo1"></span>
            </router-link>
        </template >

        <template  v-slot:center >
            <span class="center">{{address.name}}</span>
        </template >

        <template  v-slot:right >
            <router-link :to="userInfo.phoneID||userInfo.user ? '/user' : '/login'">
                <span v-if="!(userInfo.phoneID||userInfo.user)" class="right iconfont icon-zhuceyonghu"></span>
                <img v-else src="../../assets/icon/yonghudenglu.png" alt="" style="display: inline-block;margin: 10% 30%">
            </router-link>
        </template >

    </HeaderTop>
    <div>
        <Nav v-if="$store.state.nav.length"></Nav>
        <div v-else>
            <img src="../../assets/svg/msite_back.svg" alt="msite_back">
        </div>
        <div class="title">
            <div>
                <img src="../../assets/icon/pailie.png" alt="">
            </div>
            <span>附近商家</span>
        </div>
        <shop :shopsList="shops"></shop>
       <!-- {{$store.state.nav}}
        ``````````````````````````````````````````````
        {{$store.state.shops}}-->
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import Nav from '../../components/Msite/Nav'
    import shop from '../../components/Msite/Shop'
    import {mapState} from 'vuex'
    /*import {reqdata} from "../../api/transfer";*/

    export default {
        name: "MSite",
        data() {
            return {
            }
        },
        computed: {
            ...mapState(['address', 'userInfo', 'shops'])
        },
        components: {
            HeaderTop,
            Nav,
            shop
        },

        mounted() {
            // this.$store.dispatch('get_Address');
            // this.$store.dispatch('get_Nav');
            // this.$store.dispatch('get_Shops')
        },
        created() {
            // console.log(this.$store.state);
            // this.$store.dispatch('get_Address');
            // this.$store.dispatch('get_Nav');
            // this.$store.dispatch('get_Shops')
        }
    }
</script>

<style scoped lang="less">
    .title{
        width: 100%;
        height: 32px;
        display: flex;
        margin-bottom: 10px;
        div{
            flex: 1;

        }
        span{
            flex: 10;
            line-height: 30px;
            font-size: 18px;
            color: #8a8a8a;
        }
    }
</style>