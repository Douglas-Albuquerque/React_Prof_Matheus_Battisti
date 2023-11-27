import React, { useState } from 'react'

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(15)
    return (
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar váriavel</button>
            <div>
                valor: {number}<br/>
                <button onClick={()=> setNumber(25)}>mudar state</button>
                <button onClick={()=> setNumber(15)}>voltar state</button>
            </div>
        </div>
    )
}

export default ManageData
