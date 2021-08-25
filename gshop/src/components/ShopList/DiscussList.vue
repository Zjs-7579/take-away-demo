<template>
    {{DiscussList}}
    <div class="discussList" v-for="item in DataList" :key="item.id">
        <div class="left">
            <img src="../../assets/icon/yonghu.png" alt="">
        </div>
        <div class="right">
            <p>{{item.name}} <span>{{item.date}}</span></p>
            <p><Scroe :scroe="item.scroe" :size="12"></Scroe></p>
            <p>{{item.context}}</p>
        </div>
    </div>
</template>

<script>
    import Scroe from '../Scroe'
    export default {
        name: "DiscussList",
        props: ['DataList'],
        components: {
            Scroe,
        }
    }
</script>

<style scoped lang="less">
    .discussList{
        width: 100%;
        height: 150px;
        border-top: 0.5px solid #ccc;
        display: flex;
        span{
           float: right;
            padding: 0 10px;
        }
        .left{
            flex: 1;
            img{
                width: 50px;
                height: 50px;
                margin: 10px;
            }
        }
        .right{
            flex: 4;
            p{
                width: 100%;
                padding: 0;
                margin: 5px 0;
                text-align: left;
            }
            p:first-child{
                margin-top: 10px;
                color: #ccc;
            }
            p:last-child{
                width: 95%;
                height: 70px;
                display: block;
                padding: 0;
                margin: 0;
                overflow: hidden;
                word-wrap:break-word;
                overflow-wrap: break-word;
            }
        }
    }
</style>