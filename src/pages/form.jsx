import React, { useEffect, useState } from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const App = () => {

    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [comercioNome,setComercioNome] = useState("");
    const [CpfCnpj,setCpfCnpj] = useState("");
    const [bairro,setBairro] = useState("1");
    const [ramo,setRamo] = useState("1");
    const [endereço,setEndereço] = useState("");
    const [text,setText] = useState("");
    const [URL,setURL] = useState("");

    useEffect(() => {
        console.log(bairro);
    },[bairro]);

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/comercios",{
            nome,
            email,
            number,
            comercioNome,
            CpfCnpj,
            bairro: Number(bairro),
            ramo : Number(ramo),
            endereço,
            text,
            URL            
        })
      };
    


    return (
        <>
            <Header />
            <h1>Cadastre sua empresa</h1>
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    <div className="form_group">
                        <label>Nome do proprietário</label>
                        <span><input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required/></span>
                    </div>
                    <div className="form_group">
                        <label>E-mail</label>
                        <span><input type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required></input></span>
                    </div>
                    <div className="form_group">
                        <label>Número de telefone</label>
                        <span><input type="text" placeholder="(01)2345-6789" value={number} onChange={(e) => setNumber(e.target.value)} required></input></span>
                    </div>
                    <div className="form_group">
                        <label>Nome do Comércio</label>
                        <span><input type="text" placeholder="Exemplo: Nome" value={comercioNome} onChange={(e) => setComercioNome(e.target.value)} required></input></span>
                    </div>
                    <div className="form_group">
                        <label>CNPJ ou CPF</label>
                        <span><input type="text" placeholder="xxx.xxx.xxx/xxxx-xx" value={CpfCnpj} onChange={(e) => setCpfCnpj(e.target.value)} required></input></span>
                    </div>
                    <div className="form_group">
                        <label>Bairro</label>
                        <span>
                            <select value={bairro} onChange={(e) => setBairro(e.target.value)} required>
                                <option selected disabled> Selecione um bairro</option>
                                <option value="1">Areal</option>
                                <option value="2">Três Vendas</option>
                                <option value="3">Barragem</option>
                                <option value="4">Centro</option>
                                <option value="5">Fragata</option>
                                <option value="6">Laranjal</option>
                                <option value="7">Porto</option>
                            </select>
                        </span>
                    </div>
                    <div className="form_group">
                        <label>Ramo Comercial</label>
                        <span>
                            <select value={ramo} onChange={(e) => setRamo(e.target.value)} required>
                            <option selected disabled> Selecione o ramo do comércio</option>
                                <option value="1">Alimentício</option>
                                <option value="2">Automotivo</option>
                                <option value="3">Estética</option>
                                <option value="4">Metalurgia</option>
                                <option value="5">Vestiário</option>
                            </select>
                        </span>
                    </div>
                    <div className="form_group">
                        <label>Endereço</label>
                        <span><input type="text" placeholder="Duque de caxias - 12345" value={endereço} onChange={(e) => setEndereço(e.target.value)} required></input></span>
                    </div>
                    <div className="form_group" id="textSection">
                        <label>Descrição/informações adicionais do comércio</label>
                        <span><textarea value={text} onChange={(e) => setText(e.target.value)} placeholder='Insira a descrição' maxlength='100' minlength='30' required/></span>
                    </div>
                    <div className="form_group">
                        <label>Enviar imagem principal</label>
                        <span>
                            <input
                                type="text"
                                placeholder="Apenas URL compatível"
                                value={URL}
                                onChange={(e) => setURL(e.target.value)}
                                required
                            />
                        </span>
                    </div>
                    <div className="form_group">
                        <label></label>
                        <span>
                            {URL && (
                                <img src={URL} alt="Imagem principal" />
                            )}
                        </span>
                    </div>
                    <p className="pForm">Caso esteja tudo pronto, clique no botão “Enviar” para efetuar o cadastro</p>
                    <div className="submit">
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </form>
            <Footer/>
        </>
    )
}

export default App;
