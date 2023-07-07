
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store, About, Cart, Checkout} from './pages'
import { Navbar, Footer } from './components'
import { useEffect, useState } from 'react'


function App() {

  const [query, setQuery] = useState("products");
  const [cart, setCart] = useState([]);
  const [counter, setCounter] =useState(0);

 useEffect(()=>{
 setCounter(cart.length)
 }, [cart])
  return (
    <BrowserRouter>

    <Navbar setQuery={setQuery} counter={counter}/>
    <Routes>
      
      <Route path='/' element={<Home setQuery={setQuery}/>}/>
      <Route path='/store' element={<Store query={query} setCart={setCart} cart={cart} setCounter={setCounter}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} setCounter={setCounter}/>}/>
      <Route path='/cart/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App
