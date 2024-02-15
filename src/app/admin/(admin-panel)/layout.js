import Navbar from '@/components/Admin/Navbar/Navbar'
import React from 'react'
import './layout.scss'
const AdminPanelLayout = ({children}) => {
  const navItems = [
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
        <div><Navbar navItems={navItems}/></div>
        <div className='adminContainter'>{children}</div>
    </div>
  )
}

export default AdminPanelLayout