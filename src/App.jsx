
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Store } from './pages'
import { Navbar } from './components'


function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App
