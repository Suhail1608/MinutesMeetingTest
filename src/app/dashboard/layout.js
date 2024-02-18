'use client'
import Navbar from '@/components/Dashboard/Navbar/Navbar'
import React from 'react'
import './layout.scss'
import userAuth from '../auth/UserGuard/UserGuard'
const layout = ({children}) => {
  
  return (
    <div className='MeetingPanelLayout'>
    <div><Navbar /></div>
    
    <div className='MeetingPanelContainer'>{children}</div>
    </div>
  )
}

export default userAuth(layout)