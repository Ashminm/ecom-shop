
import './App.css';
import requests from './requests';
import Land from './components/Land';
import Navigation from './components/Navigation';
import Off from './components/Off';
import Products from './components/Products';
import Main from './components/Main';



function App() {
  return (
    <div className="App">

        <Navigation/>
        <Land  fetchUrl={requests.category}/>
        <Main fetchUrl={requests.mensclothing}/>
        <Products title="Featured Products" fetchUrl={requests.mensclothing}/>
        <Off/>
        <Products title="women's clothing" fetchUrl={requests.womensclothing}/>
        <Products title="men's clothing" fetchUrl={requests.jewelery}/>
        <Products title="electronics" fetchUrl={requests.electronics}/>
    </div>
  );
}

export default App;
