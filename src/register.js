import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './auth.css'
import {Link,useNavigate} from 'react-router-dom'
import {db,app} from './firebase'
import {collection,addDoc,getDocs} from 'firebase/firestore'


const Register = ({setUserDetail,setAuth}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const dbref=collection(db,'Users')

    const athentication=async(e)=>{
        if(name.length===0|| email.length===0||phone.length===0||password.length===0){
            alert('All fields are required')
        }else{
            try{
                e.preventDefault()
                const createAccount=await app.auth().createUserWithEmailAndPassword(email,password)
                if(createAccount){
                    const userInfo=await addDoc(dbref,{Name:name,Email:email,Phone:phone})
                    if(userInfo){
                        const getData=await getDocs(dbref)
                        const data=getData.docs.map((doc)=>({id:doc.id,...doc.data()}))
                        const userdata=data.find((info)=>{
                            return info.Email===email
                        })
                        setUserDetail(userdata)      
                        alert('User Regitered Succesfully')
                        setAuth(true)
                        navigate('/')
                    }
                }else{
                    alert('Error while Registering')
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
                    <input type='text' placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='box'>
                    <input type='email' placeholder='E-Mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='box'>
                    <input type='text' placeholder='Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className='box'>
                    <input type='password' placeholder='PassWord' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={athentication}>Register</button>
                <p>Already have an account<Link to='/login'>Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register