import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Allusers from './Allusers'
import Login from './Login'
import Singup from './Singup'
import CreateUsers from './Creatuser'
import Update from './Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/creatuser" element={<CreateUsers/>} />
         <Route path="/signup" element={<Singup/>} />
       
        <Route path="/login" element={<Login/>} />?

          <Route path="/allusers" element={<Allusers/>} />


          <Route path='/update/:id' element={<Update></Update>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
