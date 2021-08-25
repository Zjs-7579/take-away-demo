<template>
    <div class="Discuss">
        <div class="left">
            <p>{{discuss.appraisal}}</p>
            <p>综合评分</p>
        </div>
        <div class="right">
            <p>服务态度 <span><Scroe :scroe="discuss.behavior" :size="12"></Scroe></span></p>
            <p>商品评分 <span><Scroe :scroe="discuss.pack" :size="12"></Scroe></span></p>
        </div>
    </div>
    <div class="DiscussBtn">
        <div @click="allBtn">全部 {{all.length}}</div>
        <div @click="goodBtn">好评 {{good.length}}</div>
        <div @click="middleBtn">中评 {{middle.length}}</div>
        <div @click="lameBtn">差评 {{lame.length}}</div>
    </div>
    <DiscussList :DataList="list"></DiscussList>
</template>

<script>
    import {mapState} from 'vuex'
    import Scroe from '../../../components/Scroe'
    import DiscussList from '../../../components/ShopList/DiscussList'
    export default {
        name: "Discuss",
        data() {
            return {
                all: '',
                good: '',
                middle: '',
                lame: '',
                list: ''
            }
        },
        computed: {
            ...mapState(['discuss'])
        },
        methods: {
            allBtn() {
                this.list = this.all;
            },
            goodBtn() {
                this.list = this.good;
            },
            middleBtn() {
                this.list = this.middle;
            },
            lameBtn() {
                this.list = this.lame;
            }
        },
        components: {
            Scroe,
            DiscussList
        },
        watch: {
            discuss(v) {
                let data = [];
                this.good = v.good;
                this.middle = v.middle;
                this.lame = v.lame;
                //this.all = this.good.length + this.middle.length + this.lame.length;
                //this.list =data.push(v.good);//v.good, v.middle, v.lame);
                v.good.forEach( (res) => {data.push(res)});
                v.middle.forEach( (res) => {data.push(res)});
                v.lame.forEach( (res) => {data.push(res)});
                this.all = data;
                this.list = data;
                //console.log(data);


            }
        }
    }
</script>

<style scoped lang="less">
    .Discuss{
        width: 100%;
        height: 90px;
        display: flex;
        .left{
            width: 40%;
            p:first-child {
                color: #d39e00;
                font-size: 32px;
                padding: 7px 0;
                margin: 0px;
                font-weight: bold;
            }
            p:last-child {
                padding: 0;
                margin: 0;
            }
        }
        .right{
            width: 60%;
            text-align: unset;
        }
    }
    .DiscussBtn{
        border-top: 0.5px solid #ccc;
        width: 100%;
        height: 50px;
        display: flex;
        div{
            width: 20%;
            height: 30px;
            margin: 10px auto;
            text-align: center;
            line-height: 30px;
            border-radius: 5px;
            box-shadow: 1px 1px 10px;
            background-color: #17a2b8;
        }
    }
</style>