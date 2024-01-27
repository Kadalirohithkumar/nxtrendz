import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Register from './register.js'
import Login from './login.js'
import Home from './home.js';

const rout = ({setUserDetail,setAuth}) => {
  return (
    <>
    <Routes>
        <Route path='/register' element={<Register setUserDetail={setUserDetail} setAuth={setAuth}/>} />
        <Route path='/login' element={<Login setUserDetail={setUserDetail} setAuth={setAuth}/>} />
        <Route path='/' element={<Home setUserDetail={setUserDetail} />}/>
    </Routes>
    </>
  )
}

export default rout