import './App.css';
import Photo from './components/foto/photo'
import Natinhaeu from './assets/eu-natinha.jpeg'
function App() {
  return (
    <>
      <div className="App">
        <h1>NAT-LOVE</h1>
        <h3>COMING SOON ...</h3>
        <Photo className="App" endereco={Natinhaeu}/>  
      </div>
    </>
  );
}

export default App;
