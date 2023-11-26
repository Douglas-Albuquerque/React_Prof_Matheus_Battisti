import React from 'react'

const TemplateExpressions = () => {
    const name = "Douglas"
    const data = {
        age: 32,
        job: "Suport"
    };
  return (
    <div>
    <h1>Olá {name}, tudo bem? </h1>
    <p>Você atua como: {data.job}</p>
    <p>E tem {data.age} anos de idade.</p>
    </div>
  )
}

export default TemplateExpressions
