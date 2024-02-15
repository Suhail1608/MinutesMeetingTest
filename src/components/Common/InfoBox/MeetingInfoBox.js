'use client'
import Image from 'next/image'
import React from 'react'
import './styles.scss'
import thumb from '@/assets/images/meetingSnap.jpg'
const MeetingInfoBox = ({data}) => {
  return (
    <div className='meetingInfoContainer'>
      <div className='meetingInfoBox'>
      <div className='imageHolder'>
          {data.img &&
          <Image className='infoImg' width={100} height={100} src={data.img} alt=''></Image>}
          {!data.img &&
          <Image className='infoImg' src={thumb} alt=''></Image>}
        </div>
        <label className='d-row'><b className='d-label'>Title: </b>{data.title}</label>
        <label className='d-row'><b className='d-label'>description: </b>{data.desc}</label>
        <label className='d-row'><b className='d-label'>location: </b>{data.loc}</label>
        <label className='d-row'><b className='d-label'>Image: </b></label>
        
        <label className='d-row'><b className='d-label'>Attendees: </b>{data.attendees}</label>
        <label className='d-row'><b className='d-label'>District: </b>{data.district}</label>
        <label className='d-row'><b className='d-label'>Submitted at: </b>{data.createdAt.toString().slice(0,24)}</label>
        <label className='d-row'><b className='d-label'>Updated at: </b>{data.updatedAt.toString().slice(0,24)}</label>
      </div>
    </div>
  )
}

export default MeetingInfoBox