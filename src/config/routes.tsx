import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import Index from "../pages/Index/Index";
import Login from "../components/Login/Login";
import { ABOUT, CONTACT, INDEX, LOGIN, PRODUCTS } from "./url";
import { FaUser } from "react-icons/fa";

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
]

export const icon = [
    
    {
        path: LOGIN,
        name: "Login",
        element: <Login/>,  
        icon: <FaUser/>
    }
]
