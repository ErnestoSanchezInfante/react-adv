import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface  Route {
    to:string;
    path:string;
    Component:  LazyExoticComponent<JSXComponent> | JSXComponent;//El componente
    name: string;  //Es el nombre con el que aparecera
}

//Se define un componente que va a ser cargado bajo demanda

const Lazy1 = lazy( () => import(/* webpackChunkName:"LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy( () => import(/* webpackChunkName:"LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy( () => import(/* webpackChunkName:"LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to:'/lazy1',
        path:'lazy1',
        Component: Lazy1, //El componente
        name: 'Lazy-1'  //Es el nombre con el que aparecera
    },

    {
        to:'/lazy2',
        path:'lazy2',
        Component: Lazy2, //El componente
        name: 'Lazy-2'  //Es el nombre con el que aparecera
    },

    {
        to:'/lazy3',
        path:'lazy3',
        Component: Lazy3, //El componente
        name: 'Lazy-3'  //Es el nombre con el que aparecera
    },

]