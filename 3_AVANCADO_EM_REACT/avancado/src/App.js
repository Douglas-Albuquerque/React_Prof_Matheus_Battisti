import './App.css';
import ListRender from './components/ListRender';
//import Atlanta from './assets/img2.jpeg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App-header">
{/*       <h3>Avançado em React</h3>
    
      <div>
        <img src="/img1.webp" alt="imagem cidade" />
      </div>
   
      <div>
        <img src={Atlanta} alt="logo atlanta tecnologia" />
      </div> */}
      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
