import React, { useState } from 'react';
import axios from 'axios';
import * as S from './style'
import Search from '../../assets/search.png'

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

    function Clear() {
        setAdress('')
        setInput('')
    }

    return (
        <S.Modal>
            <S.Box>
                <S.Input value={input} onChange={e => setInput(e.target.value)} />
                <S.Button onClick={() => { getCEP() }}>
                    <S.Image src={Search} alt="Lupa para pesquisar" />
                </S.Button>
            </S.Box>
            <S.Container>
                <S.Subtitle>{adress.rua}</S.Subtitle>
                <S.P>{adress.bairro}</S.P>
                <S.P>{adress.cidade} {adress.estado}</S.P>
            </S.Container>
            <S.Box>
                <S.Button id='singleButton' onClick={() => { Clear() }}>Limpar</S.Button>
            </S.Box>
        </S.Modal>
    )
}