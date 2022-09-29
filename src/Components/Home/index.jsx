import React, { useState } from 'react'
import Form from '../Form'

export default function Home() {
    const [click, setClick] = useState(false);

    function Modal() {
        setClick(!click)
    }

    return (
        <>
            <h1>Buscador de CEP</h1>
            <button onClick={() => { Modal() }}>{click ? 'Voltar' : 'Ir'}</button>
            {click && <Form />}
        </>
    )
}