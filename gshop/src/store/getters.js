export default {
    price(state) {
        let data = state.ordered.data;
        let ruselt = [];
        let cart='';
        for (let item in data) {
            let dataList = data[item].list;
            for (let list in dataList) {
                ruselt.push(dataList[list])
            }
        }
        cart = ruselt.filter(res => {
            if (res.retail > 0) {
                return res
            }
        });
        state.food = cart;
        if (state.food.length) {
            return cart.reduce(function(total, num) {
                return total + num.price * num.retail
            }, 0);
        } else {
            return 0;
        }
    },
    nav: (state) => (id) => {
        let nav = state.nav;
        let name;
        for (let i = 0; i < nav.length; i++) {
            nav[i].forEach(res => {
                if(res.id === Number(id)) {
                    name = res.title;
                }
            })
        }

        return name
    },

    list: (state) => (name)=> {
        let list = state.shops;
        let shoplist = [];
        list.forEach(res => {
            let title = res.category;
            if (title.includes(name)) {
                shoplist.push(res);
            }
        });
        if (shoplist) {
            return shoplist
        } else {
            return 0
        }
    }
}