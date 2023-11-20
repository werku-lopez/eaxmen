import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import LogOutComponent from "./components/LogOutComponent.vue";
import SignInComponent from "./components/SignInComponent.vue";
import CuboComponent from "./components/CuboComponent.vue";
import SeguridadComponent from "./components/SeguridadComponent.vue";
import Perfil from "./components/PerfiComponent.vue";
import Compras from "./components/ComprasComponent.vue";
import MarcaComponent from "./components/MarcasComponent.vue";

const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/login", component: LoginComponent },
    { path: "/logOut", component: LogOutComponent },
    { path: "/signIn", component: SignInComponent },
    { path: "/cubo/:idCubo", component: CuboComponent },
    { path: "/seguridad/:token", component: SeguridadComponent },
    {path:"/perfil/:token", component: Perfil},
    {path:"/compras/:idUsuario", component: Compras},
    {path:"/marca/:marca", component: MarcaComponent}
]

const route = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});

export default route;