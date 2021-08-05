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
    <div v-if="food">
        <CartList :data="food"></CartList>
    </div>
    <div v-else>
        <img src="../../assets/images/waimai.jpeg" alt="">
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import CartList from  '../../components/CartList'
    import {mapState} from 'vuex'
    export default {
        name: "Order",
        data() {
            return {
                title: '订单'
            }
        },
        computed: {
            ...mapState(['food'])
        },
        components: {
            HeaderTop,
            CartList
        }
    }
</script>

<style scoped lang="less">
    img{
        width: 100%;

    }
</style>