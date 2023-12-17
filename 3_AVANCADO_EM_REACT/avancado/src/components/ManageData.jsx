import React, { useState } from 'react'

const ManageData = () => {
    let someData = 15;
    const [number, setNumber] = useState(15)
    
    return (
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => (someData = 20)}>Mudar váriavel</button>
            <div><br/>
                valor: {number}<br/><br/>
                <button onClick={()=> setNumber(25)}>mudar state</button>
                <button onClick={()=> setNumber(15)}>voltar state</button>
            </div>
        </div>
    )
}

export default ManageData
