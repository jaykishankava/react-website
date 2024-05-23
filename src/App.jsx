import { useState } from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Baner from './Baner'
import Products from './Products'
import Deal from './Deal'
import Team from './Team'
import Footer from './Footer'

function App() {

  return (
    <div>
      <Header/>
      <Baner/>
      <Products/>
      <Deal/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App
