import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Policy from './components/pages/Policy'
import Error from './components/pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Educations from './components/pages/Educations'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/educations" element={ <Educations /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/policy" element={ <Policy /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path='/*' element={ <Error /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App