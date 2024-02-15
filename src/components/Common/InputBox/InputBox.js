'use client'
import React from 'react'
import './InputBox.scss'
const InputBox = ({value,setValue,placeholder, pwd, required}) => {
  return (
    <><input required={true}  className='input-box' placeholder={placeholder} 
    value={value} onChange={(e)=>{setValue(e.target.value)}}
    type={pwd ? "password" : "text"}></input>
    
    </>
  )
}

export default InputBox