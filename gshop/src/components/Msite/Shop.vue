<template>

    <div v-if="shopsList.length">
        <div class="shopList" v-for="item in shopsList" :key="item.id" @click="link(item.id)">
            <router-link :to="'/shoplist/'+item.id" style="display: flex; width: 100%">
                <div class="shopImg">
                    <img src="../../assets/images/shop.jpeg" alt="">
                </div>
                <div class="shopDetail">
                    <div class="Detail1">
                        <img src="../../assets/icon/pinpai.png" alt="">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="Detail2">
                        <Scroe :scroe="item.rating" :size="12"></Scroe>
                        月售{{item.rating_count}}单
                    </div>
                    <div class="Detail3">
                        ￥{{item.float_minimum_order_amount}}起送/{{item.piecewise_agent_fee.tips}}
                    </div>
                </div>
                <div class="shopWaitress">
                    <div>
                        <span v-for="icon in item.supports" :key="icon.id">{{icon.icon_name}}</span>
                    </div>
                    <img class="songcan" src="../../assets/icon/songcan.png" alt="">
                </div>
            </router-link>
        </div>

    </div>
    <div v-else :style="{display: isBlock}">
        <ul style="list-style: none">
            <li v-for="i in 6" :key="i">
                <img src="../../assets/svg/shop_back.svg" alt="shop_back">
            </li>
        </ul>
    </div>
</template>

<script>
    import Scroe from '../../components/Scroe'
    export default {
        name: "Shop",
        props: ['shopsList'],
        data() {
            return {

            }
        },
        computed: {
            isBlock() {
                if (this.shopsList.length > 15) {
                    return 'block'
                }else {
                    return 'none'
                }
            }
        },
        mounted() {
        },
        methods: {
            link(id) {
                this.$store.dispatch('get_ShopList', id);
                this.$store.dispatch('get_Ordered', id);
            }
        },
        components: {
            Scroe
        }
    }
</script>

<style scoped lang="less">
    .shopList {
        width: 100%;
        height: 100px;
        display: flex;
        font-size: 14px;
        margin-bottom: 10px;

        .shopImg {
            flex: 1;

            img {
                display: block;
                width: 80px;
                margin: 10px 0;
            }
        }

        .shopDetail {
            flex: 2.5;

            .Detail1 {
                width: 100%;
                height: 30px;
                display: flex;

                img {
                    width: 18px;
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

            .Detail2 {
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
            }

            .Detail3 {
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
            }
        }

        .shopWaitress {
            flex: 1;

            div {
                width: 100%;
                height: 50%;
                display: flex;

                span {
                    display: block;
                    color: #ccc;
                    margin: auto;
                    border: 1px solid #ccc;
                }

            }

            .songcan {
                display: block;
                margin: 0 auto;
                background-color: #17a2b8;
            }

        }
    }
</style>