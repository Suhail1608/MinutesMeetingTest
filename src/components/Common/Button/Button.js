'use client'
import React from 'react'
import './Button.scss'
const Button = ({verify, unVerify, label, icon, iconType, secondary,link,cb,disabled}) => {
  if(!secondary){
    return (
      <button disabled={disabled} onClick={cb} className={`button ${iconType ? "iconType" : 
      verify ? "verifyBtn" : unVerify ? "unVerifyBtn" : ""}`}>{label} <>{icon}</></button>
    )
  }
  if(secondary){
    return(
      <button onClick={cb} className={`button-sec ${iconType ? "iconType" : link ? "linkType" : ""}`}><>{icon}</> {label}</button>
    )
  }
}

export default Button