'use client'
import Navbar from '@/components/Admin/Navbar/Navbar'
import React from 'react'
import './layout.scss'
import adminAuth from '@/app/auth/AdminGuard/AdminGuard'
const AdminDashboardLayout = ({children}) => {
  
  return (
    <div className='adminDashboardLayout'>
       
       {children}
    </div>
  )
}

export default adminAuth(AdminDashboardLayout)