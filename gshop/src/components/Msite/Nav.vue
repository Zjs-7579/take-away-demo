<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(page, index) in nav" :key="index">
                    <div class="item" v-for="ruselt in page" :key="ruselt.id">
                        <router-link :to="{path:'/classify',query:{id: ruselt.id} }">
                            <img src="../../assets/icon/shangpin-.png" alt="">
                            {{ruselt.title}}
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    /*import {reqdata} from '../../api/transfer'*/
    import {mapState} from 'vuex'
    import Swiper from 'swiper'
    import 'swiper/swiper.min.css'

    export default {
        name: "nav",
        //props:['list'],
        data() {
            return {
            }
        },
        computed: {
            ...mapState(['nav']),
        },


        mounted() {
            this.$nextTick(function () {
                this.SwiperOpen();
            })


        },
        methods: {
            SwiperOpen() {
                new Swiper('.swiper-container', {
                    observer:true,
                    observeParents:true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            }
        },

    }
</script>

<style scoped lang="less">
    .swiper-container{
        --swiper-theme-color: #ff6600;
        --swiper-pagination-color: #00ff33;/* 两种都可以 */
        width: 100%;
        height: 180px;
        .swiper-wrapper{
            width: 100%;
            height: 100%;
            .swiper-slide{
                display: block;
                .item{
                    display: inline-block;
                    width: 25%;
                    height: 90px;
                    text-align: center;
                    img{
                        display: block;
                        margin: 8px auto;
                    }
                }
            }

        }
    }


</style>