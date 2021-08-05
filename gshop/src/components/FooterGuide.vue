<template>
    <div class="footer">
        <div>
            <router-link to="/" :class="{on: $route.path === '/msite'}">
                <span class="iconfont icon-U"></span>
                <span>首页</span>
            </router-link>
        </div>


        <div>
            <router-link to="/search" :class="{on: $route.path === '/search'}">
                <span class="iconfont icon-sousuo"></span>
                <span>搜索</span>
            </router-link>
        </div>

        <div>
            <router-link to="/order" :class="{on: $route.path === '/order'}">
                <span class="iconfont icon-dingdan-"></span>
                <span>订单</span>
            </router-link>
        </div>

        <div>
            <router-link to="/profile" :class="{on: $route.path === '/profile'}">
                <span class="iconfont icon-wode"></span>
                <span>我的</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterGuide"
    }
</script>

<style scoped lang="less">
    .footer{
        background-color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        z-index: 100;
        width: 100%;
        height: 50px;
        font-size: 16px;
        border-top: 1px solid #1b1e21;
        & .on{
            color: red;
        }
        div{
            flex: 1;
            text-align: center;
            padding: 4px 0;
            span{
                display: block;
                padding: 2px;
            }
        }

    }

</style>