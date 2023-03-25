import {  faHome, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import Register from './Register'

 class Navbar extends Component {
  render() {
    return (
      <div className='container' style={{marginTop:20}}>
        <BrowserRouter>
        <ul>
        <li style={{marginLeft:20}}><Link to='/home'><FontAwesomeIcon icon={faHome}/><span></span>Home</Link></li>
            <li style={{marginLeft:20}}><Link to='/signin'><FontAwesomeIcon icon={faUser}/><span></span>Sign in</Link></li>
            <li><Link to='/signup'><FontAwesomeIcon icon={faUserEdit}/><span></span>Sign up</Link></li>
        </ul>
        <Routes>
        <Route path='/home' element={<Home/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default Navbar
