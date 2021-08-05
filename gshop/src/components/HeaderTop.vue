<template>
    <div class="header">
        <div>
            <slot name="left"></slot>
        </div>
        <div>
            <slot name="center"></slot>
        </div>
        <div>
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderTop"
    }
</script>

<style scoped lang="less">
    .header{
        margin: 0;
        padding: 0;
        z-index: 100;
        width: 100%;
        height: 45px;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        font-size: 21px;
        background-color: #138496;
        div:nth-child(1){
            flex: 2;
        }
        div:nth-child(2){
            flex: 8;
            overflow: hidden;/*超出部分隐藏*/
            text-overflow: ellipsis;/* 超出部分显示省略号 */
            white-space: nowrap;/*规定段落中的文本不进行换行 */


        }
        div:nth-child(3){
            flex: 2;
        }
    }
</style>