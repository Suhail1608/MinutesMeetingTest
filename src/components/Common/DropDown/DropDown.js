'use client'
import React from 'react'
import './DropDown.scss'
const DropDown = ({options, value,setValue}) => {
  return (
    <>
    <select id='selectOpt' className='selectOpt' value={value} onChange={(e)=>{setValue(e.target.value)}}>
        {options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.label}</option>
        })}
    </select>
    </>
  )
}

export default DropDown