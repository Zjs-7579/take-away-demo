<template>
    <div>
        <p>
            <span class="on1">首单</span>
            <span class="tt">新用户下单立减17（不与其它活动共享）</span>
        </p>

        <p v-for="(item,index) in sum" :key="index">
            <span class="title">满减</span>
            <span class="tt">
                满{{Math.floor(Math.random()*10+1)*10}}减{{Math.floor(Math.random()*5+1)*Math.floor(Math.random()*10+1)}}
        </span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ReelList",
        props: ['sum']
    }
</script>

<style scoped lang="less">
    .on1 {
        background-color: red;
        padding: 1px 6px;
        margin-left: 10px;
        border-radius: 5px;
        color: white;
    }

    .tt {
        padding: 1px 10px;
    }

    .title {
        background-color: #d39e00;
        padding: 1px 6px;
        margin-left: 10px;
        border-radius: 5px;
        color: white;
    }
</style>