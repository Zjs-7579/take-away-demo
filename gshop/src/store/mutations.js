
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

export default {
    [GET_ADDRESS](state, address) {
        state.address = address
    },
    [GET_NAV](state, nav) {
        //console.log(nav);
        const arr =[];
        let minArr = [];
        nav.forEach((res)=>{
            if (minArr.length===8){
                minArr = []
            }
            if(minArr.length===0){
                arr.push(minArr)
            }
            minArr.push(res);
        });
        //console.log(arr);
        state.nav = arr
    },
    [GET_SHOPS](state, shops) {
        state.shops = shops
    },

    [GET_VERIFY](state, verify) {
        state.verify = verify
    },
    [GET_SHOPLIST](state, shoplist) {
        state.shoplist = shoplist
    },
    userID(state, data) {
        //console.log(data);
        state.userInfo.user = data.username;
        state.userInfo.phoneID = '';
    },
    Call(state, data) {
        //console.log(data);
        state.userInfo.user = '';
        state.userInfo.phoneID = data.phone;
    },
    UserOut(state) {
        state.userInfo.user = '';
        state.userInfo.phoneID = '';
    },

    [GET_DISCUSS](state, discuss) {
        state.discuss = discuss
    },

    [GET_ORDERED](state, ordered) {
        state.ordered = ordered
    },
    [UPDATAADD](state, food) {
        food.retail ++
    },
    [UPDATADEL](state, food) {
        food.retail --
    },
    [FOODDEL](state, food) {
        //console.log(state.food);
        food.forEach(res => {
            res.retail = 0
        })
    }
}