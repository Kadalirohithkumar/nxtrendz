import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import './auth.css'
import {Link, useNavigate} from 'react-router-dom'
import {db,app} from './firebase'
import {collection,getDocs} from 'firebase/firestore'

const Login = ({setUserDetail,setAuth}) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const dbref=collection(db,'Users')

    const athentication=async(e)=>{
        if(email.length===0||password.length===0){
            alert('All fields are required')
        }else{
            try{
                e.preventDefault()
                const createAccount=await app.auth().signInWithEmailAndPassword(email,password)
                if(createAccount){
                        const getData=await getDocs(dbref)
                        const data=getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
                        const userdata=data.find((info)=>{
                            return info.Email===email
                        })
                        setUserDetail(userdata)
                        alert('User Login Succesfully')
                        setAuth(true)
                        navigate('/')
                }else{
                    alert('Error while Login')
                }
            }catch(error){
    
            }
        }
    }


  return (
    <div className='auth'>
        <div className='container'>
            <h2 className=''>Register</h2>
            <div className='icon'>
            <FaShoppingCart />
            </div>
            <div className='form'>
                <div className='box'>
                    <input type='email' placeholder='E-Mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='box'>
                    <input type='password' placeholder='PassWord' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={athentication}>Login</button>
                <p>Don't have an account<Link to='/'>Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login