'use client'
import InputBox from '@/components/Common/InputBox/InputBox'
import React, { useState } from 'react'
import './page.scss'
import Button from '@/components/Common/Button/Button'
import { createTeam } from '../../../../../utils/setData'
import { userCheck, userVerify } from '../../../../../utils/getData'
import LoaderComp from '@/components/Common/LoaderComp/LoaderComp'
const CreateTeamId = () => {
  const [district, setDistrict] = useState("")
  const [internalDistrict, setInternalDistrict] = useState("")
  const [level, setLevel] = useState("")
  const [username, setUsername] = useState("")
  const [pwd, setPwd] = useState("")
  const [loading, setLoading] = useState(false)
 const handleCreateTeam = async(e)=>{
  setLoading(true)
  e.preventDefault()
  try{
    const teamCheck = await userCheck(username)
    if(teamCheck !== null){
      await createTeam(district,internalDistrict,level,username,pwd)
      setLoading(false)
    }else {
      alert("exists")
    }
  }catch(e){
    console.log(e)
  }
  
  
 }
  return (
    <>
    <div className='createTeam'>
      <div className='createTeamFormBox'>
        <form className='createTeamForm'>
          <label className='label'>
            District <InputBox value={district} setValue={setDistrict} placeholder={"District"}/>
          </label>
          <label className='label'>
            Internal district <InputBox value={internalDistrict} setValue={setInternalDistrict} placeholder={"Internal District"}/>
          </label>
          <label className='label'>
            Level <InputBox value={level} setValue={setLevel} placeholder={"Level"}/>
          </label>
          <label className='label'>
            Username <InputBox value={username} setValue={setUsername} placeholder={"Username"}/>
          </label>
          <label className='label'>
            Password <InputBox value={pwd} setValue={setPwd} placeholder={"Password"}/>
          </label>
          <Button cb={(e)=>{handleCreateTeam(e)}} label={"Submit"}/>
        </form>
      </div>
    </div>
    <LoaderComp show={loading}/>
    </>
  )
}

export default CreateTeamId