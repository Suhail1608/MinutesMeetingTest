import React from 'react'
import { getMeet } from '../../../../../../utils/getData'
import './page.scss'
import Image from 'next/image'
const MeetingView = async ({params}) => {
    const meetingData = await getMeet(parseInt(params.meetingId))
  return (
    <div className='oneMeetingContainer'>
        <div className='oneMeetingPage'>
            <div className='om-dr'><div className='oneMeetingLabel'>Title</div><span className='oneMeetingData'>{meetingData.title}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Image</div><span className='oneMeetingData'><Image className='oneMeetingImg' width={100} height={100} src={meetingData.img} alt=''/></span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Description</div><span className='oneMeetingData'>{meetingData.desc}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Location</div><span className='oneMeetingData'>{meetingData.loc}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Attendees</div><span className='oneMeetingData'>{meetingData.attendees}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>District</div><span className='oneMeetingData'>{meetingData.district}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Submitted at</div><span className='oneMeetingData'>{meetingData.createdAt.toString().slice(0,24)}</span></div>
        </div>
        
    </div>
  )
}

export default MeetingView