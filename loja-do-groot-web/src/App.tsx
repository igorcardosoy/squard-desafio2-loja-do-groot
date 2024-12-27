import { ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './components/Router'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className='page-container'>
      <ClerkLoaded>
        <SignedIn>
          <header>
            <Navbar />
          </header>
        </SignedIn>
        <main>
          <SignedIn>
            <Router />
          </SignedIn>
          <SignedOut>
            <LoginPage />
          </SignedOut>
        </main>
        <Footer />
      </ClerkLoaded>
    </div>
  )
}

export default App
