import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Logo from './img/Logo.png'
import MenuList from './MenuList.jsx'
import Banner from './Banner.jsx'
import Form from './Form.jsx'
import Footer from './Footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <main>
    <div className="header">
      <img src={Logo} alt="Logo"></img>
      <div className="content-link" id="menu-list">
        <MenuList name='Home' link='#' isActive />
        <MenuList name='Service' link='#' />
        <MenuList name='Feature' link='#' />
        <MenuList name='Product' link='#' />
        <MenuList name='Testimonial' link='#' />
        <MenuList name='FAQ' link='#' />
      </div>
    </div>

    <div className="banner">
      <Banner />
    </div>
    <div className='card'>
      <Form />
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </main>
)
