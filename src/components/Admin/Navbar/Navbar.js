import React from 'react'
import './Navbar.scss'
import Link from 'next/link'
const Navbar = ({navItems}) => {
  return (
    <div className='navbar'>
      <div className='navmenu'>
        {navItems.map((navitem)=>{
          return(<Link key={navitem.value} className='navitem' href={navitem.value}>{navitem.label}</Link>)
        })}
      </div>
    </div>
  )
}

export default Navbar