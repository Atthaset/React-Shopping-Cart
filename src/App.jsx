import { useState } from 'react'
import './App.css'
import CartComp from './components/CartComp'
import HeaderComp from './components/HeaderComp'

function App() {
  return (
    <div className='App'>
      <HeaderComp />
      <CartComp />
    </div>
  )
}

export default App
