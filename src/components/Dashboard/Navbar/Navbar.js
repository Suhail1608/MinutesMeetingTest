"use client"
import React,{useState, useEffect} from 'react'
import './Navbar.scss'
import { getTeamId } from '../../../../utils/getData'


const Navbar = () => {
  const [teamId, setTeamId] = useState()
 
  useEffect(()=>{
    const getData = async ()=>{
      const isAuth = JSON.parse(localStorage.getItem("isAuth"))
      const data =await getTeamId(isAuth.id)
      return data.teamId
    }
    
    const data =  getData()
    setTeamId(data)
  },[])
  
  return (
    <div className='navbar'>
      <span className='teamId'>Welcome {teamId}</span>
      <span>Stuff</span>
    </div>
  )
}

export default Navbar