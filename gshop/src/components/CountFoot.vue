<template>
    <button v-show="food.retail" @click="UpDataFoot(false)">-</button>
    <span v-show="food.retail">{{food.retail}}</span>
    <button @click="UpDataFoot(true)">+</button>
</template>

<script>
    export default {
        name: "CountFoot",
        props: ['food'],
        methods: {
            UpDataFoot(bool) {
                this.$store.dispatch('updata', {bool, food: this.food})
            }
        }
    }
</script>

<style scoped lang="less">
    button{
        width: 25px;
        height: 25px;
        text-align: center;
        border-radius: 50%;
        margin: 0 5px;
        background-color: #17a2b8;
    }
</style>