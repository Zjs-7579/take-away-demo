<template>
    <div class="ordered">
        <div class="left">
            <div v-for="(item, index) in ordered.data" :key="index">
                <a :href="'#'+item.marker">{{item.title}}</a>
            </div>
        </div>
        <div class="right">
            <div v-for="(item, index) in ordered.data" :key="index" :id="item.marker">
                <p class="title">{{item.title}}</p>
                <CartList :data="item.list" ></CartList>
            </div>
        </div>
    </div>
    <FootPrice></FootPrice>
</template>

<script>
    import {mapState} from 'vuex'
    import CartList from '../../../components/CartList'
    import FootPrice from '../../../components/FootPrice'
    export default {
        name: "Ordered",
        computed: {
            ...mapState(['ordered'])
        },
        components: {
            CartList,
            FootPrice
        }

    }
</script>

<style scoped lang="less">
    .ordered{
        width: 100%;
        height: 400px;
        display: flex;
        .left{
            flex: 1;
            overflow-y: auto;
            div{
                width: 100%;
                margin: 8px 0;
                font-size: 14px;
                padding: 8px 0;
            }
        }
        .right{
            flex: 3;
            overflow-y: auto;
            .title {
                width: 90%;
                background-color: #c8cbcf;
                margin: 0;
                padding: 5px 10px;
                text-align: left;
                color: #4e555b;
            }
        }
    }
</style>