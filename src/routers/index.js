import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Register from "@/views/Register-component.vue";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;