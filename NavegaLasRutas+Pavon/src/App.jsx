import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error404/Error404'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App