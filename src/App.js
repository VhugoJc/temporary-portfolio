import Home from'./pages/Home';
import MenuTop from './components/MenuTop/MenuTop';
import './App.scss';


function App() {
  
  return (
    <>
      <MenuTop/>
      <div className="App">
          <Home/>
          <div className="footer" style={{height:"100px"}}/>
      </div>
    </>
  );
}

export default App;
