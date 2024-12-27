import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Product from './pages/Product'
import Products from './pages/Products'
import Register from './pages/Register'

function App() {
  return (
    <div className='page-container'>
      <SignedIn>
        <header>
          <Navbar />
        </header>
      </SignedIn>
      <main>
        <SignedIn>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/about-us' element={<AboutUs />} />
          </Routes>
        </SignedIn>
        <SignedOut>
          <LoginPage />
        </SignedOut>
      </main>
      <Footer />
    </div>
  )
}

export default App
