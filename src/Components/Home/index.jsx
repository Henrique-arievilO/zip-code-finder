import React, { useState } from 'react'
import Form from '../Form'
import * as S from './style'

export default function Home() {
    const [click, setClick] = useState(false);

    function Modal() {
        setClick(!click)
    }

    return (

        <S.Section>
            <S.Title>Buscador de CEP</S.Title>
            <S.Button onClick={() => { Modal() }}>{click ? 'Voltar' : 'Ir'}</S.Button>
            {click && <Form />}
        </S.Section>

    )
}