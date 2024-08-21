import React from "react"
import {Link} from "react-router-dom"
import Youtube from "../../assets/YouTube.png"
import Instagram from "../../assets/Instagram.png"
import Facebook from "../../assets/Facebook.png"

export default function Footer(){
    return(
        <footer>
            <div className="headerfooterContent">
            <nav className="footerNav">
                <Link to='/'><img src={Youtube}/></Link>
                <Link to='/'><img src={Facebook}/></Link>
                <Link to='/'><img src={Instagram}/></Link>
            </nav>
            <p>Desenvolvido por estudantes do programa bairro empreendedor</p>
            </div>
        </footer>
    )
}