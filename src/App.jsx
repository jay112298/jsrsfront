import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home/Home'
import Blog from './components/pages/Blog/Blog'
import Contact from './components/pages/Contact/Contact'
import About from './components/pages/About/About'
import Signup from './components/pages/Signup/Signup'
import Signin from './components/pages/Signin/Signin'
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
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App