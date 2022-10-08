import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface  Route {
    to:string;
    path:string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;//El componente
    name: string;  //Es el nombre con el que aparecera
}

//Se define un componente que va a ser cargado bajo demanda, los comentarios son para darle un nombre al chunck

const LazyLayout = lazy( () => import(/* webpackChunkName:"LazyLayout" */'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        path:'/lazyload/*',
        to:'/lazyload/',
        Component: LazyLayout, //El componente
        name: 'LazyLayout - Dash'  //Es el nombre con el que aparecera
    },

    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy, //El componente
        name: 'No Lazy'  //Es el nombre con el que aparecera
    },



]