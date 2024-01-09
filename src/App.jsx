import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Home />
      <Products />
      <Footer />
    </>
  )
}

export default App
