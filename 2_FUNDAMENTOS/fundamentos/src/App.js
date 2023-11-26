//style
import './App.css';
import Challenge from './Componentes/Challenge';
//components
import Events from './Componentes/Events';
import FirstComponents from "./Componentes/FirstComponent";
import TemplateExpressions from "./Componentes/TemplateExpressions";

function App() {
  return (
    <div className="App-header">
      <h2>FUNDAMENTOS REACT</h2>
      <FirstComponents/>
      <Events/>
      <TemplateExpressions/>
      <Challenge/>
    </div>
  );
}

export default App;
