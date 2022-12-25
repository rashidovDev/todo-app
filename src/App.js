import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddList, List, Navbar } from './components/navigation'

const App = () => { 
  
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<List/>} />   
     <Route path='/addlist' element={<AddList/>} />       
    </Routes>
    </>
  )
}

export default App