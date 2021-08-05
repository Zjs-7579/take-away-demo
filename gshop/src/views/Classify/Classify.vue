<template>
    <HeaderTop>
        <template v-slot:left>
            <span class="left" @click="$router.go(-1)">&lt;</span>
        </template>
        <template v-slot:center>
            <span class="center">{{title}}</span>
        </template>
    </HeaderTop>
    <div v-if="list.length">
        <Shop :shopsList = list></Shop>
    </div>
    <div v-else>
        <img src="../../assets/images/waimai.jpeg" alt="">
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import Shop from '../../components/Msite/Shop'
    //import {mapState} from 'vuex'
    export default {
        name: "Classify",
        data() {
            return {
            }
        },
        computed: {
            //...mapState(['nav'])
            title() {
                return this.$store.getters.nav(this.$route.query.id)
            },
            list() {
                return this.$store.getters.list(this.title)
            }
        },
        components: {
            HeaderTop,
            Shop
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
    img{
        width: 100%;
    }
</style>