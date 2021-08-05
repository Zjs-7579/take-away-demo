<template>
    <div class="message" v-for="(message, index) in data" :key="index">
        <div class="img">
            <img src="../assets/images/ordered.jpeg" alt="">
        </div>
        <div class="text">
            <p>{{message.name}}</p>
            <p class="tt"><span>月售{{message.intake}}</span> <span>好评率{{message.sense}}</span></p>
            <p>
                ￥{{message.price}}
                <span><CountFoot :food="message"></CountFoot></span>
            </p>
        </div>
    </div>

</template>

<script>
    import CountFoot from './CountFoot'
    export default {
        name: "CartList",
        props: ['data'],
        components: {
            CountFoot
        }
    }
</script>

<style scoped lang="less">
    .message{
        width: 95%;
        height: 100px;
        margin: 10px auto;
        border-bottom: 0.5px solid #ccc;
        display: flex;
        .img{
            flex: 1;
            img{
                width: 70px;
            }
        }
        .text{
            flex: 2;
            span{
                padding: 0 8px 0 0;
            }
            p{
                margin: 0;
                text-align: left;
            }
            p:first-child{
                font-size: 22px;
                font-weight: bold;
            }
            .tt{
                padding: 8px 0;
                font-size: 16px;
                color: #ccc;
            }
            p:last-child{
                color: red;
                span{
                    float: right;
                }

            }
        }
    }
</style>