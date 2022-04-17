import Header from './components/header/Header';
import './App.css';

function App() {

  let activeButton = 'graph3D'

  const showPage = name => {
    console.log(name);
    activeButton = name;
  }

  return (
    <div className="App">
      <Header
        showPage = { showPage }
        activeButton = { activeButton }
      ></Header>
    </div>
  );
}

export default App;
