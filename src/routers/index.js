import { createWebHistory, createRouter } from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
// import Home from "@/views/Home-component.vue";
import Register from "@/views/Register-component.vue";
import Login from "@/views/Login-component.vue";
import Letterbox from "@/views/letterbox-component.vue"
import Writeletter from "@/views/Writeletter-component.vue"
import Exit from "@/views/Exit-component.vue";
import Maintest from "@/views/Main-component.vue"
import Error from "@/views/404error-component.vue"
import Test from "@/views/Test-component.vue"
const routes = [
    // {
    //     path: "/home",
    //     name: "Home",
    //     component: Home,
    // },
    {
        path: "/main",
        name: "Maintest",
        component: Maintest,
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
        path: "/letterbox/:id",
        name: "Letterbox",
        component: Letterbox,
    },
    {
        path: "/writeletter",
        name: "Writeletter",
        component: Writeletter,
    },
    {
        path: "/exit",
        name: "Exit",
        component: Exit,
    },
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: Error,
    },
    {
        path: "/user/:userID",
        name: "letterbox",
        component: Test,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;