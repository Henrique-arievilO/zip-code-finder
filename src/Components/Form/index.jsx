import React, { useState } from 'react';
import axios from 'axios';

export default function Modal() {
    const [input, setInput] = useState('');
    const [adress, setAdress] = useState({
        rua: '',
        bairro: '',
        cidade: '',
        estado: ''
    })

    let API = `https://viacep.com.br/ws/${input}/json/`;

    function getCEP() {
        axios.get(API).then((Response) => {
            console.log(Response)
            setAdress({
                rua: Response.data.logradouro,
                bairro: Response.data.bairro,
                cidade: Response.data.localidade,
                estado: Response.data.uf
            })
        })
    }

    return (
        <>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={() => { getCEP() }}>Pesquisar</button>
            <div>
                <h3>{adress.rua}</h3>
                <p>{adress.bairro}</p>
                <p>{adress.cidade} {adress.estado}</p>
            </div>
        </>
    )
}