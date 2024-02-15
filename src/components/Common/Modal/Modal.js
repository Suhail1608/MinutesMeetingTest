import React from 'react'
import './Modal.scss'
import Button from '../Button/Button'
import Cancel from '@/assets/icons/cancel.jpg'
import Image from 'next/image'
const Modal = ({children, show, setShow}) => {
  return (
    <div  style={{display:`${show ? "block" : "none"}`}} className='modalBox'>
     
        <div className='modalContent'>
        <div className='modalUi'>
          <div className='modalButton'><Button cb={()=>{setShow(false)}} secondary icon={<Image width={30} src={Cancel} alt=''/>}></Button></div>
          {children}
        </div>
          
        </div>
    </div>
  )
}

export default Modal