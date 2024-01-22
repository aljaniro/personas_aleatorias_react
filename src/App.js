
import './App.css';

import { Title } from './components/title';
import Buscador from './components/buscador';
import Lista from './components/lista';

function App() {
  
  
  return (
    <div className="App">
    <Title>BUSCADOR DE PERSONAS</Title>
    
    <div style={{display:"grid",placeItems:"center"}}><Buscador/></div>
    <Lista></Lista>
    </div>
  );
}

export default App;
