import { LazyExoticComponent } from 'react';
import { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';


type JSXComponent=()=>JSX.Element;

interface Route {
    path:string;
    component:LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
    children?:Route[];
}

// const LazyPage1 = lazy(()=>import(/*webpackChunkName:"Lazypage1" */'../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(()=>import(/*webpackChunkName:"Lazypage2" */'../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(()=>import(/*webpackChunkName:"Lazypage3" */'../01-lazyload/pages/LazyPage3'));
 const LazyLayout = lazy(()=>import(/*webpackChunkName:"LazyLayout" */'../01-lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    {
        path: '/lazyload/*',
        component:LazyLayout,
        name:'LazyLoading Nested'
    },
    {
        path: '/nolazy',
        component:NoLazy,
        name:'No Lazy Loading'
    },
    {
        path: '/',
        component:ShoppingPage,
        name:'Shopping Page'
    }
];