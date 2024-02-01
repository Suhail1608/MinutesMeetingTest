'use client'
import React from 'react'
import './Button.scss'
const Button = ({label, icon, iconType}) => {
  return (
    <button className={`button ${iconType ? "iconType" : ""}`}>{label} <>{icon}</></button>
  )
}

export default Button