import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Projects from '../pages/projects/Projects'
import Contact from '../pages/contact/Contact'
import NotFound from '../components/error/NotFound'
import Footer from '../components/footer/Footer'



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
        <>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </>
        }>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contacts' element={<Contact/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
//! navbar ve footerın notfound sayfasında gözükmesini istemediğimiz için yukarıdaki yapıyı kurduk
export default AppRouter