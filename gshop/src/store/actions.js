import {
    GET_ADDRESS,
    GET_NAV,
    GET_SHOPS,
    GET_VERIFY,
    GET_SHOPLIST,
    GET_DISCUSS,
    GET_ORDERED,
    UPDATAADD,
    UPDATADEL,
    FOODDEL
} from './mutations-types'

import {reqdata} from "../api/transfer";

export default {
     async get_Address({commit}) {
         await reqdata('http://localhost:3000/position').then(
            res=> {
                const address = res;
                commit(GET_ADDRESS, address)
            }
        ).catch(
            error => console.log('position数据错误：'+error)
         )
    },
    async get_Nav({commit}) {
        await reqdata('http://localhost:3000/data').then(
            res=> {
                const nav = res;
                commit(GET_NAV, nav)
            }
        ).catch(
             error => console.log('data数据错误：'+error)
         )
    },
    async get_Shops({commit}) {
        await reqdata('http://localhost:3000/shops').then(
            res=> {
                const shops = res;
                commit(GET_SHOPS, shops)
            }
        ).catch(
             error => console.log('shops数据错误：'+error)
         )
    },

    async get_Verify({commit}) {
        await reqdata('http://localhost:3000/verify').then(
            res=> {
                const verify = res;
                commit(GET_VERIFY, verify)
            }
        ).catch(
            error => console.log('verify数据错误：'+error)
        )
    },

    async get_ShopList({commit}, data) {
        await reqdata('http://localhost:3000/shops/'+data).then(
            res=> {
                const shoplist = res;
                commit(GET_SHOPLIST, shoplist)
            }
        ).catch(
            error => console.log('position数据错误：'+error)
        )
    },

    async get_Discuss({commit}, data) {
        await reqdata('http://localhost:3000/discuss/'+data).then(
            res=> {
                const discuss = res;
                commit(GET_DISCUSS, discuss)
            }
        ).catch(
            error => console.log('discuss数据错误：'+error)
        )
    },

    async get_Ordered({commit}, data) {
        await reqdata('http://localhost:3000/ordered/'+data).then(
            res=> {
                const ordered = res;
                commit(GET_ORDERED, ordered)
            }
        ).catch(
            error => console.log('ordered数据错误：'+error)
        )
    },

    updata({commit}, {bool, food}) {
         if (bool) {
             commit(UPDATAADD, food)
         } else {
             commit(UPDATADEL, food)
         }
    },

    foodDel({commit}, {food}) {
        //console.log(food);
        commit(FOODDEL, food)
    }
}