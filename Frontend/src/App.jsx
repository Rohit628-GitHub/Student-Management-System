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
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <Routes>
        
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Singup/>} />
        <Route path="/login" element={<Login/>} />

       
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/creatuser" element={<ProtectedRoute><CreateUsers/></ProtectedRoute>} />
        <Route path="/allusers" element={<ProtectedRoute><Allusers/></ProtectedRoute>} />
        <Route path='/update/:id' element={<ProtectedRoute><Update/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
