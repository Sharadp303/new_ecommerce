import React from 'react'
import {Link} from 'react-router-dom'
import { TfiHeart ,TfiShoppingCart} from "react-icons/tfi";
import { MdAccountCircle } from "react-icons/md";
import {FiSearch} from 'react-icons/fi';

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img className='logo' src="./Img/logo.png" alt="logo" />
                </div>
                <div className="item">
                    <div className="item">
                     <Link className='link' to="/products/1" >Men</Link>
                    </div>
                    <div className="item">
                     <Link className='link' to="/products/2">Women</Link>
                    </div>
                    <div className="item">
                     <Link className='link' to="/products/3">Children</Link>
                    </div>
                </div>
            </div>
            <div className="center">
                    <Link className='link' to="/">SHOPIF</Link>

            </div>
            <div className="right">
                <div className="item">
                    <Link className='link' to="/">About</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/">Contact</Link>
                </div>
                    <div className='icons'>
                        <FiSearch/>
                        <TfiHeart/>
                        <MdAccountCircle/>
                        <div className="cartIcon">
                        <TfiShoppingCart/>
                        <span>0</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar