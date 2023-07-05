
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store, About, Cart, Checkout } from './pages'
import { Navbar, Footer } from './components'
import { useEffect, useState } from 'react'


function App() {

  const [query, setQuery] = useState("products");


  return (
    <BrowserRouter>

    <Navbar setQuery={setQuery}/>
    <Routes>
      
      <Route path='/' element={<Home setQuery={setQuery}/>}/>
      <Route path='/store' element={<Store query={query}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App
