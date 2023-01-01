import Vue from "vue";

import VueRouter from "vue-router";
import MainComponent from "./components/MainComponent.vue"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:'history',
    routes: [
        { path: '/',
          name: 'restaurant', alias:'/restaurant',
          component: MainComponent
        },
        { path: '/restaurant/:slug',
          name: 'restaurants-details',
          component: () => import('./components/RestaurantDetails.vue')
        },
        { path: '/menu/:slug',
          name: 'dishes',
          component: () => import('./components/MenuComponent.vue')
        },
        { path: '*' ,
          name: "404" ,
          component: () => import('./components/notFound.vue')
    }
    ]
});

export default router;
