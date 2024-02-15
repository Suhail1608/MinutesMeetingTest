'use client'
import InputBox from '@/components/Common/InputBox/InputBox'
import React, { useState } from 'react'
import './page.scss'
import Button from '@/components/Common/Button/Button'
import { useRouter } from 'next/navigation'
const AdminLoginPage = () => {
    const [adminId, setAdminId] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState(false)
    const router = useRouter()
    function handleAdminLogin(e){
      e.preventDefault()
      if(adminId === "admin" && pwd === "123"){
        router.push("admin/meetings-panel")
      }else{
        setErr(true)
      }
    }
  return (
    <div className='adminLoginPage'>
        <div className='adminLoginForm'>
            <form className='loginForm'>
                {err && <span className='err'>Invalid credentials</span>}
                <label>Admin ID</label>
                <InputBox value={adminId} setValue={setAdminId} placeholder={"Admin"}/>
                <label>Password</label>
                <InputBox pwd value={pwd} setValue={setPwd} placeholder={"Password"}/>
                <Button cb={(e)=>{handleAdminLogin(e)}}  label={"Login"}/>
            </form>
        </div>
    </div>
  )
}

export default AdminLoginPage