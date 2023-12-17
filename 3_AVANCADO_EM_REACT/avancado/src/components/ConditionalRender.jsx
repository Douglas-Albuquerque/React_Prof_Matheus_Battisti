import React, { useState } from 'react'

const ConditionalRender = () => {

    const [x] = useState(true)
    const [name, setName] = useState('antonio')
    return (
        <div>
            <p>Isso será exibido?</p>
            {x && <p>Se x for true, Sim!</p>}
            {!x && <p>Agora x é falso</p>}
            <p>IF Ternário</p>
            {name === 'Douglas'
                ? (
                    <div>
                        <p>O nome é Douglas</p>
                    </div>
                )
                : (
                    <div>
                        <p>Nome NÃO encontrado </p>
                    </div>
                )
            }
            <button onClick={() => (setName("Douglas"))}>clique aqui</button>
        </div>
    )
}

export default ConditionalRender
