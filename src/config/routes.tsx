import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import Index from "../pages/Index/Index";
import Login from "../components/Login/Login";
import { ABOUT, CONTACT, INDEX, LOGIN, PRODUCTS, SHOPPING } from "./url";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export const routes  = [
    {
        path: INDEX,
        name: "Inicio",
        element: <Index/> 
    },
    
    {
        path: ABOUT,
        name: "Acerca de nostros",
        element: <About/>  
    },
    
    {
        path: PRODUCTS,
        name: "Productos",
        element: <Products/>  
    },

    {
        path: CONTACT,
        name: "Contactanos",
        element: <Contact/>  
    },

    {
        path: LOGIN,
        // name: "Login",
        element: <Login/>,
    }
]

export const icons = [
    
    {
        path: LOGIN,
        name: "Login",  
        icon: <FaUser/>  
    },

    {
        path: SHOPPING,
        name: "Shopping",  
        icon: <FaCartShopping/>
    }
]
