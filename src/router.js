import {createRouter, createWebHistory} from "vue-router";
import Layout from "@/components/Layout.vue";
import Login from "@/components/Login.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Layout,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        }
    ]
});

export default router;