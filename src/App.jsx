import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Blog from './components/pages/Blog/Blog'
import Contact from './components/pages/Contact/Contact'
import About from './components/pages/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App