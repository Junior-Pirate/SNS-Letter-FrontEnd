import { createWebHistory, createRouter } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home-component.vue";
import Register from "@/views/Register-component.vue";
import Login from "@/views/Login-component.vue";
import Test from "@/views/Test-component.vue"
const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/test",
        name: "Test",
        component: Test,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;