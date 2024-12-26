import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Products from './pages/Products'
import Register from './pages/Register'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App
