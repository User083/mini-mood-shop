
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store, About, Cart, Checkout } from './pages'
import { Navbar, Footer } from './components'


function App() {


  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App
