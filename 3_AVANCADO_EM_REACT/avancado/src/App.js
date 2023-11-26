import './App.css';
import Atlanta from './assets/img2.jpeg'

function App() {
  return (
    <div className="App-header">
      <h3>Avançado em React</h3>
      {/* imagem em public */}
      <div>
        <img src="/img1.webp" alt="imagem cidade" />
      </div>
      {/* imagem em assets */}
      <div>
        <img src={Atlanta} alt="logo atlanta tecnologia" />
      </div>
    </div>
  );
}

export default App;
