import React from 'react'

const Events = () => {
    const handleMyEvent = (e) =>{
        alert("Clicou");
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizo isso</h1>
        } else {
            return <h1>Renderizo aquilo</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={()=> alert("clicou denovo")}>Click</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events
