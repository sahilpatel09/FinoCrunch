import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },

  // {
  //   path: "/admin",
  //   redirect: "/admin/dashboard",
  //   name: "Dashboard",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
  //   children: [
  //     {
  //       path: "/admin/dashboard",
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "about" */ "../components/Dashboard/MainScreen.vue"
  //         ),
  //     },
  //     {
  //       path: "transactions",
  //       component: () =>
  //         import(
  //           /* webpackChunkName: "about" */ "../components/Transactions.vue"
  //         ),
  //     },
  //   ],
  // },

  {
    path: "/admin",
    redirect: "/admin/dashboard",
    name: "Dashboard",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/admin/dashboard",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Dashboard/MainScreen.vue"
          ),
      },
      {
        path: "transactions",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Transactions.vue"
          ),
      },

      {
        path: "payments",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Payments.vue"),
      },
    ],
  },

  // {
  //   path: "/admin",
  //   redirect: "/admin/dashboard",
  //   component: Admin,
  //   children: [
  //     {
  //       path: "/admin/dashboard",
  //       component: Dashboard,
  //     },
  //     {
  //       path: "/admin/settings",
  //       component: Settings,
  //     },
  //     {
  //       path: "/admin/tables",
  //       component: Tables,
  //     },
  //     {
  //       path: "/admin/maps",
  //       component: Maps,
  //     },
  //   ],
  // },

  {
    path: "/:pathMatch(.*)*",
    name: "404",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
