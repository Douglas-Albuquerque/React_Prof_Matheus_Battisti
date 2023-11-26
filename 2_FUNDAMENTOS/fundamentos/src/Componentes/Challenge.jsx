import React from 'react'

const Challenge = () => {
    let a = 2;
    let b = 3;
    const handleSum = (e) => {
        return(
            document.getElementById("result").innerHTML = a+b
        );
    };
    const clear = () => {
        document.getElementById("result").innerHTML = ""
    }
  return (
    <div>
      {a} + {b} = <span id='result'></span>
      <br/>
      <button onClick={handleSum}>Soma</button> <button onClick={clear}>Limpar</button>
    </div>
  )
}

export default Challenge
