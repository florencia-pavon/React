import { useState } from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {

  return (
    <>  
      <Navbar/>
      <ItemListContainer saludo="Bienvenido a lotta pasteleria"/>
    </>
    
  )
}

export default App
