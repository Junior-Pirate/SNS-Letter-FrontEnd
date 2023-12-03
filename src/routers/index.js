import { createWebHistory, createRouter } from "vue-router";
import Register from "@/views/Register-component.vue";
import Login from "@/views/Login-component.vue";
import Letterbox from "@/views/letterbox-component.vue"
import Writeletter from "@/views/Writeletter-component.vue"
import Exit from "@/views/Exit-component.vue";
import Maintest from "@/views/Main-component.vue"
import Error from "@/views/404error-component.vue"

const routes = [
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
        path: "/letterbox/:userId", // 동적 세그먼트 : userId 사용
        name: "Letterbox",
        component: Letterbox,
        props: true, // URL 파라미터를 컴포넌트 props로 전달
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;