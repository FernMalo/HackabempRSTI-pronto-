import React, { useState } from "react"
import {Link} from "react-router-dom"

import alimenticio from "../../assets/alimenticio.jfif";
import automotivo from "../../assets/automotivo.jfif";
import estetica from "../../assets/estetica.jfif";
import metalurgico from "../../assets/metalurgico.jfif";
import vestiario from "../../assets/vestiario.jfif";

export default function Card({nomeComercio,endereco,type}){

    const [image,setImage] = useState(() => {
        if(type == "1"){
            return alimenticio;
        }
        if(type == "2"){
            return automotivo;
        }
        if(type == "3"){
            return estetica;
        }
        if(type == "4"){
            return metalurgico;
        }
        if(type == "5"){
            return vestiario;
        }
    });

    return(
        <div className="card">
            <img className="cardImg" src={image}/>
            <h2>{nomeComercio}</h2>
            <p>Endereço: {endereco}</p>
        </div>
    )}