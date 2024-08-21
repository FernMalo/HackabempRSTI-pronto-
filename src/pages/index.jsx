import React, { useEffect, useState } from "react";
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import Banner from "../assets/mercadoPublico.png"
import Card from "../components/layout/card"
import axios from "axios";

import Logo from "../assets/Logo.png";

export default function Index(){

    const [data,setData] = useState([]);
    const [bairro,setBairro] = useState(0)
    const [ramo,setRamo] = useState("");
    const [response,setResponse] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/comercios")
        .then((Response) => {
            setData(Response.data);
        })
    },[])

    useEffect(() => {
        if(data.length > 0){
            const dados = data.filter((element) => (element.bairro == bairro) && (element.ramo == ramo));
            setResponse(dados);
        } 

    },[ramo,bairro])
   
    return(
        <>
        <Header/>
        <main>
            <h1>Busque por empresas e comércios em seu bairro</h1>
            <img src={Banner} className="banner"/>
            <div>
                <div className="botaoBairroSection">
                    <button onClick={() =>setBairro(1)} className="botaoBairro" id="areal">Areal</button>
                    <button onClick={() => setBairro(2)} className="botaoBairro">Barragem</button>
                    <button onClick={() => setBairro(3)} className="botaoBairro">Centro</button>
                    <button onClick={() => setBairro(4)} className="botaoBairro">Fragata</button>
                    <button onClick={() => setBairro(5)} className="botaoBairro">Laranjal</button>
                    <button onClick={() => setBairro(6)} className="botaoBairro">Porto</button>
                    <button onClick={() => setBairro(7)} className="botaoBairro" id="tresvendas">T.Vendas</button>
                </div>
                <div className="selectSection">
                    <h2>Selecione o ramo comercial</h2>
                    <select onChange={(e) => setRamo(e.target.value)} name="Ramo">
                                <option value="1">Alimentício</option>
                                <option value="2">Automotivo</option>
                                <option value="3">Estética</option>
                                <option value="4">Metalurgia</option>
                                <option value="5">Vestiário</option>
                    </select>
                </div>
            </div>
            <div className="cardSection">
                {response.map((element) => {
                    return(
                        <Card
                            endereco={element.endereço}
                            nomeComercio={element.comercioNome}
                            type={element.ramo}
                        />
                    )
                })}
            </div>
        </main>
        <Footer/>
        </>
    )
}