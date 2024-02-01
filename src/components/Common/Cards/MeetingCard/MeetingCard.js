'use client'
import React from 'react'
import Button from '../../Button/Button'
import './MeetingCard.scss'
import MeetingThumb from '@/assets/images/meetingSnap.jpg'
import Image from 'next/image'
const MeetingCard = ({meetingData}) => {
  return (
    <div className='meeting-card'>
        <div className='meeting-left'>
            <div className='meeting-title'>{meetingData.MeetingTitle}</div>
            <div className='meeting-thumb'>
                {/* <img src={MeetingThumb} alt='thumbnail'/> */}
                <Image className='img'  src={MeetingThumb} alt=''/>
            </div>
            <span className='date'>Date Modified: 12/11/2024</span>
        </div>
        <div className='meeting-right'>
           
            <div className='meeting-button'>
                <Button label={"View"}/>
                <Button label={"Edit"}/>
            </div>
        </div>
    </div>
  )
}

export default MeetingCard