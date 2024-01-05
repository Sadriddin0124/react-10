import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/menu'
import Homework1 from './components/Homework1'
import Homework2 from './components/Homework2'
import Homework3 from './components/Homework3/Homework3'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='homework1' element={<Homework1/>}></Route>
        <Route path='homework2' element={<Homework2/>}></Route>
        <Route path='homework3' element={<Homework3/>}></Route>
      </Routes>
    </div>
  )
}
