<template>
    <div class="foodList" v-show="foodShow">
        <p><span class="t1">购物车</span> <span class="t2" @click="CartDel">清空</span></p>
        <p v-for="(item, index) in food" :key="index">
            <span class="t1">{{item.name}}</span>
            <span class="t2">￥{{item.price}}</span>
            <CountFoot :food="item"></CountFoot>
        </p>
    </div>
    <div class="footPrice">
        <div class="box1" @click="foodList">
            <img src="../assets/icon/gwc.png" alt="">
            <div class="len" v-if="food.length">{{food.length}}</div>
        </div>
        <div class="box2">
            <p>￥{{price}}</p>
            <p>配送费￥4元</p>
        </div>
        <div class="box3">
            <button @click="payment" :disabled="isDisabled" ref="pay">￥20元起送</button>
        </div>
    </div>


</template>

<script>
    import {mapState} from 'vuex'
    import CountFoot from './CountFoot'
    export default {
        name: "FootPrice",
        data() {
          return {
              foodShow: false,
          }
        },
        computed: {
            ...mapState(['ordered', 'food']),
            price() {
               return this.$store.getters.price
            },
            isDisabled() {
                if (this.price>=20){
                    return 0
                }else {
                    return 1
                }
            }
        },
        methods: {
            foodList() {
                this.foodShow =! this.foodShow
            },
            CartDel() {
                this.$store.dispatch('foodDel', {food: this.food});
                //this.$store.state.food = ''
            },
            payment() {
                this.$refs.pay.disabled = true;
                alert('付款成功！！！');
                this.CartDel();

            }
        },
        components: {
            CountFoot
        }
    }
</script>

<style scoped lang="less">
    .footPrice{
        width: 100%;
        height: 60px;
        background-color: #cce5ff;
        display: flex;
        //position: relative;
        .box1{
            flex: 1;
            position: relative;
            img{
                display: block;
                width: 40px;
                margin: 10px auto;
            }
            .len{
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background-color: red;
                font-size: 8px;
                color: #fff;
                text-align: center;
                line-height: 15px;
                position: absolute;
                top:10px;
                left: 45%;
            }
        }
        .box2{
            flex: 4;
            p{
                margin: 0;
                padding: 5px 10px;
            }
        }
        .box3{
            flex: 2;
            button{
                border: none;
                outline: none;
                width: 100%;
                height: 100%;
                margin: 0;
                text-align: center;
                line-height: 60px;
                background-color: #17a2b8;
            }
        }
    }
    .foodList{
        width: 100%;
        box-sizing: border-box;
        background-color: #fff;
        position: absolute;
        bottom: 110px;
        p{
            margin: 0;
            padding: 8px 15px;
            .t2{
                display: inline-block;
                width: 40px;
                text-align: center;
                margin-left: 50%;
                color: red;
                padding: 0 10px;
            }
        }
        p:first-child{
            background-color: #ccc;
            .t2{
                background-color: #cce5ff;
                margin-left: 65%;
                padding: 8px;
                color: #4e555b;
            }
        }
    }
    /*.foodList{*/
    /*    width: 100%;*/
    /*    background-color: #d39e00;*/
    /*    //position: absolute;*/
    /*    //bottom: 160px;*/
    /*    !*top: -60px;*!*/
    /*    !*left: 0;*!*/
    /*    p{*/
    /*        width: 100%;*/
    /*        background-color: #00ff33;*/
    /*        margin: 0;*/
    /*        padding: 8px 10px;*/
    /*        .t1{*/
    /*            //text-indent: 0.5px;*/
    /*        }*/
    /*        .t2{*/
    /*            //text-indent: 0.5px;*/
    /*            margin-left: 55%;*/
    /*        }*/
    /*    }*/
    /*}*/
</style>