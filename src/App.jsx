import React from "react";
import "./style/style.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  Index from "./pages";
import  Form from "./pages/form";

export default function App(){
return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/form" element={<Form/>}/>
        </Routes>
        </BrowserRouter>
    )
}