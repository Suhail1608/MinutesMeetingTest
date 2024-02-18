'use client'
import React, { useEffect, useState } from 'react'
import './page.scss'
import Image from 'next/image'
import { getMeet } from '../../../../../../../../utils/getData'
import Button from '@/components/Common/Button/Button'
import { updateTick } from '../../../../../../../../utils/setData'
const MeetingView = ({params}) => {
  const [meetingData, setMeetingData] = useState({})
  const [verified, setVerified] = useState(false)
    useEffect(()=>{
      const getData = async () =>{
        const meetingData = await getMeet(parseInt(params.meetingId))
        setMeetingData(meetingData)
        setVerified(meetingData.verified)
      }
      getData()
    },[])
    const handleVerify = async () =>{
      setVerified(!verified)
      await updateTick(meetingData.id, !verified)
    }
  return (
    <div className='oneMeetingContainer'>
        <div className='oneMeetingPage'>
            <div className='om-dr'><div className='oneMeetingLabel'>Title</div><span className='oneMeetingData'>{meetingData.title}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Image</div><span className='oneMeetingData'><Image className='oneMeetingImg' width={100} height={100} src={meetingData.img} alt=''/></span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Description</div><span className='oneMeetingData'>{meetingData.desc}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Location</div><span className='oneMeetingData'>{meetingData.loc}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Attendees</div><span className='oneMeetingData'>{meetingData.attendees}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>District</div><span className='oneMeetingData'>{meetingData.district}</span></div>
            <div className='om-dr'><div className='oneMeetingLabel'>Submitted at</div><span className='oneMeetingData'>{meetingData.createdAt?.toString().slice(0,24)}</span></div>
        </div>
        <div className='oneMeetingUI'>
          <Button cb={handleVerify} label={verified? "Disprove" : "Verify"} verify={!verified} unVerify={verified}/>
        </div>
    </div>
  )
}

export default MeetingView