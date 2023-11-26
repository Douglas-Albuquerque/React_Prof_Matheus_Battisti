const equipamentos = [
    {cod: "ATS0001", regiao: 1},
    {cod: "ATS0002", regiao: 2},
    {cod: "ATS0003", regiao: 3},
    {cod: "ATS0004", regiao: 4}
];

const equip = equipamentos.filter((equips) => {
    if(equips.regiao >= 3){
        return equips
    }
});

console.log(equip);


//map

const equipamentosB = [
    {cod: "ATS0001", regiao: 1, tipo: "LPR"},
    {cod: "ATS0002", regiao: 2, tipo: "LPR"},
    {cod: "ATS0003", regiao: 3, tipo: "RADAR"},
    {cod: "ATS0004", regiao: 4, tipo: "RADAR"}
];

equipamentosB.map((equip) => {
    if(equip.tipo === "RADAR"){
        equip.status = "ativo"
    }
})

//trazendo somente os dados que desejo do array contruindo um novo array com map 
const tipos = [...new Set(equipamentosB.map(equip => equip.cod))];
console.log(tipos);

console.log(equipamentosB);