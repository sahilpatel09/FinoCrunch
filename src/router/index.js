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
            /* webpackChunkName: "about" */ "../views/innerPages/Transactions.vue"
          ),
      },

      {
        path: "payments",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Payments.vue"),
        meta : {
          authRequired: true,
        }
      },

    ],
  },




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


// import { supabase } from "@/supabase/supabase";
//
// router.beforeEach((to, from, next) => {
//   if(to.meta.authRequired){
//     console.log("Hello there before user")
//     const user = supabase.auth.user();
//     if(user){
//       console.log("Hello there")
//       next();
//     }else{
//       this.$router.push('/register');
//     }
//
//
//
//   }
//
// });







export default router;
