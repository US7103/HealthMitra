import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Dofirst from './components/Dofirst'
import Show from './components/Show'
import Doupdate from './components/Doupdate'
import Front from './components/Front'


const App = () => {
  return (
   <>
  
   <Routes>
    <Route path='/' element={<Front />} />
    <Route path='/form' element={<Dofirst/>} />
    <Route path='/update' element={<Doupdate/>} />
    <Route path='/show' element={<Show/>} />
   </Routes>
   </>
  )
}

export default App
