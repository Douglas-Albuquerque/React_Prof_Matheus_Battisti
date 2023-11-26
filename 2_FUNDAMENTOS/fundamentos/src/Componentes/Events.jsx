import React from 'react'

const Events = () => {
    const handleMyEvent = (e) =>{
        console.log(e);
        console.log("Clicou");
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=> console.log("clicou denovo")}>Click</button>
            </div>
        </div>
    )
}

export default Events
