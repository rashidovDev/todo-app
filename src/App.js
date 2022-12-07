import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { List, Navbar } from './components/navigation'

const App = () => { 
  
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<List/>} />        
    </Routes>
    </>
  )
}

export default App