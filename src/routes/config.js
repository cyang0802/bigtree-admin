import Error from "@/pages/error";
import Login from "@/pages/login";
import PrivateRouter from "./guard/private-router";

const routes = {
    menus: [
        {
            exact: true,
            path: "/",
            breadcrumb: "首页",
            component: PrivateRouter,
        },
    ],
    other: [
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/404",
            component: Error,
        },
        {
            path: "**",
            component: Error,
        }
    ],
};

export default routes;