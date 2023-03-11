import Home from "../components/frontend/Home";
import Contact from "../components/frontend/Contact";
import Blog from "../components/frontend/Blog";
import Product from "../components/frontend/Product";
import ProductDetail from "../components/frontend/ProductDetail"

const publicRoutes = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/blog',
        component:Blog,
    },
    {
        path:'/contact',
        component:Contact,
    },
    {
        path:'/product',
        component:Product,
    },
    {
        path:'/productdetail/:id',
        component:ProductDetail,
    },
];
const privateRoutes = [];

export {publicRoutes, privateRoutes};