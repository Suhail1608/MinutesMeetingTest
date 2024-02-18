'use client'
import Navbar from '@/components/Admin/Navbar/Navbar'
import React from 'react'
import './layout.scss'
import adminAuth from '@/app/auth/AdminGuard/AdminGuard'
const AdminPanelLayout = ({children}) => {
  const navItems = [
    {
      label:"Dashboard",
      value:"/admin/dashboard"
    },
    {
      label:"Meetings",
      value:"/admin/meetings-panel"
    },
    {
      label:"Explore",
      value:"/admin/explore-meetings"
    },
    {
      label:"Create",
      value:"/admin/create-team-id"
    },
  ]
  return (
    <div className='adminPanelLayout'>
        <div className='header'><Navbar navItems={navItems}/></div>
        <div className='adminContainter'>{children}</div>
    </div>
  )
}

export default adminAuth(AdminPanelLayout)