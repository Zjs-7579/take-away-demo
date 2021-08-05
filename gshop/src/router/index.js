import { createRouter, createWebHistory } from "vue-router";
import Msite from "../views/Msite/Msite.vue";

const routes = [
  {
    path: "/",
    redirect: "/msite"
  },
  {
    path: "/msite",
    name: "Msite",
    component: Msite,
  },
  {
    path: "/classify",
    name: "Classify",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Classify/Classify.vue"),
  },
  {
    path: "/shoplist/:id",
    name: "ShopList",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/ShopList/ShopList.vue"),
    children: [
      {
        path: "/shoplist/ordered",
        name: "Ordered",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ShopList/Ordered/Ordered.vue"),
      },
      {
        path: "/shoplist/discuss",
        name: "Discuss",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ShopList/Discuss/Discuss.vue"),
      },
      {
        path: "/shoplist/privilege",
        name: "Privilege",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ShopList/Privilege/Privilege.vue"),
      },
      {
        path: "",
        redirect: "/shoplist/ordered"
      },
    ]


  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Login/Login.vue"),
  },
  {
    path: "/user",
    name: "UserInfo",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/UserInfo/UserInfo.vue"),
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search/Search.vue"),
  },
  {
    path: "/order",
    name: "Order",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Order/Order.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
        import(/* webpackChunkName: "about" */ "../views/Profile/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
