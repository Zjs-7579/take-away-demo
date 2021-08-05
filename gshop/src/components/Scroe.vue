<template>
    <div :class="'star-'+size" v-for="(item, index) in ScroeArr" :key="index">
        <span :class="item" ></span>
    </div>
    <span>{{scroe}}</span>
</template>

<script>
    const CLASS_ON = 'on';
    const CLASS_OFF = 'off';
    const CLASS_HALF = 'half';
    export default {
        name: "Scroe",
        data() {
            return {

            }
        },
        props: {
            scroe: Number,
            size: Number
        },
        computed: {
            ScroeArr() {
                const scs = [];
                for (let i=0; i<parseInt(this.scroe); i++) {
                    scs.push(CLASS_ON)
                }

                if(this.scroe < Math.round(this.scroe)) {
                    //console.log(this.scroe.toFixed());
                    scs.push(CLASS_HALF)
                }
                const count = 5-scs.length;
                for (let k=0; k<count; k++){
                    scs.push(CLASS_OFF)
                }
                return scs

            }
        }
    }
</script>

<style scoped lang="less">
    .star-12{
        display: inline-block;
        width: 16px;
        height: 16px;
        .on{
            display: inline-block;
            width: 14px;
            height: 14px;
            background-image: url("../assets/scroe/scroe_on.png");
            background-size: 100%;
        }
        .off{
            display: inline-block;
            width: 14px;
            height: 14px;
            background-image: url("../assets/scroe/scroe_off.png");
            background-size: 100%;
        }
        .half{
            display: inline-block;
            width: 14px;
            height: 14px;
            background-image: url("../assets/scroe/scroe_half.png");
            background-size: 100%;
        }
    }

</style>