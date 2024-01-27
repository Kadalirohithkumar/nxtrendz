import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";



import './nav.css'


const Nav = ({auth,setAuth,userDetail}) => {
    const [openNav,setOpenNav]=useState(false)
    const logout=()=>{
        setAuth(false)
    }
    const navopen=()=>{
        setOpenNav(true)
    }
    const closenav=()=>{
        setOpenNav(false)
    }
  return (
    <>
        <div className='nav'>
            <div className='container'>
                <div className='top_bar'>
                    <p>Welcome to NxTrendz Store</p>
                    {
                        auth ?
                        <>
                            <div className='logout_container'>
                                <p><Link to='./login' className='link' onClick={logout}>LogOut</Link></p>
                            </div>
                        </>
                        :
                        <>
                            <div className='login_container'>
                                <p><Link to='./login'  className='link'>Login</Link><Link to='./register'  className='link'>Register</Link></p>
                            </div>
                        </>
                    }
                </div>
                <div className='mid_bar'>
                    <div className='content'>
                        <div className='navicon'>
                            {
                                openNav ?
                                <>
                                    <div className='closenav' onClick={closenav}>
                                    <IoClose />
                                    </div>
                                </>
                                :
                                <>
                                    <div className='navopen' onClick={navopen}>
                                    <IoMenu />
                                    </div>
                                </>

                            }

                        </div>
                        <div className='logo'>
                            <img src='images/logo.png' alt='logo'/>
                        </div>
                        <div className='search_bar'>
                            <input type='text' placeholder='search Products...' />
                            <button>Search</button>
                        </div>
                        <div className='icons'>
                            <div className='icon'>
                                <Link to='/cart'><FaShoppingCart /></Link>
                            </div>
                            <div className='icon'>
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bottom_bar ${openNav && 'active'}`}>
                    <div className='user_detail'>
                        <div className='icon'>
                        <FaUser />
                        </div>
                        <div className='detail'>
                            {
                                auth ?
                                <>
                                    <h2>{userDetail.Name}</h2>
                                    <p>{userDetail.Email}</p>
                                </>
                                :
                                <>
                                    <div className='request_signin_con'>
                                        <p className='request_signin'>Please, Sign In</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    <ul>
                        <li><Link to='/' className='link'>Home</Link></li>
                        <li><Link to='/products' className='link'>Products</Link></li>
                        <li><Link to='/about' className='link'>About</Link></li>
                        <li><Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav