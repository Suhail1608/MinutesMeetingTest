'use client'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import './MeetingCard.scss'
import MeetingThumb from '@/assets/images/meetingSnap.jpg'
import Image from 'next/image'
import Modal from '../../Modal/Modal'
import MeetingInfoBox from '../../InfoBox/MeetingInfoBox'
import Verified from '@/assets/icons/Verified.svg'
import Warning from '@/assets/icons/Warning.svg'
import { updateTick } from '../../../../../utils/setData'
import LoaderComp from '../../LoaderComp/LoaderComp'
import { usePathname, useRouter } from 'next/navigation'
const MeetingCard = ({meetingData, isAdmin}) => {
    const thumbnail = meetingData.img ? meetingData.img : MeetingThumb
    //const [showModal, setShowModal] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const [verified, setVerified] = useState(meetingData.verified)
    const [loading, setLoading] = useState(false)
    async function handleVerify() {
        setLoading(true)
        setVerified(!verified)
        await updateTick(meetingData.id, !verified)
        setLoading(false)
    }
    function handleView(){
        setLoading(true)
        router.push(`${pathname}/meeting-page/${meetingData.id}`)
    }
  return (
    <><div className='meeting-card'>
    <div className='meeting-left'>
        <div className='meeting-title'>{meetingData.title}</div>
        <div className='meeting-thumb'>
            {meetingData.img && 
            <Image className='img' width={100} height={100}  src={meetingData.img} alt=''/>}
            {!meetingData.img &&
            <Image className='img' src={thumbnail} alt=''/>}
        </div>
        {verified && 
        <span className='verified tag'><Image width={20} src={Verified} alt=''/> Verified</span>}
        {!verified && 
        <span className='warning tag'><Image width={20}  src={Warning} alt=''/> Yet to be verified</span>}
        <span className='date'>Submitted on: {meetingData.createdAt.toString().slice(0,24)}</span>
    </div>
    
    <div className='meeting-right'>
       
        <div className='meeting-button'>
            <Button cb={()=>{handleView()}} label={"View"}/>
            {!isAdmin &&
            <Button label={"Edit"}/>}
            {isAdmin &&
            <Button cb={()=>{handleVerify()}}
            unVerify={verified} verify={!verified} 
            label={`${verified ? "Disprove" : "Verify"}`}/>}
        </div>
    </div>
    
</div>
{/* <Modal setShow={setShowModal} show={showModal}><MeetingInfoBox data={meetingData}/></Modal> */}
<LoaderComp show={loading}/></>
  )
}

export default MeetingCard