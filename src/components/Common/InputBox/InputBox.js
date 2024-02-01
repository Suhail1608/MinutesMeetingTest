'use client'
import React from 'react'
import './InputBox.scss'
const InputBox = ({value,setValue,placeholder, pwd}) => {
  return (
    <input className='input-box' placeholder={placeholder} 
    value={value} onChange={(e)=>{setValue(e.target.value)}}
    type={pwd ? "password" : "text"}></input>
  )
}

export default InputBox