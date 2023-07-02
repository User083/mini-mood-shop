
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store, About } from './pages'
import { Navbar, Footer } from './components'


function App() {


  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<About/>}/>
      <Route path='/account' element={<About/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App
