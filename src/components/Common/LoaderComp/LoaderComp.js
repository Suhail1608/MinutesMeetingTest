import React from 'react'
import Modal from '../Modal/Modal'
import Image from 'next/image'
import Loading from '@/assets/icons/loading.svg'
import './LoaderComp.scss'
const LoaderComp = ({show}) => {
  return (
    <div style={{display:`${show? "flex":"none"}`}} className='loadingScreen'>
        <Image width={100} src={Loading} alt=''></Image>
    </div>
  )
}

export default LoaderComp