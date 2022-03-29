import React from 'react'
import logo from '../assets/logo1.jpg'
import { IoIosSearch, IoMdCart} from 'react-icons/io';

export default function Header({title,description}) {
  return (
    <div className='header'>
         <div className='content-header'>
           <img src={logo} className="app-logo" alt="logo" />
              <div className='title-header'>
                <h1 className='title'>{title}</h1>
                <p className='text'>{description}</p>
              </div>
              <div>
                <IoIosSearch className="icon-header"/>
                <input  className='input-header' type="text" placeholder="SEARCH" />
                <IoMdCart className="icon-header"/>
              </div>
              
          </div>
    </div>
  )
}