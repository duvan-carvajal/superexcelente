import { useState } from 'react'
import Home from './Home/index'
import Favoritos from './Favoritos'
import Informativa from './Informativa'
import Usuario from './Usuario'
import Original from './Original'
import Equipos from './Equipos'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/Favoritos">Favoritos</Link>
      <Link to="/Original">Original</Link>
      <Link to="/Informativa">Informativa</Link>
      <Link to="/Usuario">Usuario</Link>
      <Link to="/equipo/:equipo">equipo</Link>
    <Routes >
      <Route path ="/" element ={<Home /> } />
      <Route path = "/Favoritos" element ={<Favoritos />} />
      <Route path = "/Original" element ={<Original />} />
      <Route path = "/Informativa" element ={<Informativa />} />
      <Route path = "/Usuario" element ={<Usuario />} />
      <Route path = "/equipo/:equipo" element = {<Equipos />} />

    </Routes>
  </Router>
    
    </>
  )
}

export default App
