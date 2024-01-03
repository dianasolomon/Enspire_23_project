import React from "react";
import Navbar from "./Componets/Navbar";
import Footer from "./Componets/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;