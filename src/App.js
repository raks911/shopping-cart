import './App.css';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Prodcutdetails from './components/Prodcutdetails';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">
      <Header className="hea"></Header>
      <Routes>
        <Route path='/' element={<Products></Products>} ></Route>
        <Route path='/cart/:id' element={<Prodcutdetails></Prodcutdetails>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
