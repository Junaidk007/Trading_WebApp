import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './landing-page/home/HomePage'
import Signup from './landing-page/signup/Signup'
import About from './landing-page/about/AboutPage'
import Pricing from './landing-page/Pricing/PricingPage'
import Product from './landing-page/Product/ProductPage'
import Support from './landing-page/support/SupportPage'
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import NotFound from './landing-page/NotFound';

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Product/>}></Route>
        <Route path='/pricing' element={<Pricing/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
)