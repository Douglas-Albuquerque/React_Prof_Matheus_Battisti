import {useState } from 'react';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
//import ListRender from './components/ListRender';
//import Atlanta from './assets/img2.jpeg'
//import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import FragmentReact from './components/FragmentReact';

function App() {
  //const name = "João";
  const userName = useState("Letycia");
  const cars = [
    {id: 12354, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0},
    {id: 32165, brand: "Ford", color: "Preto", newCar: false, km: 321654},
    {id: 98754, brand: "Fiat", color: "Chumbo", newCar: false, km: 45875}
  ]
  return (
    <div className="App-header">
      {/*       <h3>Avançado em React</h3>
    
      <div>
        <img src="/img1.webp" alt="imagem cidade" />
      </div>
   
      <div>
        <img src={Atlanta} alt="logo atlanta tecnologia" />
      </div> */}
      {/* <ManageData/>
      <ListRender/> */}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
{/*       <CarDetails
        brand="Reanult"
        km={136200}
        color="vermelha"
        newCar={false}
        /> */}
    {/* Reaproveitamento */}
      {/*<CarDetails
        brand="Fiat"
        km={20000}
        color="vermelha"
        newCar={false}
        />
      <CarDetails
        brand="VW"
        km={0}
        color="Amarela"
        newCar={true}
      /> */}
      {/* Loop em array de objetos */}
      {cars.map((car)=>(
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}
      {/* fragment */}
      <FragmentReact propsFrag="TESTE"/>
    </div>
  );
}

export default App;
