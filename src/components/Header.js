import React from 'react'
import logo from '../assets/logo1.jpg'

export default function Header({title,description}) {
  return (
    <div className='header'>
        <img src={logo} className="app-logo" alt="logo" />
          <div className='content'>
              <h1 className='title'>{title}</h1>
              <p className='text'>{description}</p>
          </div>
    </div>
  )
}