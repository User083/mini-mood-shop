
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store } from './pages'
import { Navbar, Footer } from './components'


function App() {


  return (
    <BrowserRouter>

    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    <Footer/>

    </BrowserRouter>

  )
}

export default App
