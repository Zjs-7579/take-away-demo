<template>
    <HeaderTop>
        <template  v-slot:left >
            <span class="left"></span>
        </template >

        <template  v-slot:center >
            <span class="center">{{title}}</span>
        </template >

        <template  v-slot:right >
            <span class="right"></span>
        </template >
    </HeaderTop>
   <div>
        <div class="search">
            <input type="text" placeholder="商品名称" v-model="name" @focus="focusName">
            <button @keyup.enter="search" @click="search(name)">搜索</button>
        </div>
    </div>
    <ul class="listName" v-show="isName">
        <li v-for="(item, index) in list" :key="index" @click="Name(item.name)">{{item.name}}</li>
    </ul>
    <shop :shopsList="shopsList"></shop>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop'
    import shop from '../../components/Msite/Shop'
    import {mapState} from 'vuex'
    export default {
        name: "Search",
        data() {
          return {
              title: '搜索',
              name: '',
              isName: false,
              shopsList: ''
          }
        },
        computed: {
            ...mapState(['shops']),
            list: {
                get() {
                    //console.log(this.name);
                    let data = this.shops.filter((res) => {
                        return res.name.includes(this.name);
                    });
                    if (data.length > 4) {
                        data.splice(4)
                    }
                    //console.log(data);
                    return data;
            },
                set(data) {
                    this.list = data
                }
            }

        },
        methods: {
            Name(value) {
                this.name = value;
                this.isName = false
            },
            focusName() {
                this.isName = true

            },
            search(value) {
                this.shopsList = this.shops.filter((res) => {
                    return res.name.includes(value);
                });

            },

            link(id) {
                //console.log(id);
                this.$store.dispatch('get_ShopList', id)
            }
        },
        components: {
            HeaderTop,
            shop
        }
    }
</script>

<style scoped lang="less">
    .search{
        position: relative;
        width: 90%;
        height: 60px;
        margin: 20px auto;
        background-color: red;
        display: flex;
        input{
            width: 75%;
            font-size: 18px;
        }
        button{
            width: 25%;
        }
    }
    .listName{
        padding: 0;
        z-index: 5;
        list-style: none;
        display: block;
        width: 90%;
        position: absolute;
        left: 20px;
        top: 110px;
        li{
            display: block;
            text-indent: 1em;
            padding: 3px 0;
            color: #c8cbcf;
        }
    }
    .shopList {
        width: 100%;
        height: 100px;
        display: flex;
        font-size: 14px;
        margin-bottom: 10px;

        .shopImg {
            flex: 1;

            img {
                display: block;
                width: 80px;
                margin: 10px 0;
            }
        }

        .shopDetail {
            flex: 2.5;

            .Detail1 {
                width: 100%;
                height: 30px;
                display: flex;

                img {
                    width: 18px;
                    display: inline-block;
                    margin: 6px 10px;
                    background-color: #d39e00;
                    flex: 1;
                }

                span {
                    display: inline-block;
                    flex: 9;
                    line-height: 30px;
                    overflow-wrap: normal;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                }
            }

            .Detail2 {
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
            }

            .Detail3 {
                width: 100%;
                height: 30px;
                line-height: 30px;
                margin-left: 10px;
            }
        }

        .shopWaitress {
            flex: 1;

            div {
                width: 100%;
                height: 50%;
                display: flex;

                span {
                    display: block;
                    color: #ccc;
                    margin: auto;
                    border: 1px solid #ccc;
                }

            }

            .songcan {
                display: block;
                margin: 0 auto;
                background-color: #17a2b8;
            }

        }
    }
</style>