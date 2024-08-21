import React from "react"
import {Link} from "react-router-dom"
import logo from "../../assets/Logo.png"

export default function Header(){
    return(
        <header>
            <div className="headerfooterContent">
                <img src={logo}/>
                <nav className="headerNav">
                    <Link to="/">Início</Link>
                    <Link to="/">Quem somos</Link>
                    <Link to="/">Notícias</Link>
                    <Link to="/">Contato</Link>
                    <Link to="/">Comércios locais</Link>
                    <Link to="/form">Cadastre seu comércio</Link>
                </nav>
            </div>
        </header>
    )
}